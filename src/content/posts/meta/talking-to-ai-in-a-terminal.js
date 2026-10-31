export const metadata = {
  seoTitle: 'Talking to AI in a Terminal Feels Like DOS Again — Ka Lun Chan',
  dek:
    'We spent two decades moving away from the command line, and I am back at a prompt, describing what I want in ordinary language to an AI assistant. The interface is familiar, but I describe intent and approve the commands.',
  related: [
    { to: '/writing/from-dos-to-ai-thirty-years-of-technology/', label: 'From DOS to AI: one decade at a time' },
    { to: '/writing/devops-from-expect-scripts-to-ai-agents/', label: 'DevOps from Expect scripts to AI agents' },
    { to: '/writing/building-software-before-and-after-ai/', label: 'Building software before and after AI' },
    { to: '/writing/you-dont-need-to-remember-everything/', label: 'You don’t need to remember everything' },
    { to: '/leadership/', label: 'How I run engineering' },
  ],
  keywords: [
    'AI in the terminal',
    'Claude Code terminal',
    'Codex CLI',
    'command line nostalgia DOS',
    'natural language command line',
    'AI coding assistant terminal',
    'terminal vs GUI',
    'Expect scripts automation',
    'engineering leadership AI tools judgment',
  ],
  about: [
    { '@type': 'Thing', name: 'Command-line interface', sameAs: 'https://en.wikipedia.org/wiki/Command-line_interface' },
    { '@type': 'Thing', name: 'AI-assisted software development' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'Claude Code', url: 'https://code.claude.com/docs/en/overview' },
    { '@type': 'SoftwareApplication', name: 'OpenAI Codex CLI', url: 'https://github.com/openai/codex' },
    { '@type': 'Thing', name: 'DOS', sameAs: 'https://en.wikipedia.org/wiki/DOS' },
    { '@type': 'Thing', name: 'Unix shell', sameAs: 'https://en.wikipedia.org/wiki/Unix_shell' },
    { '@type': 'Thing', name: 'Expect', sameAs: 'https://en.wikipedia.org/wiki/Expect' },
  ],
  faq: [
    {
      q: 'Why does using an AI assistant in a terminal feel like DOS?',
      a: 'Because the shape is the same: a prompt, typed instructions, text output, and real effects on the machine. DOS and the Unix shells needed exact syntax; terminal assistants like Claude Code and Codex CLI accept intent, propose the commands, and run them with your permissions once you approve.',
    },
    {
      q: 'Is the ChatGPT website a terminal tool?',
      a: 'No. ChatGPT is a web and desktop application. OpenAI’s terminal tool is Codex CLI, which, like Claude Code, runs inside your shell, reads and edits files, and executes commands you approve.',
    },
    {
      q: 'Do AI terminal assistants make the command line safe?',
      a: 'They make it approachable. The commands still run with your user’s permissions and consequences, so a deleted directory is still deleted. Reading what the assistant is about to run, and verifying the result afterwards, is still the engineer’s job.',
    },
  ],
};
