export const metadata = {
  seoTitle: 'UX and UI Design Before and After AI — Ka Lun Chan',
  dek:
    'From forms that assumed every customer had a credit card, to an assistant that drafts the layout, checks the contrast and still knows nothing about the person on the other side.',
  related: [
    { to: '/writing/building-software-before-and-after-ai/', label: 'The engineering half: building everything myself, then with AI' },
    { to: '/writing/building-a-startup-from-idea-to-acquisition/#customers', label: 'Building for people the system wasn’t designed for' },
    { to: '/writing/berkeley-omnium-new-website-next-generation/', label: 'The new Berkeley Omnium site' },
    { to: '/projects/union-city-smog-check/', label: 'Union City Smog Check: call and directions first' },
    { to: '/writing/why-i-test-my-products-like-someone-who-has-never-used-them/', label: 'Why I test my products like someone who has never used them' },
    { to: '/writing/modernizing-public-sector-applications/#requirements', label: 'Accessibility from the first slice of a modernization' },
  ],
  image: { path: '/images/writing/ux-before-and-after-ai-og.jpg', width: 1200, height: 630, alt: 'I used to design every screen myself. Then: signup forms, phone menus, a reseller dashboard, the support line as a usability lab. Now: a direction, a layout, a phone in hand. The person using it is still the point.' },
  keywords: [
    'AI in UX design',
    'AI-assisted UI design',
    'UX design before AI',
    'designing for users not engineers',
    'engineer doing UX design',
    'accessibility as a release gate',
    'mobile-first design',
    'startup founder UX lessons',
    'can AI design a user interface',
  ],
  about: [
    { '@type': 'Thing', name: 'User experience design', sameAs: 'https://en.wikipedia.org/wiki/User_experience_design' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Web accessibility', sameAs: 'https://en.wikipedia.org/wiki/Web_accessibility' },
    { '@type': 'Thing', name: 'Web Content Accessibility Guidelines', sameAs: 'https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines' },
    { '@type': 'Thing', name: 'Progressive web app', sameAs: 'https://en.wikipedia.org/wiki/Progressive_web_app' },
    { '@type': 'Thing', name: 'Design system' },
  ],
  faq: [
    {
      q: 'How has AI changed UX and UI design for engineers?',
      a: 'It made producing a layout cheap. I describe the audience, the device and the one action that matters, and an assistant returns a working layout in the site’s own design system, checks contrast and keyboard order, and drafts the states I used to forget. The work moves from drawing screens to explaining the user.',
    },
    {
      q: 'Can AI design a good user interface on its own?',
      a: 'It can produce a plausible one quickly, and left alone it produces the same generic page every model produces: a hero, three cards, a gradient. It knows nothing about your specific users unless you tell it, so the quality of the result depends on the brief and on someone experienced reviewing it.',
    },
    {
      q: 'What do engineers get wrong when they design interfaces themselves?',
      a: 'They design for themselves without noticing. Forms assume a credit card, a stable address, a name that fits two fields, fluent English and a fast connection. Those assumptions turn real customers away, and the people turned away never show up in the data.',
    },
    {
      q: 'What does an engineer need to know about UX?',
      a: 'Who the person is, what they are trying to do, what device and connection they have, how much patience they bring, what happens when it fails, and whether they can use it with a keyboard or a screen reader. A screen that looks good but doesn’t produce the action it exists for has failed.',
    },
  ],
};
