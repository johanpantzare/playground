import { useState } from 'react'
import './StartScreen.css'

export default function StartScreen({ onStart }) {
  const [infoOpen, setInfoOpen] = useState(false)

  return (
    <div className="start-screen">
      <button
        className="info-btn"
        onClick={() => setInfoOpen((v) => !v)}
        aria-expanded={infoOpen}
        aria-label="Mer information"
        type="button"
      >
        {infoOpen ? '×' : 'i'}
      </button>

      {infoOpen && (
        <div className="info-panel" role="note">
          <p>
            Ett roligt välmåendetest — inte ett medicinskt verktyg.
            Svara ärligt på 5 frågor och få ett personligt kvitto.
          </p>
          <p>
            <strong>Inte medicinsk rådgivning.</strong> Om du har
            verkliga bekymmer, prata med din läkare.
          </p>
        </div>
      )}

      <div className="start-bloom" aria-hidden="true">🌸</div>

      <h1 className="start-title">
        Är det klimakteriet,<br /><em>älskling?</em>
      </h1>

      <p className="start-tagline">5 frågor. Ett kvitto. Noll dömande.</p>

      <button className="btn-primary" onClick={onStart} type="button">
        Starta testet
      </button>
    </div>
  )
}
