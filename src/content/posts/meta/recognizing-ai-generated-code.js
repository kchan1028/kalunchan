export const metadata = {
  seoTitle: 'How to Recognize AI-Generated Code, and Why It Matters — Ka Lun Chan',
  dek:
    'I use AI coding tools a lot, and I keep seeing the same habits in what they write. Recognizing them is useful. Whether the author understands the code matters more.',
  related: [
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'The hidden cost of AI coding' },
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/building-software-before-and-after-ai/', label: 'How I build software now that AI is in the loop' },
    { to: '/writing/generalist-advantage-in-the-ai-era/', label: 'Why being a generalist is an advantage in the AI era' },
    { to: '/writing/ai-learning-curve-future-of-work/', label: 'AI is great, but not everyone is ready to use it yet' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'AI-generated code',
    'how to recognize AI-generated code',
    'signs of AI-generated code',
    'reviewing AI-generated code',
    'AI code review',
    'over-engineered code',
    'engineering judgment',
    'AI coding tools best practices',
  ],
  about: [
    { '@type': 'Thing', name: 'AI-assisted software development' },
    { '@type': 'Thing', name: 'Code review', sameAs: 'https://en.wikipedia.org/wiki/Code_review' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Django REST framework', url: 'https://www.django-rest-framework.org/' },
    { '@type': 'SoftwareApplication', name: 'django-filter', url: 'https://django-filter.readthedocs.io/' },
  ],
  faq: [
    {
      q: 'Can you tell if code was written by AI?',
      a: 'Not reliably. AI-generated code often has recognizable habits, like extra abstractions, defensive checks for things that can’t happen and comments that repeat the code. People write code like that too, so the patterns are a reason to ask questions, not proof of who wrote it.',
    },
    {
      q: 'What are common signs of AI-generated code?',
      a: 'Abstractions with only one use, repeated validation and broad error handling, generic names like data, result and handler, comments that restate the next line, new helper files nobody asked for, and features beyond what the task requested.',
    },
    {
      q: 'Is it bad to use AI to write code?',
      a: 'No. AI coding tools can save a lot of time. The problem is merging code you don’t understand. Whoever opens the pull request is responsible for explaining it, testing it and maintaining it, whoever or whatever typed it.',
    },
    {
      q: 'How should you review AI-generated code?',
      a: 'The same way as any code, with extra attention to size. Check it against the actual request, ask what can be deleted, look for errors that get swallowed instead of reported, compare it with the project’s existing conventions, and make sure the tests cover the case that would break it.',
    },
  ],
};
