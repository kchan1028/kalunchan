export const metadata = {
  seoTitle: 'Building VoIP Apps for Nokia Phones Before the iPhone — Ka Lun Chan',
  dek:
    'Building mobile VoIP applications with C++ between 2005 and 2010, when affordable international calling mattered more than having the latest smartphone.',
  related: [
    { to: '/writing/building-software-before-and-after-ai/', label: 'The backend those apps talked to, and how I build now' },
    { to: '/writing/open-source-voip-distributed-systems-lessons/', label: 'What open-source VoIP taught me about distributed systems' },
    { to: '/writing/building-a-startup-from-idea-to-acquisition/#customers', label: 'Building for people the system wasn’t designed for' },
    { to: '/writing/founding-a-startup-isnt-easy/', label: 'Being every department at once' },
    { to: '/experience/#communications', label: 'Co-founder and CTO: the problem, decisions and outcome' },
  ],
  keywords: [
    'Nokia VoIP application',
    'Symbian C++ development',
    'Nokia S60 VoIP app',
    'mobile VoIP before smartphones',
    'early mobile application development',
    'history of mobile VoIP',
    'developing applications for Nokia phones',
    'VoIP technology in the 2000s',
    'mobile SIP client battery and NAT',
    'affordable international calling app',
  ],
  about: [
    { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
    { '@type': 'Thing', name: 'Symbian', sameAs: 'https://en.wikipedia.org/wiki/Symbian' },
    { '@type': 'Thing', name: 'Mobile app development', sameAs: 'https://en.wikipedia.org/wiki/Mobile_app_development' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Nokia', sameAs: 'https://en.wikipedia.org/wiki/Nokia' },
    { '@type': 'Thing', name: 'S60 (software platform)', sameAs: 'https://en.wikipedia.org/wiki/S60_(software_platform)' },
    { '@type': 'Thing', name: 'C++', sameAs: 'https://en.wikipedia.org/wiki/C%2B%2B' },
    { '@type': 'Thing', name: 'Session Initiation Protocol', sameAs: 'https://en.wikipedia.org/wiki/Session_Initiation_Protocol' },
    { '@type': 'Thing', name: 'iPhone (1st generation)', sameAs: 'https://en.wikipedia.org/wiki/IPhone_(1st_generation)' },
    { '@type': 'Thing', name: 'Asterisk (PBX)', sameAs: 'https://en.wikipedia.org/wiki/Asterisk_(PBX)' },
    { '@type': 'Thing', name: 'OpenSIPS', sameAs: 'https://en.wikipedia.org/wiki/OpenSIPS' },
    { '@type': 'Thing', name: 'Nokia 1100', sameAs: 'https://en.wikipedia.org/wiki/Nokia_1100' },
  ],
  faq: [
    {
      q: 'Why build VoIP apps for Nokia phones instead of the iPhone?',
      a: 'Because our customers carried Nokias. The service made international calls cheaper for immigrants calling family in South America, Asia and Africa, and in those years the iPhone was expensive, sold in few countries and could not run VoIP over cellular. A Symbian app on the phone a customer already owned reached far more of them.',
    },
    {
      q: 'What was it like to develop apps for Nokia phones in C++?',
      a: 'Native Nokia development meant Symbian C++, a dialect built for phones with tens of megabytes of memory: descriptors instead of strings, leaves and a cleanup stack instead of exceptions, two-phase construction and active objects for anything asynchronous. You built for a Windows emulator with one compiler and for the phone’s ARM chip with another, so some bugs only appeared on the device.',
    },
    {
      q: 'How did a mobile VoIP app work with the telecom backend?',
      a: 'To the platform, the phone was one more SIP endpoint. It registered with the SIP proxy, set up the call, sent audio over RTP, and the server side handled least-cost routing, call records and billing on Asterisk and OpenSIPS. The phone-specific work was keeping that session alive on a slow, metered, unreliable data connection without draining the battery.',
    },
    {
      q: 'What were the hardest problems in mobile VoIP before smartphones?',
      a: 'Keeping a SIP registration alive through carrier NATs without waking the radio constantly, choosing a codec that fit a GPRS or EDGE connection, handling jitter and packet loss, dealing with one-way audio when a data session dropped, and ending the call at the right second for billing when the connection died mid-call.',
    },
  ],
};
