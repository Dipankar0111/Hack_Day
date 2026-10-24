import type { Question, RoundSelection } from '../types';

export const RAPID_FIRE_QUESTIONS: Question[] = [
  // ==========================================
  // Round 1 — Easy Warmup (Questions 1–5: 5 Easy with Thinkable Twists)
  // ==========================================
  {
    id: 'q1',
    roundNumber: 1,
    roundTitle: 'Round 1 — Easy Warmup',
    questionNumber: 1,
    questionText: 'If an open-source project charges $50 to download its pre-compiled binary installer, does it violate the Open Source Definition?',
    tag: 'Easy · Definition Twist',
    options: [
      { key: 'A', text: 'Yes, open source legally forbids charging any money for software' },
      { key: 'B', text: 'No, open source guarantees freedom of source code, not zero-dollar pricing' },
      { key: 'C', text: 'Yes, unless all proceeds are donated directly to the Linux Foundation' },
      { key: 'D', text: 'Only if the project was written exclusively in Python or C' }
    ],
    correctOption: 'B',
    explanation: 'Thinkable Twist: Open Source is about freedom of code ("free speech"), not zero price ("free beer"). Charging for binaries, packaging, or support is 100% compliant if the underlying source code remains freely licensed!'
  },
  {
    id: 'q2',
    roundNumber: 1,
    roundTitle: 'Round 1 — Easy Warmup',
    questionNumber: 2,
    questionText: "You run 'git commit -m \"Fixed bug\"' while offline on an airplane with no Wi-Fi. Where is that commit saved?",
    tag: 'Easy · Git Architecture Twist',
    options: [
      { key: 'A', text: 'Saved safely in the local Git repository on your laptop disk' },
      { key: 'B', text: 'Queued in GitHub’s cloud cache until you reconnect to the internet' },
      { key: 'C', text: 'Lost immediately because Git requires an active server connection' },
      { key: 'D', text: 'Stored temporarily in RAM and wiped if you close the terminal' }
    ],
    correctOption: 'A',
    explanation: 'Thinkable Twist: Git is a distributed version control system. Every commit happens entirely on your local machine; remote servers like GitHub receive nothing until you explicitly run `git push`!'
  },
  {
    id: 'q3',
    roundNumber: 1,
    roundTitle: 'Round 1 — Easy Warmup',
    questionNumber: 3,
    questionText: 'You create a private GitHub repository, commit sensitive files, and invite a collaborator. Who can inspect the commit history?',
    tag: 'Easy · Privacy Twist',
    options: [
      { key: 'A', text: 'Only you; collaborators can only view current code, not past commits' },
      { key: 'B', text: 'Anyone on the internet who guesses the direct commit SHA URL' },
      { key: 'C', text: 'Nobody, because private repositories automatically encrypt past logs' },
      { key: 'D', text: 'You, your collaborator, and authorized repository members' }
    ],
    correctOption: 'D',
    explanation: 'Thinkable Twist: Collaborators granted repository access can inspect the entire commit history, diffs, and author metadata. Private mode only blocks unauthorized public access!'
  },
  {
    id: 'q4',
    roundNumber: 1,
    roundTitle: 'Round 1 — Easy Warmup',
    questionNumber: 4,
    questionText: 'If you fork a popular repository on GitHub and push 10 commits to your fork, what happens to the original author’s repository?',
    tag: 'Easy · Forking Twist',
    options: [
      { key: 'A', text: 'Absolutely nothing, until you open an accepted Pull Request' },
      { key: 'B', text: 'It automatically updates with your new commits on a shadow branch' },
      { key: 'C', text: 'The original repository is locked until maintainers review your code' },
      { key: 'D', text: 'It creates an immediate merge conflict on the original main branch' }
    ],
    correctOption: 'A',
    explanation: 'Thinkable Twist: A fork is your own independent remote copy. The upstream repository remains completely unchanged until you submit a Pull Request and maintainers choose to merge it.'
  },
  {
    id: 'q5',
    roundNumber: 1,
    roundTitle: 'Round 1 — Easy Warmup',
    questionNumber: 5,
    questionText: 'You find a public GitHub repo with brilliant code, but it has NO license file. What are you legally allowed to do with it?',
    tag: 'Easy · Copyright Trap',
    options: [
      { key: 'A', text: 'Use it freely in any project, because public code is automatically public domain' },
      { key: 'B', text: 'Use it for any non-commercial or academic purpose without restriction' },
      { key: 'C', text: 'You can only view it; all reproduction and modification rights are reserved' },
      { key: 'D', text: 'Fork it and legally add your own MIT license to claim ownership' }
    ],
    correctOption: 'C',
    explanation: 'Thinkable Twist: Under copyright law, code without an explicit open-source license defaults to "All Rights Reserved". Even though GitHub allows you to view public code, you have no legal right to copy, modify, or distribute it!'
  },

  // ==========================================
  // Round 2 — Git & GitHub Mindbenders (Questions 6–10: Hard)
  // ==========================================
  {
    id: 'q6',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git & GitHub Traps',
    questionNumber: 6,
    questionText: "A developer accidentally runs 'git reset --hard HEAD~1' and closes the terminal. Can that discarded commit still be recovered?",
    tag: 'Hard · Git Reflog Mindbender',
    options: [
      { key: 'A', text: 'No; --hard immediately overwrites disk sectors and permanently destroys data' },
      { key: 'B', text: 'Only if the repository was previously synced to an active GitHub remote' },
      { key: 'C', text: 'Only by contacting GitHub enterprise support or using disk forensics' },
      { key: 'D', text: 'Yes, git reflog records past HEAD positions and can restore orphaned commits' }
    ],
    correctOption: 'D',
    explanation: 'Thinkable Twist: Git almost never deletes committed data immediately! `git reflog` tracks every movement of HEAD, allowing you to find the lost commit hash and restore it before garbage collection.'
  },
  {
    id: 'q7',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git & GitHub Traps',
    questionNumber: 7,
    questionText: "You run 'git merge feature' into 'main'. Git logs 'Fast-forward' and creates NO new merge commit. Why?",
    tag: 'Hard · Branch Pointer Twist',
    options: [
      { key: 'A', text: 'main had no new commits since branching, so Git simply moved the branch pointer' },
      { key: 'B', text: 'The feature branch contained fewer than 3 commits, so Git skipped logging' },
      { key: 'C', text: 'A merge conflict occurred in memory and Git silently picked the feature branch' },
      { key: 'D', text: 'Fast-forward is a dry-run test mode that doesn’t actually apply any changes' }
    ],
    correctOption: 'A',
    explanation: 'Thinkable Twist: When the target branch has not diverged (no commits were added to `main` after `feature` branched off), Git doesn’t need to merge anything—it just advances the `main` pointer forward to the tip of `feature`!'
  },
  {
    id: 'q8',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git & GitHub Traps',
    questionNumber: 8,
    questionText: 'You accidentally commit an AWS secret key. In the next commit, you delete the key from the file and push both commits. Is the key safe?',
    tag: 'Hard · Secret Leak Reality',
    options: [
      { key: 'A', text: 'Yes, because Git’s latest commit state supersedes and hides previous diffs' },
      { key: 'B', text: 'Yes, provided both commits are pushed together in a single git push batch' },
      { key: 'C', text: 'No, the key remains permanently in commit history and must be revoked immediately' },
      { key: 'D', text: 'Yes, as long as nobody stars or forks the repository within 24 hours' }
    ],
    correctOption: 'C',
    explanation: 'Thinkable Twist: Git commits are immutable snapshots! Deleting a secret in commit #2 leaves commit #1 containing the secret in plain text. Automated bots scan git history within seconds of pushing—always revoke immediately!'
  },
  {
    id: 'q9',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git & GitHub Traps',
    questionNumber: 9,
    questionText: "Why do experienced maintainers strictly warn AGAINST running 'git rebase' on shared public branches like 'main'?",
    tag: 'Hard · History Rewriting Twist',
    options: [
      { key: 'A', text: 'Rebase converts open-source code into proprietary binary format' },
      { key: 'B', text: 'Rebase recalculates commit hashes, creating divergent history for collaborators' },
      { key: 'C', text: 'Rebase automatically strips all author names and squashes every commit' },
      { key: 'D', text: 'Rebase is deprecated in Git v2.0+ and replaced entirely by cherry-pick' }
    ],
    correctOption: 'B',
    explanation: 'Thinkable Twist: Rebase rewrites history by generating brand new commit SHAs for existing changes. If teammates have already pulled the old commits, their local trees violently diverge, causing duplicate commits and merge nightmares!'
  },
  {
    id: 'q10',
    roundNumber: 2,
    roundTitle: 'Round 2 — Git & GitHub Traps',
    questionNumber: 10,
    questionText: 'A famous open-source author deletes their original GitHub repository. What happens to the public forks created by other developers?',
    tag: 'Hard · Fork Network Survival',
    options: [
      { key: 'A', text: 'All forks are immediately deleted because child repos depend on the parent' },
      { key: 'B', text: 'Forks become read-only archives with git push privileges permanently revoked' },
      { key: 'C', text: 'Forks survive only if the owners pay for a GitHub Enterprise subscription' },
      { key: 'D', text: 'Forks survive independently, and GitHub automatically promotes one fork as the new root' }
    ],
    correctOption: 'D',
    explanation: 'Thinkable Twist: GitHub preserves the open-source ecosystem! When a parent repository is deleted, public forks are not destroyed; GitHub automatically promotes an existing fork to be the new root of the fork tree.'
  },

  // ==========================================
  // Round 3 — Licensing & Supply Chain (Questions 11–15: Hard)
  // ==========================================
  {
    id: 'q11',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing & Supply Chain',
    questionNumber: 11,
    questionText: 'A startup modifies an MIT-licensed library and bundles it into a closed-source commercial product without releasing their changes. Is this legal?',
    tag: 'Hard · Permissive vs Copyleft',
    options: [
      { key: 'A', text: 'No, modifying open-source code legally mandates publishing your modified source' },
      { key: 'B', text: 'No, the MIT license strictly bans selling commercial closed-source software' },
      { key: 'C', text: 'Yes, the MIT license permits closed proprietary distribution if copyright notice is kept' },
      { key: 'D', text: 'Only if the startup pays a 5% royalty to the original open-source authors' }
    ],
    correctOption: 'C',
    explanation: 'Thinkable Twist: The MIT license is permissive, NOT copyleft! You can freely integrate it into proprietary closed-source commercial software and sell it, as long as you preserve the original copyright notice.'
  },
  {
    id: 'q12',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing & Supply Chain',
    questionNumber: 12,
    questionText: "A proprietary backend executes an external GPL-licensed command-line CLI tool via standard I/O pipes (stdin/stdout). Must the backend become GPL?",
    tag: 'Hard · GPL Boundary Twist',
    options: [
      { key: 'A', text: 'No, separate processes communicating via command-line pipes generally do not trigger copyleft' },
      { key: 'B', text: 'Yes, invoking any GPL binary on a server automatically infects all calling software' },
      { key: 'C', text: 'Yes, unless the server runs on Apple macOS rather than Linux' },
      { key: 'D', text: 'Only if the CLI tool’s output exceeds 1,000 characters of formatted text' }
    ],
    correctOption: 'A',
    explanation: 'Thinkable Twist: The Free Software Foundation states that communicating with a standalone program over command-line pipes / stdin-stdout at arm’s length does not create a derivative work, unlike linking libraries into the same memory space!'
  },
  {
    id: 'q13',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing & Supply Chain',
    questionNumber: 13,
    questionText: "A developer writes a license stating: 'Free for everyone, except military weapons and mass surveillance.' Why did the OSI reject it as Open Source?",
    tag: 'Hard · OSI Definition Twist',
    options: [
      { key: 'A', text: 'Because open-source licenses must be drafted by certified corporate attorneys' },
      { key: 'B', text: 'Because open-source licenses cannot discriminate against fields of endeavor' },
      { key: 'C', text: 'Because the OSI requires all software licenses to permit proprietary relicensing' },
      { key: 'D', text: 'Because licenses must contain at least 500 words to be legally recognized' }
    ],
    correctOption: 'B',
    explanation: 'Thinkable Twist: Criterion 6 of the Open Source Definition forbids "Discrimination Against Fields of Endeavor". Even well-intentioned ethical clauses (e.g. banning military or surveillance use) disqualify a license from being Open Source!'
  },
  {
    id: 'q14',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing & Supply Chain',
    questionNumber: 14,
    questionText: "Your CI/CD pipeline runs 'npm install' instead of 'npm ci'. What subtle supply chain vulnerability does this introduce?",
    tag: 'Hard · Dependency Locking Twist',
    options: [
      { key: 'A', text: 'npm install automatically disables TLS security certificates during downloads' },
      { key: 'B', text: 'package-lock.json only works on macOS, so Linux CI servers ignore it' },
      { key: 'C', text: 'npm install deletes all transitive dependencies older than 30 days' },
      { key: 'D', text: 'npm install can update dependencies and write to package-lock.json if ranges allow' }
    ],
    correctOption: 'D',
    explanation: 'Thinkable Twist: `npm install` is designed for development and may resolve newer compatible package versions, updating `package-lock.json`! In CI, `npm ci` must be used because it strictly adheres to the lockfile without mutating it.'
  },
  {
    id: 'q15',
    roundNumber: 3,
    roundTitle: 'Round 3 — Licensing & Supply Chain',
    questionNumber: 15,
    questionText: 'Why did database leaders like Redis, MongoDB, and ElasticSearch move away from traditional open-source licenses to SSPL/RSAL?',
    tag: 'Hard · Open Core vs Cloud Hyperscalers',
    options: [
      { key: 'A', text: 'To prevent cloud hyperscalers from reselling managed services without contributing back' },
      { key: 'B', text: 'Because the United States government outlawed BSD and Apache licenses for databases' },
      { key: 'C', text: 'Because the open-source community voted to eliminate relational and NoSQL licenses' },
      { key: 'D', text: 'To mandate that every individual developer pay a monthly subscription fee' }
    ],
    correctOption: 'A',
    explanation: 'Thinkable Twist: Cloud providers were packaging these open-source tools into billion-dollar hosted services without funding the creators. The switch to "source-available" restricted cloud resale, though it caused them to lose official OSI open-source status!'
  },

  // ==========================================
  // Round 4 — Security & Ecosystem Dilemmas (Questions 16–20: Hard)
  // ==========================================
  {
    id: 'q16',
    roundNumber: 4,
    roundTitle: 'Round 4 — Security & Architecture',
    questionNumber: 16,
    questionText: "A pull request boasts '100% Code Coverage' and every unit test passes green. Which fatal bug can STILL easily crash production?",
    tag: 'Hard · Test Coverage Fallacy',
    options: [
      { key: 'A', text: 'None; 100% code coverage mathematically guarantees zero runtime defects' },
      { key: 'B', text: 'Concurrency race conditions, memory leaks under load, and untested edge cases' },
      { key: 'C', text: 'Git automatically rejects merging any pull request with 100% test coverage' },
      { key: 'D', text: 'Modern compilers fail when code coverage exceeds 95% due to branch saturation' }
    ],
    correctOption: 'B',
    explanation: 'Thinkable Twist: Code coverage only proves lines of code were executed during a test—not that edge cases, assertions, concurrency races, or memory leaks under sustained load were verified!'
  },
  {
    id: 'q17',
    roundNumber: 4,
    roundTitle: 'Round 4 — Security & Architecture',
    questionNumber: 17,
    questionText: "An attacker publishes an npm package named 'cross-env-js' with cloned documentation of 'cross-env'. What is this attack vector called?",
    tag: 'Hard · Supply Chain Attack',
    options: [
      { key: 'A', text: 'DNS Cache Poisoning; it reroutes network traffic at the router level' },
      { key: 'B', text: 'Rainbow Table Injection; it precomputes hashes for registry accounts' },
      { key: 'C', text: 'Typosquatting; it exploits human typing mistakes to execute malicious install scripts' },
      { key: 'D', text: 'Denial of Service; it overloads the package registry with redundant packages' }
    ],
    correctOption: 'C',
    explanation: 'Thinkable Twist: Typosquatting relies on developers making minor typos during command-line installation (e.g. `cross-env-js` vs `cross-env`). Malicious `postinstall` hooks then silently execute arbitrary code on the developer’s machine.'
  },
  {
    id: 'q18',
    roundNumber: 4,
    roundTitle: 'Round 4 — Security & Architecture',
    questionNumber: 18,
    questionText: "In software engineering, what does it mean when a mission-critical open-source project has a 'Bus Factor of 1'?",
    tag: 'Hard · Sustainability Risk',
    options: [
      { key: 'A', text: 'The project relies so heavily on one person that their departure paralyzes progress' },
      { key: 'B', text: 'The project’s continuous deployment pipeline is hosted inside a municipal commuter bus' },
      { key: 'C', text: 'The software can only process one network request at a time on the system bus' },
      { key: 'D', text: 'The contribution guidelines strictly limit the repository to one bug fix per week' }
    ],
    correctOption: 'A',
    explanation: 'Thinkable Twist: The "Bus Factor" measures project resilience: how many maintainers could be incapacitated (or "hit by a bus") before the project stalls. A bus factor of 1 means all institutional knowledge, keys, and release power reside in a single person!'
  },
  {
    id: 'q19',
    roundNumber: 4,
    roundTitle: 'Round 4 — Security & Architecture',
    questionNumber: 19,
    questionText: "You flip a 3-year-old internal company repository on GitHub from 'Private' to 'Public'. What hidden data is immediately exposed to the world?",
    tag: 'Hard · Git Metadata Leak',
    options: [
      { key: 'A', text: 'Nothing; GitHub automatically scrubs past commit history when changing visibility' },
      { key: 'B', text: 'Only the code on the main branch; all commit history and branches are deleted' },
      { key: 'C', text: 'Only commits made within the last 30 days are visible to the public' },
      { key: 'D', text: 'Complete commit history including internal employee emails, server names, and timestamps' }
    ],
    correctOption: 'D',
    explanation: 'Thinkable Twist: Making a repository public exposes every commit ever recorded in the git log! Internal corporate email addresses, author names, branch names, commit timestamps, and sensitive commit messages become immediately visible to the public.'
  },
  {
    id: 'q20',
    roundNumber: 4,
    roundTitle: 'Round 4 — Security & Architecture',
    questionNumber: 20,
    questionText: "A critical open-source encryption package used by thousands of enterprises is maintained by two unpaid volunteers. What paradox is this?",
    tag: 'Hard · Open Source Economics',
    options: [
      { key: 'A', text: 'Moore’s Law of Open Source; compute doubles while contributors halve' },
      { key: 'B', text: 'Tragedy of the Commons; entities exploit shared free resources without contributing to upkeep' },
      { key: 'C', text: 'The Halting Problem; volunteers cannot determine if the code will ever finish' },
      { key: 'D', text: 'Conway’s Law; software architecture mimics municipal public transport systems' }
    ],
    correctOption: 'B',
    explanation: 'Thinkable Twist: The Tragedy of the Commons describes how multi-billion dollar companies freely consume open-source infrastructure without contributing back funding, code review, or security patches—leading to critical vulnerabilities like Heartbleed or Log4Shell!'
  }
];

export function getQuestionsBySelection(selection: RoundSelection): Question[] {
  if (selection === 'all') {
    return [...RAPID_FIRE_QUESTIONS];
  }
  return RAPID_FIRE_QUESTIONS.filter((q) => q.roundNumber === selection);
}
