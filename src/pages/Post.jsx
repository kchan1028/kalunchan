import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { postBySlug, chapterFor } from '../content/writing';
import { getBody, loadBody } from '../content/postBodies';
import TitleBlock from '../components/TitleBlock';
import NotFound from './NotFound';
import { ArrowLeft, ArrowRight } from '../components/Icons';
import { hireLink } from '../content/engineeringLeadership';
import { ContinueReading, WhereThisFits } from '../components/ReadNext';

export default function Post() {
  const { slug } = useParams();
  const post = postBySlug[slug];
  const [, setLoaded] = useState(null);
  // On client-side navigation the body chunk may not be loaded yet; render once it arrives.
  useEffect(() => {
    if (!getBody(slug)) loadBody(slug).then(setLoaded);
  }, [slug]);
  if (!post) return <NotFound />;
  const { default: Body, Closing, toc = [] } = getBody(slug) || {};
  const chapter = chapterFor(slug);
  const contents = post.faq ? [...toc, ['short-answers', 'Short answers']] : toc;

  return (
    <article className="post" aria-labelledby="post-title">
      <TitleBlock
        section="650"
        title="Writing"
        as="p"
        coord={`${post.no} · Writing`}
        cells={[
          { k: 'Topic', v: post.topics[0] },
          { k: 'Reading', v: `${post.minutes} min` },
        ]}
      />
      <header className="sheet grid case__head">
        <nav className="case__back">
          <Link to="/writing/" className="link-arrow">
            <ArrowLeft /> <span>All writing</span>
          </Link>
        </nav>
        <h1 id="post-title" className="post__title display">{post.title}</h1>
        <p className="case__claim">{post.dek}</p>
        <p className="case__domains label">
          By <Link to="/about/">Ka Lun Chan</Link>
          {chapter && (
            <>
              {' · '}
              <Link to={`/writing/#chapter-${chapter.id}`} className="post__topic">{chapter.title}</Link>
            </>
          )}
          {' · '}{post.topics.join(' / ')}
        </p>
      </header>

      <div className="sheet grid post__body" data-coord={`${post.no} · Article`}>
        <nav className="case__toc" aria-label="In this article">
          <ol>
            {contents.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="post__prose">
          {Body && <Body />}
          {post.faq && (
            <section id="short-answers" aria-labelledby="short-answers-h">
              <h2 id="short-answers-h" className="post__h2">Short answers</h2>
              <div className="post__faq">
                {post.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="post__h3">{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {Closing && (
        <section className="post__close on-blue" aria-labelledby="closing-h" data-coord={`${post.no} · Closing`}>
          <div className="sheet grid">
            <Closing />
          </div>
        </section>
      )}

      {post.topics.includes('Leadership') && (
        <nav className="sheet post__hire" aria-label="For hiring teams">
          <Link to={hireLink.to} className="link-arrow"><span>{hireLink.label}</span> <ArrowRight /></Link>
        </nav>
      )}

      <WhereThisFits slug={slug} />
      <ContinueReading slug={slug} />
    </article>
  );
}
