export const metadata = {
  seoTitle: 'Building Document Intelligence Workflows With AI and Human Review',
  dek:
    'The demo is a PDF in and JSON out. The production system has to know what kind of document it is reading, check what it found, send the uncertain cases to a person, and record how every value was produced.',
  related: [
    { to: '/writing/ai-agents-reliable-in-production/', label: 'AI agents are easy to demonstrate. Making them reliable is hard.' },
    { to: '/writing/modernizing-public-sector-applications/', label: 'Modernizing public-sector applications' },
    { to: '/writing/building-public-sector-applications/#integrations', label: 'Designing for external systems that behave unexpectedly' },
    { to: '/projects/fedpath/', label: 'FedPath: transparent scoring, no AI on solicitations' },
    { to: '/writing/hidden-cost-of-ai-coding/', label: 'What AI coding really costs' },
    { to: '/expertise/#ai', label: 'AI and data engineering' },
  ],
  keywords: [
    'document intelligence',
    'AI document processing',
    'intelligent document processing',
    'LLM document extraction',
    'human in the loop document review',
    'document classification and extraction',
    'AI in enterprise workflows',
    'production AI reliability',
    'document processing audit trail',
  ],
  about: [
    { '@type': 'Thing', name: 'Document processing', sameAs: 'https://en.wikipedia.org/wiki/Document_processing' },
    { '@type': 'Thing', name: 'Large language model', sameAs: 'https://en.wikipedia.org/wiki/Large_language_model' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Optical character recognition', sameAs: 'https://en.wikipedia.org/wiki/Optical_character_recognition' },
    { '@type': 'Thing', name: 'Human-in-the-loop', sameAs: 'https://en.wikipedia.org/wiki/Human-in-the-loop' },
    { '@type': 'Thing', name: 'Retrieval-augmented generation', sameAs: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation' },
    { '@type': 'Thing', name: 'Prompt injection', sameAs: 'https://en.wikipedia.org/wiki/Prompt_injection' },
  ],
  faq: [
    {
      q: 'What is the difference between extracting text and document intelligence?',
      a: 'Extraction produces characters or field values from a document. Document intelligence turns them into information a business can act on: it classifies the document, validates each value against rules and existing data, routes uncertain results to a person, and records where each value came from and who approved it.',
    },
    {
      q: 'When should document processing use AI instead of conventional code?',
      a: 'AI helps with varied, unstructured documents where fields appear in different places and wording. Conventional code is better for fixed forms, known layouts, format normalization, calculations and business rules, because it is predictable, testable and cheaper to run. Most reliable systems combine both, with people reviewing the uncertain cases.',
    },
  ],
};
