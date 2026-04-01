// 5 slider questions — "Är det klimakteriet, älskling?"
// All sliders: raw value 0–10, mapped to score 0–3 in getAnswerScore.
// Each question has a shortName for the receipt line item.

export const questions = [
  {
    id: 1,
    type: 'slider',
    shortName: 'Värmevågor',
    text: 'Hur ofta förvandlas din kropp till en privat bastu — utan att du bokat?',
    minLabel: 'Aldrig',
    maxLabel: 'Hela tiden',
    valueLabels: [
      'Aldrig (polarexpeditionen)',
      'Nästan aldrig',
      'Väldigt sällan',
      'Sällan',
      'Ibland (mysigt varmt)',
      'Ibland',
      'Ganska ofta',
      'Ofta (den egna bastun)',
      'Ofta',
      'Nästan alltid',
      'HELA TIDEN (levande ugn)',
    ],
  },
  {
    id: 2,
    type: 'slider',
    shortName: 'Sömn',
    text: 'Hur ärlig är din sömn mot dig för tillfället?',
    minLabel: 'Sover utmärkt',
    maxLabel: 'Vilken sömn?',
    valueLabels: [
      'Sover som en stock',
      'Mycket bra',
      'Bra nog',
      'Okej',
      'Lite orolig',
      'Kaosartat',
      'Vaknar ibland',
      'Vaknar ofta',
      'Sover inte riktigt',
      'Vilken sömn?',
      'Sömn?? Kände inte igen ordet',
    ],
  },
  {
    id: 3,
    type: 'slider',
    shortName: 'Humör',
    text: 'Hur många väder har du haft i veckan — internt sett?',
    minLabel: 'Lugnt hav',
    maxLabel: 'BBC-dokumentär',
    valueLabels: [
      'Lugnt hav (0 väder)',
      'Lite vind',
      'Frisk bris',
      'Lätt mulet',
      'Blandad väderlek',
      'Åska möjlig',
      'Regnskur utan varning',
      'Stormigt',
      'Orkan (inombords)',
      'BBC-dokumentär',
      'ALLT PÅ EN GÅNG',
    ],
  },
  {
    id: 4,
    type: 'slider',
    shortName: 'Irritation',
    text: 'Hur snabbt tänds din inre låga när någon tuggar, andas eller existerar fel?',
    minLabel: 'Munk-tålamod',
    maxLabel: 'Ensam ö, tack',
    valueLabels: [
      'Tålamodet av en munk',
      'Generellt tålmodig',
      'Har mina gränser',
      'Irriteras ibland',
      'Ganska lättantänd',
      'Tuggar du FÖR HÖGT??',
      'Lämnar rum i förväg',
      'Kommunikerar via lappar',
      'Nej tack på allt',
      'Ensam ö, tack',
      'TOTAL DIGITAL DETOX',
    ],
  },
  {
    id: 5,
    type: 'slider',
    shortName: 'Hjärndimma',
    text: 'Hur pålitlig är din inre GPS — från skarp kniv till "vad heter jag"?',
    minLabel: 'Skarp som en kniv',
    maxLabel: 'Vad heter jag igen?',
    valueLabels: [
      'Skarp som en kniv',
      'Fokuserad',
      'Ganska fokuserad',
      'Tappar tråden ibland',
      'Fjorton öppna flikar',
      'Vad var frågan?',
      'Glömmer mid-mening',
      'Vandrar i rum utan syfte',
      'Berättar avsikter högt',
      'Vad frågade du?',
      'Vad heter jag igen?',
    ],
  },
]

export function getAnswerScore(question, rawValue) {
  if (rawValue === undefined || rawValue === null) return 0
  if (rawValue <= 2) return 0
  if (rawValue <= 5) return 1
  if (rawValue <= 8) return 2
  return 3
}
