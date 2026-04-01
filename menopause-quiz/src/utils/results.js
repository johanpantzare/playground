// Result categories mapped from total quiz score.
// Max possible score: 36 (12 questions × 3)

export const results = [
  {
    id: 'still-waters',
    minScore: 0,
    maxScore: 9,
    title: 'Still Waters',
    subtitle: 'Your inner climate appears delightfully stable.',
    body: `Your results suggest that your internal thermostat is humming along nicely. You're sleeping, you're coping, and — quite impressively — you can share a meal with a noisy person without developing a strong opinion about them.

This could mean you're early in the journey, sailing past it entirely, or simply navigating it with extraordinary grace. All of these are valid. All are worthy of a small celebration.

Either way: you appear to be doing rather well. Enjoy the calm. It suits you.`,
    nudge: 'Remember, this quiz is not a medical assessment. If anything concerns you, your GP is always worth a conversation — they\'ve heard it all and they will not be surprised.',
    emoji: '🌿',
  },
  {
    id: 'something-stirring',
    minScore: 10,
    maxScore: 18,
    title: 'Something is Stirring',
    subtitle: 'A gentle internal shift may be underway.',
    body: `There are signs. Not dramatic ones — more like a soft rearranging of furniture in a room you thought you knew well. A little warmth here. A slightly altered tolerance for nonsense there.

You're not yet at the point of renaming your duvet or requiring full silence to function, but you've noticed that things are... different. Your body is communicating. It might be worth listening.

The good news: you are absolutely not alone in this, you are not unwell, and there is a great deal that can be done. Knowledge is genuinely useful here.`,
    nudge: 'This is not a diagnosis — it\'s a nudge. If these experiences are affecting your quality of life, speaking with a healthcare professional is a genuinely good idea.',
    emoji: '🌸',
  },
  {
    id: 'under-pressure',
    minScore: 19,
    maxScore: 27,
    title: 'Under Internal Pressure',
    subtitle: 'Your inner landscape is going through quite a lot.',
    body: `Your score suggests your body is in a reasonably active phase of change. There may be nights that aren't restful, days that run hot, moments of surprising emotion, and a newly developed sense that other people could perhaps be quieter and more efficient.

This is real. It is common. And it is, medically speaking, something worth taking seriously — not because anything is wrong with you, but because there are genuinely helpful options available.

You deserve to feel like yourself. Or a slightly updated, even more interesting version of yourself.`,
    nudge: 'Please do talk to a doctor or specialist. Perimenopause and menopause are well-understood, treatable, and absolutely nothing to manage alone if you don\'t have to.',
    emoji: '🌺',
  },
  {
    id: 'full-spa-drama',
    minScore: 28,
    maxScore: 36,
    title: 'Full Internal Spa Drama',
    subtitle: 'Your body has opinions, and it is expressing all of them.',
    body: `You are living through what can only be described as a comprehensive internal renovation. Heat events, sleep negotiations, concentration adventures, and an emotional sensitivity that suggests you are, in fact, feeling everything — with remarkable thoroughness.

Here is what we want you to hear: this is not weakness. This is your body doing something enormous, and doing it while you continue to show up, function, and apparently take quizzes at odd hours.

You are not imagining it. You are not being dramatic. You are, quite simply, in the thick of it.`,
    nudge: 'We say this with warmth: please see a doctor. Not because something is terribly wrong, but because you shouldn\'t have to white-knuckle your way through this when support exists. You\'ve earned a little help.',
    emoji: '🔥',
  },
]

export function getResult(totalScore) {
  return results.find(
    (r) => totalScore >= r.minScore && totalScore <= r.maxScore
  )
}
