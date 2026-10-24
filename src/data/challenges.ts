export const FUNNY_CHALLENGES = [
  "Defend your answer like a dramatic TV lawyer arguing before the Supreme Court! ⚖️",
  "Explain your answer like a robot running on 1% battery! 🤖🪫",
  "Convince the booth audience in exactly five seconds! ⏱️📢",
  "Give the most ridiculous, overly complicated technical explanation possible! 🤯",
  "Act like a panicked programmer whose production code just crashed at 5 PM on a Friday! 😱🔥",
  "Blame it on a mysterious cosmic ray flipping random bits in memory! 🌌👾",
  "Convince everyone that this was actually an undocumented VIP feature! 🕶️✨",
  "Explain your answer using only dramatic hand gestures and sound effects! 🎭💥",
  "Pretend you are an AI hallucinating this fact with 100% false confidence! 🧠🤖",
  "Pitch this idea as a groundbreaking billion-dollar startup pivot! 💼🚀"
];

export const CORRECT_REACTIONS = [
  "BIG BRAIN ENERGY! 🧠⚡",
  "YOU COOKED! 🔥🍳",
  "CERTIFIED TECH DETECTIVE! 🕵️‍♂️",
  "CLEAN PULL REQUEST! 🚀",
  "BUG SQUASHED WITH PRECISION! 🎯",
  "HACKER STATUS: UNLOCKED! 🟢💻",
  "100% PURE LOGIC! 💡",
  "SPEED DEMON! ⚡🔥"
];

export const WRONG_REACTIONS = [
  "CAP DETECTED! 🚨🧢",
  "THE BUG GOT YOU! 🐛💥",
  "404: LOGIC NOT FOUND! ⚠️",
  "THAT WAS COMPLETE CAP! 🧢😂",
  "SEGMENTATION FAULT IN BRAIN! 🤯",
  "GIT REVERT IMMEDIATE! 🔄",
  "COMPILER ERROR: TRY AGAIN! ❌",
  "NICE TRY, TIME TO DEFEND! ⚖️"
];

export function getRandomChallenge(): string {
  const index = Math.floor(Math.random() * FUNNY_CHALLENGES.length);
  return FUNNY_CHALLENGES[index];
}

export function getRandomReaction(isCorrect: boolean): string {
  const pool = isCorrect ? CORRECT_REACTIONS : WRONG_REACTIONS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

export function getPlayerTitle(accuracyPercent: number): { title: string; subtitle: string; icon: string } {
  if (accuracyPercent >= 100) {
    return {
      title: "HACK OR CAP LEGEND 👑",
      subtitle: "Flawless victory! You see through all tech myths with god-tier precision.",
      icon: "👑"
    };
  } else if (accuracyPercent >= 80) {
    return {
      title: "Open Source Wizard 🧙‍♂️",
      subtitle: "Incredible tech intuition! You belong on the core maintainer team.",
      icon: "🧙‍♂️"
    };
  } else if (accuracyPercent >= 60) {
    return {
      title: "Tech Detective 🕵️",
      subtitle: "Solid tech knowledge! You spotted the cap and defended open source.",
      icon: "🕵️"
    };
  } else if (accuracyPercent >= 40) {
    return {
      title: "Junior Bug Hunter 🐛",
      subtitle: "You caught a few tricky bugs! With more commits, you'll be unstoppable.",
      icon: "🐛"
    };
  } else {
    return {
      title: "Certified Chaos 🌪️",
      subtitle: "Unpredictable energy! You'd push straight to main without testing, wouldn't you?",
      icon: "🌪️"
    };
  }
}
