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
    maxLabel: 'HELA TIDEN',
    valueLabels: [
      'Aldrig. Jag är ett ispalats.',
      'En gång? Kanske. Oklart.',
      'Sällan. Jag minns att det hände.',
      'Ibland. Inget dramatiskt.',
      'Tillräckligt ofta för att märka.',
      'Ja. Den privata bastun är öppen.',
      'Ofta. Jackan är ett minne blott.',
      'Väldigt ofta. Fönster är nu medicin.',
      'Nästan konstant. Jag bor halvt utomhus.',
      'Alltid. Jag är en levande ugn.',
      'JA, HELA TIDEN. HELP.',
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
      'Som en stock. Hela natten.',
      'Väldigt bra. Nästintill perfekt.',
      'Bra. Räknar inte fåren än.',
      'Okej. Vaknar lite men somnar om.',
      'Lite orolig. Scrollar lagom mycket.',
      'Halvdan. Vaken 03:00 är en grej nu.',
      'Ganska dåligt. Golvet känns bekant.',
      'Dåligt. Jag är halvvaken på heltid.',
      'Väldigt dåligt. Vad är sömn igen?',
      'Katastrofalt. Jag är en zombie.',
      'Sömn?? Kände inte igen ordet.',
    ],
  },
  {
    id: 3,
    type: 'slider',
    shortName: 'Humör',
    text: 'Hur många väder har du haft i veckan — internt sett?',
    minLabel: 'Lugnt hav',
    maxLabel: 'ALLT PÅ EN GÅNG',
    valueLabels: [
      'Stabilt. Jag är ett lugnt hav.',
      'Mestadels bra. Lite vind.',
      'Bra nog. Inga incidenter.',
      'Varierande. Som aprilväder.',
      'Lite upp och ner. Ganska normalt?',
      'Åska möjlig utan förvarning.',
      'Intensivt. Jag grät vid en reklam.',
      'Stormigt. Familjen håller låg profil.',
      'Kaotiskt. BBC-dokumentär energy.',
      'Explosivt. Inomhus.',
      'ALLT PÅ EN GÅNG. HELA TIDEN.',
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
      'Munk-nivå. Jag är fred.',
      'Tålmodig. Genuint.',
      'Normalt tålmodig. Inga konstigheter.',
      'Tröskeln existerar men håller.',
      'Lättantänd men återhämtar mig.',
      'Tuggar du MED MUNNEN ÖPPEN??',
      'Jag lämnar rum preemptivt.',
      'Kommunicerar via lappar nu.',
      'Nej tack på i princip allt.',
      'Ensam ö. Låg budget. Inga besökare.',
      'FULL DIGITAL DETOX. PERMANENT.',
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
      'Skarp som en kniv. Laser-fokus.',
      'Mycket bra. Obetydliga glitchar.',
      'Bra. Tappar inte tråden.',
      'Okej. Glömmer ibland varför.',
      'Fjorton öppna flikar. Alla viktiga.',
      'Börjar meningar utan slutplan.',
      'Vandrar i rum med gott syfte.',
      'Berättar avsikter högt för mig själv.',
      'Vad var frågan? Nej, den andra.',
      'Vad frågade du? Vem är du?',
      'Vad heter jag igen? Spelar det roll?',
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
