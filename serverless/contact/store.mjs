// Rate limiting and duplicate protection. DynamoDB (with a TTL on `expiresAt`) works across Lambda instances;
// the in-memory store is for local development and as a best-effort fallback inside one instance.

export function memoryStore() {
  const hits = new Map();
  const claims = new Map();
  return {
    async hit(key, { max, windowSeconds }, now = Date.now()) {
      const entry = hits.get(key);
      if (!entry || entry.resetAt <= now) {
        hits.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
        return { allowed: true };
      }
      if (entry.count >= max) return { allowed: false };
      entry.count += 1;
      return { allowed: true };
    },
    async claim(id, ttlSeconds, now = Date.now()) {
      const entry = claims.get(id);
      if (entry && entry.expiresAt > now) return entry.status;
      claims.set(id, { status: 'pending', expiresAt: now + ttlSeconds * 1000 });
      return 'claimed';
    },
    async complete(id) {
      claims.get(id).status = 'sent';
    },
    async release(id) {
      claims.delete(id);
    },
  };
}

export function dynamoStore(tableName, region) {
  let clientPromise;
  const client = async () => {
    clientPromise ??= import('@aws-sdk/client-dynamodb').then((sdk) => ({ sdk, db: new sdk.DynamoDBClient(region ? { region } : {}) }));
    return clientPromise;
  };
  const isConditionFailure = (error) => error?.name === 'ConditionalCheckFailedException';
  return {
    async hit(key, { max, windowSeconds }, now = Date.now()) {
      const { sdk, db } = await client();
      const bucket = Math.floor(now / 1000 / windowSeconds);
      try {
        await db.send(new sdk.UpdateItemCommand({
          TableName: tableName,
          Key: { pk: { S: `rate#${key}#${bucket}` } },
          UpdateExpression: 'ADD hits :one SET expiresAt = if_not_exists(expiresAt, :expires)',
          ConditionExpression: 'attribute_not_exists(hits) OR hits < :max',
          ExpressionAttributeValues: { ':one': { N: '1' }, ':max': { N: String(max) }, ':expires': { N: String(Math.floor(now / 1000) + windowSeconds * 2) } },
        }));
        return { allowed: true };
      } catch (error) {
        if (isConditionFailure(error)) return { allowed: false };
        throw error;
      }
    },
    async claim(id, ttlSeconds, now = Date.now()) {
      const { sdk, db } = await client();
      try {
        await db.send(new sdk.PutItemCommand({
          TableName: tableName,
          Item: { pk: { S: `submission#${id}` }, expiresAt: { N: String(Math.floor(now / 1000) + ttlSeconds) }, deliveryStatus: { S: 'pending' } },
          ConditionExpression: 'attribute_not_exists(pk) OR expiresAt <= :now',
          ExpressionAttributeValues: { ':now': { N: String(Math.floor(now / 1000)) } },
        }));
        return 'claimed';
      } catch (error) {
        if (isConditionFailure(error)) {
          const result = await db.send(new sdk.GetItemCommand({
            TableName: tableName, Key: { pk: { S: `submission#${id}` } }, ConsistentRead: true,
          }));
          // Older records have no delivery state. Never infer a successful send from those.
          return result.Item?.deliveryStatus?.S === 'sent' ? 'sent' : 'pending';
        }
        throw error;
      }
    },
    async complete(id) {
      const { sdk, db } = await client();
      await db.send(new sdk.UpdateItemCommand({
        TableName: tableName, Key: { pk: { S: `submission#${id}` } },
        UpdateExpression: 'SET deliveryStatus = :sent',
        ExpressionAttributeValues: { ':sent': { S: 'sent' } },
      }));
    },
    async release(id) {
      const { sdk, db } = await client();
      await db.send(new sdk.DeleteItemCommand({ TableName: tableName, Key: { pk: { S: `submission#${id}` } } }));
    },
  };
}
