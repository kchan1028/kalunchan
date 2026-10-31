export const metadata = {
  seoTitle: 'Distributed Systems Lessons From Asterisk and OpenSIPS VoIP — Ka Lun Chan',
  dek:
    'Partial failure, routing, retries and records that had to reconcile were everyday VoIP problems. Working with Asterisk, OpenSIPS, Python AGI and billing taught me the questions I still ask before choosing any architecture.',
  related: [
    { to: '/writing/founding-a-startup-isnt-easy/', label: 'What being every department at once taught me' },
    { to: '/writing/software-architecture-lessons-from-different-systems/', label: 'Architecture lessons that held up across very different systems' },
    { to: '/writing/team-size-should-influence-architecture/', label: 'How many services can your team actually run?' },
    { to: '/writing/building-a-startup-from-idea-to-acquisition/', label: 'Founder story: from an idea to an acquisition' },
    { to: '/writing/voip-apps-for-nokia-phones-before-the-iphone/', label: 'The same problems with a radio in someone’s pocket: VoIP on Nokia phones' },
    { to: '/writing/data-driven-engineering-network-voip-publishing/', label: 'Routing on call statistics: the data-to-decision loop' },
    { to: '/writing/building-software-before-and-after-ai/', label: 'The founder side of the same platform: I used to build everything myself' },
    { to: '/writing/capacity-planning-carrier-networks-to-cloud/', label: 'Capacity planning for signaling, media and regions' },
  ],
  keywords: [
    'VoIP distributed systems',
    'Asterisk OpenSIPS architecture',
    'Python AGI',
    'VoIP billing idempotency',
    'partial failure',
    'idempotency example',
    'SIP signaling vs media',
    'geolocation call routing',
    'distributed systems engineering',
    'VoIP architecture',
    'SIP routing',
    'least-cost routing',
    'distributed systems failure handling',
    'billing reconciliation',
  ],
  about: [
    { '@type': 'Thing', name: 'Distributed computing', sameAs: 'https://en.wikipedia.org/wiki/Distributed_computing' },
    { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Asterisk', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
    { '@type': 'SoftwareApplication', name: 'OpenSIPS', url: 'https://opensips.org/' },
    { '@type': 'Thing', name: 'Session Initiation Protocol', sameAs: 'https://en.wikipedia.org/wiki/Session_Initiation_Protocol' },
    { '@type': 'Thing', name: 'Call detail record', sameAs: 'https://en.wikipedia.org/wiki/Call_detail_record' },
    { '@type': 'Thing', name: 'Idempotence', sameAs: 'https://en.wikipedia.org/wiki/Idempotence' },
  ],
  faq: [
    {
      q: 'What is partial failure in a distributed system?',
      a: 'Partial failure is when some components work while others fail or time out. In VoIP, a call can connect and sound fine while the billing update for it fails, so “the system is up” doesn’t mean every outcome the business needs happened.',
    },
    {
      q: 'What is idempotency in billing?',
      a: 'Idempotency means running an operation more than once has the same result as running it once. In billing, each charge is keyed to a unique identifier for the call, so a retried or replayed event finds the charge already recorded instead of charging the customer twice.',
    },
    {
      q: 'What is the difference between SIP signaling and media?',
      a: 'SIP signaling carries the messages that set up, change and end a call. The media, the audio itself, usually travels separately over RTP and can take a different path, which is why a call can be set up correctly and still have audio problems.',
    },
  ],
};
