// 4 result tiers — max total score: 5 × 3 = 15

export const results = [
  {
    id: 'lugnt-vatten',
    minScore: 0,
    maxScore: 3,
    title: 'Lugnt vatten',
    subtitle: 'Ditt inre klimat är anmärkningsvärt stabilt.',
    body: 'Du sover. Du hanterar saker. Din inre termostat surrar på behagligt. Antingen seglar du förbi det, är tidigt i resan, eller navigerar det med ovanlig elegans.\n\nAlla tre alternativen är värda ett litet firande.',
    nudge: 'Om något ändå bekymrar dig är din läkare alltid värd ett samtal.',
    emoji: '🌿',
    stamp: 'GODKÄND',
  },
  {
    id: 'nagonting-ror-pa-sig',
    minScore: 4,
    maxScore: 7,
    title: 'Något rör på sig',
    subtitle: 'En varsam inre förändring kan vara på gång.',
    body: 'Inte dramatiskt — mer som ett mjukt ommöblerande i ett rum du trodde du kände väl. Lite extra värme här. En något förändrad tolerans för strunt där.\n\nDin kropp kommunicerar. Det kan vara värt att lyssna.',
    nudge: 'Om dessa upplevelser påverkar din vardag är det en bra idé att prata med en vårdgivare.',
    emoji: '🌸',
    stamp: 'NOTERA',
  },
  {
    id: 'under-internt-tryck',
    minScore: 8,
    maxScore: 11,
    title: 'Under internt tryck',
    subtitle: 'Ditt inre landskap genomgår ganska mycket.',
    body: 'Nätter som inte ger vila. Dagar som blir varma. Ögonblick av överraskande känslosamhet. Ett nyfunnet behov av att andra kunde vara lite tystare.\n\nDet här är verkligt, vanligt, och något som är värt att ta på allvar.',
    nudge: 'Det finns genuint hjälpsamma alternativ. Prata med din läkare.',
    emoji: '🌺',
    stamp: 'AKTUELL',
  },
  {
    id: 'full-intern-spa-dramatik',
    minScore: 12,
    maxScore: 15,
    title: 'Full intern spa-dramatik',
    subtitle: 'Din kropp har åsikter, och den uttrycker dem alla.',
    body: 'Värmehändelser. Sömnförhandlingar. Koncentrationsäventyr. Du inbillar dig inte. Du är inte dramatisk. Du befinner dig mitt i en omfattande intern renovering.\n\nOch du gör det medan du fortsätter att dyka upp och fungera. Det är faktiskt imponerande.',
    nudge: 'Uppsök gärna en läkare. Du behöver inte white-knuckla dig igenom det här ensam.',
    emoji: '🔥',
    stamp: 'PRIORITET',
  },
]

export function getResult(totalScore) {
  return results.find((r) => totalScore >= r.minScore && totalScore <= r.maxScore)
}

// Vallningsenheter (VE) — exponential heat unit scale.
// rawSum = sum of all raw slider values (0–50).
// Formula: VE = ⌊ e^(Σ × 0.45) × 10 ⌋
export function computeVE(rawSum) {
  return Math.round(Math.exp(rawSum * 0.45) * 10)
}

export function formatVE(ve) {
  return ve.toLocaleString('sv-SE')
}

// VE tiers — each maps to a current song, YouTube video ID, and a tailored exercise.
// The exercise subtly suggests the user might score higher next time.
export const VE_TIERS = [
  {
    maxVE: 499,
    song: 'Calm Down',
    artist: 'Rema & Selena Gomez',
    videoId: 'WcIcVapfqXw',
    exercise: 'Ta tre djupa andetag. Föreställ dig din lyckliga plats — solen, havsluften, tystnaden. Njut av lugnet.\n\nGå sedan och kolla om skorna i hallen står snett, bara för att dubbelkolla att du verkligen mår bra.',
  },
  {
    maxVE: 19_999,
    song: 'Heat Waves',
    artist: 'Glass Animals',
    videoId: 'mRD0-GxqHVo',
    exercise: 'Blunda. Andas in 4 sekunder, håll 4, ut 4. Känn hur kroppen landar.\n\nLyssna sedan aktivt på om någon i närheten tuggar med öppen mun. Anteckna resultatet. Vi ses nästa vecka.',
  },
  {
    maxVE: 999_999,
    song: 'Burn',
    artist: 'Ellie Goulding',
    videoId: 'CGyEd0aKWZE',
    exercise: 'Gå och kolla om tvätten du bad om att få vikat för tre dagar sedan fortfarande ligger i korgen.\n\nAndas. Stick sedan ut och ta lite frisk luft — du vet redan varför.',
  },
  {
    maxVE: 99_999_999,
    song: 'CUFF IT',
    artist: 'Beyoncé',
    videoId: 'yrtWLyp5gLI',
    exercise: 'Öppna ett fönster. Ta av dig ett lager kläder. Sitt stilla i 90 sekunder.\n\nGå sedan och se om din partner andas märkbart högt just nu. Du vet vad du hittar. Du förtjänar ändå hela den här låten.',
  },
  {
    maxVE: Infinity,
    song: 'Unholy',
    artist: 'Sam Smith & Kim Petras',
    videoId: 'Uq9gPaIzbe8',
    exercise: 'Mörkt rum. Fläkt riktad mot ansiktet. Svara på inga meddelanden.\n\nIngen behöver veta var du är just nu. Låt någon annan ta hand om middagen. Det är inte en förfrågan.',
  },
]

export function getVETier(ve) {
  return VE_TIERS.find((t) => ve <= t.maxVE)
}

// Reference points shown on the receipt for scale context
export const VE_REFERENCES = [
  { label: 'Lugn dag på kontoret',   ve: 47 },
  { label: 'Stark kaffe (dubbel)',    ve: 312 },
  { label: 'Jalapeño (Scoville)',     ve: 8_000 },
  { label: 'Habanero (Scoville)',     ve: 350_000 },
  { label: 'Ghost pepper (Scoville)', ve: 1_000_000 },
  { label: 'Carolina Reaper',         ve: 2_200_000 },
  { label: 'Aktiv vulkan (est.)',     ve: 48_000_000 },
  { label: 'Jordens kärna (est.)',    ve: 12_000_000_000 },
]
