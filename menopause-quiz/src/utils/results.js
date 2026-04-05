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

// Reference points for the VE scale — shown on the receipt for context (chaos).
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
