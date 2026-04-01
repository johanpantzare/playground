// Quiz questions — "Är det klimakteriet, älskling?"
//
// Question types:
//   'mood'   — emoji card selector; answer = score (0–3)
//   'slider' — range 0–10; answer = raw value (mapped to score in getAnswerScore)
//   'choice' — 4 text options; answer = score (0–3)
//
// The first SCREENING_COUNT questions are the screening gate.
// If their combined score is below SCREENING_THRESHOLD, the quiz
// ends early with a "Lugnt vatten" result.

export const SCREENING_COUNT = 3
export const SCREENING_THRESHOLD = 3 // out of max 9 (3 × 3)

export const questions = [
  // ─── SCREENING (1–3) ────────────────────────────────────────────────────────

  {
    id: 1,
    type: 'mood',
    text: 'Hur mår du generellt sett just nu?',
    options: [
      { label: 'Strålande', emoji: '🌟', score: 0 },
      { label: 'Ganska bra', emoji: '😊', score: 0 },
      { label: 'Upp och ner', emoji: '🌊', score: 1 },
      { label: 'Ganska trött', emoji: '😔', score: 2 },
      { label: 'Inte bra alls', emoji: '🌧️', score: 3 },
    ],
  },
  {
    id: 2,
    type: 'slider',
    text: 'Hur ofta upplever du plötsliga värmevågor?',
    minLabel: 'Aldrig',
    maxLabel: 'Hela tiden',
    valueLabels: [
      'Aldrig',
      'Nästan aldrig',
      'Väldigt sällan',
      'Sällan',
      'Ibland',
      'Ibland',
      'Ganska ofta',
      'Ofta',
      'Ofta',
      'Väldigt ofta',
      'Hela tiden',
    ],
  },
  {
    id: 3,
    type: 'slider',
    text: 'Hur väl sover du generellt sett?',
    minLabel: 'Sover utmärkt',
    maxLabel: 'Sover väldigt dåligt',
    valueLabels: [
      'Utmärkt',
      'Mycket bra',
      'Bra',
      'Bra',
      'Okej',
      'Varierande',
      'Varierande',
      'Dåligt',
      'Dåligt',
      'Mycket dåligt',
      'Uruselt',
    ],
  },

  // ─── FULL ASSESSMENT (4–12) ─────────────────────────────────────────────────

  {
    id: 4,
    type: 'choice',
    text: 'Hur ofta vaknar du på natten, svettig och utan att riktigt förstå varför?',
    answers: [
      { text: 'Aldrig. Mina nätter är torra och fridfulla.', score: 0 },
      { text: 'Det har hänt. Jag skyller på täcket.', score: 1 },
      { text: 'Mer ofta än jag vill erkänna.', score: 2 },
      { text: 'Jag har numera en dedikerad "fuktig sida" av sängen.', score: 3 },
    ],
  },
  {
    id: 5,
    type: 'choice',
    text: 'Hur skulle du beskriva din nuvarande relation till sömnen?',
    answers: [
      { text: 'Varm och stabil. Vi möts varje kväll klockan tio.', score: 0 },
      { text: 'Opålitlig. Ibland dyker den upp, ibland inte.', score: 1 },
      { text: 'Komplicerad. Vi har tagit ett uppehåll som jag aldrig gick med på.', score: 2 },
      { text: 'Avbruten. Sömnen har ghostat mig totalt.', score: 3 },
    ],
  },
  {
    id: 6,
    type: 'choice',
    text: 'Någon tuggar. Högt. Kanske andas också. Hur reagerar du innerst inne?',
    answers: [
      { text: 'Jag märker ingenting. Jag är en lugn sjö.', score: 0 },
      { text: 'En svag irritation som snabbt försvinner.', score: 1 },
      { text: 'Jag utvecklar en tyst men intensiv åsikt om den personen.', score: 2 },
      { text: 'Jag fantiserar om att äta lunch ensam. För alltid.', score: 3 },
    ],
  },
  {
    id: 7,
    type: 'choice',
    text: 'Hur har ditt humör sett ut under en typisk vecka?',
    answers: [
      { text: 'Stabilt och jämnt. Som ett hav utan vågor.', score: 0 },
      { text: 'Det finns väderväxlingar, men hanterbara.', score: 1 },
      { text: 'Ganska intensivt. Jag grät vid en ostreklam.', score: 2 },
      { text: 'Komplett BBC-dokumentär. Jag kände allt. ALLT.', score: 3 },
    ],
  },
  {
    id: 8,
    type: 'choice',
    text: 'Du går in i ett rum med ett syfte. Du anländer. Syftet är borta. Hur ofta?',
    answers: [
      { text: 'Sällan. Jag har minnet av en fokuserad arkivarie.', score: 0 },
      { text: 'Ibland. Jag brukar komma ihåg det på vägen tillbaka.', score: 1 },
      { text: 'Ofta. Jag har börjat berätta mina avsikter högt för mig själv.', score: 2 },
      { text: 'Det är bara mitt liv nu. Jag vandrar. Jag accepterar det.', score: 3 },
    ],
  },
  {
    id: 9,
    type: 'choice',
    text: 'Hur är din förmåga att koncentrera dig på en enda uppgift från start till slut?',
    answers: [
      { text: 'Utmärkt. Fokuserad, linjär, ostoppbar.', score: 0 },
      { text: 'Okej. Jag driver iväg ibland men återvänder.', score: 1 },
      { text: 'Ojämn. Jag har fjorton öppna flikar och alla känns brådskande.', score: 2 },
      { text: 'Jag började svara på den här frågan och glömde tillfälligt vad en fråga var.', score: 3 },
    ],
  },
  {
    id: 10,
    type: 'choice',
    text: 'Hur beskriver du din nuvarande tolerans för ljud, strunt och andras åsikter?',
    answers: [
      { text: 'Hög. Jag är öppen, nyfiken och generöst tålmodig.', score: 0 },
      { text: 'Måttlig. Jag har en gräns men den upprätthålls artigt.', score: 1 },
      { text: 'Lägre än förr. Jag har börjat lämna rum i förebyggande syfte.', score: 2 },
      { text: 'Borta. Jag behöver tystnad, kompetens och rimliga fontstorlekar.', score: 3 },
    ],
  },
  {
    id: 11,
    type: 'choice',
    text: 'Känner du ibland ett plötsligt och akut behov av att öppna ett fönster, gå ut — utan förvarning?',
    answers: [
      { text: 'Nej. Jag är bekväm var jag än befinner mig.', score: 0 },
      { text: 'Ibland. Jag gillar frisk luft. Det är normalt.', score: 1 },
      { text: 'Ja. Det finns ögonblick då luft blir en medicinsk nödvändighet.', score: 2 },
      { text: 'Jag är i princip en migrerande varelse nu. Fönstren är alltid öppna.', score: 3 },
    ],
  },
  {
    id: 12,
    type: 'choice',
    text: 'Hur beskriver du din energinivå under en typisk dag?',
    answers: [
      { text: 'Jämn och tillräcklig. Jag är laddad.', score: 0 },
      { text: 'Mestadels bra, med en occasional dipp efter lunch.', score: 1 },
      { text: 'Ojämn. Jag har en bra timme och sedan sparar jag aggressivt.', score: 2 },
      { text: 'Ett mysterium. Jag vet aldrig om jag kommer att vara en person idag eller inte.', score: 3 },
    ],
  },
]

// Maps a raw answer value to a 0–3 score.
//   'mood'   — rawValue is the option index; score comes from options[index].score
//   'slider' — rawValue is 0–10; mapped to 0–3 in bands
//   'choice' — rawValue IS the score
export function getAnswerScore(question, rawValue) {
  if (rawValue === undefined || rawValue === null) return 0
  if (question.type === 'mood') {
    return question.options[rawValue]?.score ?? 0
  }
  if (question.type === 'slider') {
    if (rawValue <= 2) return 0
    if (rawValue <= 5) return 1
    if (rawValue <= 8) return 2
    return 3
  }
  return rawValue // 'choice': rawValue === score
}
