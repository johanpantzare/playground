// Result categories — "Är det klimakteriet, älskling?"
// Max possible score: 36 (12 questions × 3)

export const results = [
  {
    id: 'lugnt-vatten',
    minScore: 0,
    maxScore: 9,
    title: 'Lugnt vatten',
    subtitle: 'Ditt inre klimat verkar anmärkningsvärt stabilt.',
    body: `Dina svar tyder på att din inre termostat surrar på behagligt. Du sover, du hanterar saker och du kan äta lunch bredvid en bullrig person utan att det uppstår några starka åsikter om honom eller henne.

Det kan betyda att du är tidigt i resan, seglar förbi den helt och hållet, eller helt enkelt navigerar den med ovanlig elegans. Alla tre alternativen är fullt giltiga. Alla tre är värda ett litet firande.

Hur som helst: du verkar ha det ganska bra. Njut av lugnet. Det klär dig.`,
    nudge: 'Det här testet är inte en medicinsk bedömning. Om något ändå bekymrar dig är din läkare alltid värd ett samtal — de har hört allt och kommer inte att bli förvånade.',
    emoji: '🌿',
  },
  {
    id: 'nagonting-ror-pa-sig',
    minScore: 10,
    maxScore: 18,
    title: 'Något rör på sig',
    subtitle: 'En varsam inre förändring kan vara på gång.',
    body: `Det finns tecken. Inte dramatiska sådana — mer som ett mjukt ommöblerande i ett rum du trodde du kände väl. Lite extra värme här. En något förändrad tolerans för strunt där.

Du är inte ännu på den punkt där du döpt om din duvet eller behöver fullständig tystnad för att fungera, men du har lagt märke till att saker är... annorlunda. Din kropp kommunicerar. Det kan vara värt att lyssna.

Det goda nyheten: du är absolut inte ensam i det här, du är inte sjuk, och det finns en hel del som kan göras. Kunskap är genuint användbart här.`,
    nudge: 'Det här är inte en diagnos — det är en liten knuff. Om dessa upplevelser påverkar din livskvalitet är det en genuint bra idé att prata med en vårdgivare.',
    emoji: '🌸',
  },
  {
    id: 'under-internt-tryck',
    minScore: 19,
    maxScore: 27,
    title: 'Under internt tryck',
    subtitle: 'Ditt inre landskap genomgår ganska mycket just nu.',
    body: `Ditt resultat tyder på att din kropp befinner sig i en aktiv förändringsperiod. Det kan finnas nätter som inte ger vila, dagar som blir varma, ögonblick av överraskande känslosamhet, och ett nyfunnet behov av att andra människor kanske kunde vara lite tystare och mer kompetenta.

Det här är verkligt. Det är vanligt. Och det är, medicinskt sett, något som är värt att ta på allvar — inte för att något är fel på dig, utan för att det finns genuint hjälpsamma alternativ tillgängliga.

Du förtjänar att känna dig som dig själv. Eller en något uppdaterad, ännu mer intressant version av dig själv.`,
    nudge: 'Prata med en läkare eller specialist. Klimakteriet är väl förstått, behandlingsbart och absolut ingenting du behöver hantera ensam om du inte vill.',
    emoji: '🌺',
  },
  {
    id: 'full-intern-spa-dramatik',
    minScore: 28,
    maxScore: 36,
    title: 'Full intern spa-dramatik',
    subtitle: 'Din kropp har åsikter, och den uttrycker dem alla.',
    body: `Du lever genom vad som bara kan beskrivas som en omfattande intern renovering. Värmehändelser, sömnförhandlingar, koncentrationsäventyr och en känslomässig lyhördhet som tyder på att du faktiskt känner allting — med anmärkningsvärd grundlighet.

Här är vad vi vill att du ska höra: det här är inte svaghet. Det här är din kropp som gör något enormt, och gör det medan du fortsätter att dyka upp, fungera och tydligen ta tester på konstiga tider.

Du inbillar dig inte. Du är inte dramatisk. Du befinner dig helt enkelt mitt i det.`,
    nudge: 'Vi säger det här med värme: uppsök gärna en läkare. Inte för att något är allvarligt fel, utan för att du inte borde behöva vita-knoga dig igenom det här när stöd finns. Du har förtjänat lite hjälp.',
    emoji: '🔥',
  },
]

export function getResult(totalScore) {
  return results.find(
    (r) => totalScore >= r.minScore && totalScore <= r.maxScore
  )
}
