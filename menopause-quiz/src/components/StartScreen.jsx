import './StartScreen.css'

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen screen-enter">
      <div className="start-brand">
        <span className="start-bloom" aria-hidden="true">🌸</span>
      </div>

      <h1 className="start-title">
        Är det klimakteriet,<br />
        <em>älskling?</em>
      </h1>

      <p className="start-tagline">
        Ett varmt, klokt och lite väl ärligt välmåendetest för dig som
        nyligen öppnat ett fönster av oklara skäl.
      </p>

      <div className="start-divider" aria-hidden="true" />

      <p className="start-intro">
        Tolv frågor. Ärliga svar. Noll dömande.
        Bara du, lite varsamt formulerade reflektioner om ditt inre klimat,
        och ett resultat som antingen känns träffsäkert eller
        extremt irrelevant — båda är fullt giltiga utfall.
      </p>

      <button className="btn-primary start-cta" onClick={onStart}>
        Starta vibe check:en
      </button>

      <p className="start-disclaimer">
        <strong>Inte medicinsk rådgivning.</strong> Det här testet är gjort för
        reflektion och lite varsam humor — inte för diagnos. Om du har
        verkliga bekymmer, prata med din läkare. De har hört allt
        och kommer inte att bli förvånade.
      </p>
    </div>
  )
}
