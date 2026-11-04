export const metadata = {
  seoTitle: 'Git Bundle Workflow When Only One Person Has GitHub Access',
  dek:
    'When only one person can push to GitHub, the other developers can still ship. The bundle-based setup I’d use for three developers and an integrator, with every command, a tracker, a review checklist and a first-day checklist.',
  related: [
    { to: '/writing/smaller-user-stories-and-pull-requests/', label: 'Smaller user stories and pull requests' },
    { to: '/writing/code-review-in-the-ai-era/', label: 'Code review in the AI era' },
    { to: '/writing/when-your-best-engineer-becomes-a-bottleneck/', label: 'When your best engineer becomes a bottleneck' },
    { to: '/writing/when-to-add-engineering-process/', label: 'When to add engineering process' },
  ],
  keywords: [
    'git bundle workflow',
    'git bundle vs patch',
    'contribute to GitHub without access',
    'git integrator workflow',
    'git bundle create verify fetch',
    'share git commits without a remote',
    'revert a merge commit',
  ],
  about: [
    { '@type': 'SoftwareApplication', name: 'Git', url: 'https://git-scm.com/' },
    { '@type': 'Thing', name: 'Version control workflow' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'git bundle', url: 'https://git-scm.com/docs/git-bundle' },
    { '@type': 'SoftwareApplication', name: 'GitHub', url: 'https://github.com/' },
  ],
  faq: [
    {
      q: 'Can developers contribute to a GitHub repository without GitHub access?',
      a: 'Yes, through an integrator who has access. Developers commit locally and send their commits as Git bundles or patch files through an approved channel. The integrator reviews, merges and pushes. Commits keep the developer as author, and nobody shares credentials.',
    },
    {
      q: 'What is a Git bundle?',
      a: 'A single file containing Git commits and references, created with git bundle create. You can clone or fetch from it like a remote. It carries committed history only, not the working tree, stash, configuration or hooks.',
    },
    {
      q: 'Should I use Git bundles or patch files?',
      a: 'Use bundles by default. They keep commit IDs identical, which makes duplicate detection and reverts straightforward, and git bundle verify checks that the receiver has the right base. Patch files suit small fixes someone wants to read as text before applying.',
    },
    {
      q: 'Does pushing someone else’s commits change the author on GitHub?',
      a: 'No. Merging a bundle keeps each commit’s author and committer. GitHub shows the author and links the commit to their account once that email is added to it. The integrator appears only on the merge commit.',
    },
    {
      q: 'How do I undo a merged contribution?',
      a: 'Run git revert -m 1 with the merge commit and push. Don’t force-push main. If the same branch is merged again later, revert the revert first or have the author send the fix as new commits.',
    },
  ],
  // Primary sources for the commands and GitHub behavior. Rendered at the end of the post and emitted as JSON-LD citations.
  sources: [
    { label: 'Git documentation: git-bundle', url: 'https://git-scm.com/docs/git-bundle' },
    { label: 'Git documentation: git-format-patch', url: 'https://git-scm.com/docs/git-format-patch' },
    { label: 'Git documentation: How to revert a faulty merge', url: 'https://git-scm.com/docs/howto/revert-a-faulty-merge' },
    { label: 'GitHub Docs: Why are my commits linked to the wrong user?', url: 'https://docs.github.com/en/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user' },
    { label: 'GitHub Docs: About protected branches', url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches' },
  ],
};
