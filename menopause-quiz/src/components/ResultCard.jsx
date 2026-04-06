import { useState } from 'react'
import { getAnswerScore } from '../data/questions'
import { computeVE, formatVE, VE_REFERENCES, getVETier } from '../utils/results'
import './ResultCard.css'

function getVEContext(ve) {
  const sorted = [...VE_REFERENCES].sort((a, b) => a.ve - b.ve)
  const below = [...sorted].filter((r) => r.ve <= ve).pop()
  const above = sorted.find((r) => r.ve > ve)
  return { below, above }
}

export default function ResultCard({ result, answers, questions, totalScore, maxScore, onRestart }) {
  const [copied, setCopied] = useState(false)

  const today = new Date().toLocaleDateString('sv-SE', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const rawSum = answers.reduce((sum, val) => sum + (val ?? 0), 0)
  const ve = computeVE(rawSum)
  const { below, above } = getVEContext(ve)
  const tier = getVETier(ve)

  async function handleCopy() {
    const text = `${result.emoji} ${result.title} — ${formatVE(ve)} VE\n"${result.subtitle}"\n\nÄr det klimakteriet, älskling?`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch { /* silent */ }
  }

  return (
    <div className="receipt screen-enter">

      <div className="receipt-perf" aria-hidden="true" />

      {/* Header */}
      <div className="receipt-header">
        <p className="receipt-store">VÄLMÅENDECENTRUM AB</p>
        <p className="receipt-dept">Klimateriavdelningen · Org.nr: 1972–∞</p>
      </div>

      <div className="receipt-rule" />

      {/* Meta */}
      <div className="receipt-meta">
        <span>Datum</span>  <span>{today}</span>
        <span>Kund</span>   <span>Dig, älskling</span>
      </div>

      <div className="receipt-rule" />

      {/* Line items — cleaner layout */}
      <div className="receipt-items">
        {questions.map((q, i) => {
          const score = getAnswerScore(q, answers[i])
          const raw = answers[i] ?? 0
          const label = q.valueLabels?.[raw] ?? `${raw}/10`
          return (
            <div key={q.id} className="receipt-item">
              <span className="item-name">{q.shortName}</span>
              <span className="item-label">{label}</span>
              <span className="item-score">{score}/3</span>
            </div>
          )
        })}
      </div>

      <div className="receipt-rule" />

      {/* VE — hero number */}
      <div className="ve-block">
        <p className="ve-label">VALLNINGSENHETER (VE)</p>
        <p className="ve-formula">VE = ⌊ e^(Σ × 0.45) × 10 ⌋</p>
        <p className="ve-number">{formatVE(ve)}</p>
        <p className="ve-unit">VE</p>

        {/* Simple contextual line */}
        {below && above && (
          <p className="ve-context">
            Varmare än {below.label.toLowerCase()} ({formatVE(below.ve)} VE),
            svalare än {above.label.toLowerCase()} ({formatVE(above.ve)} VE).
          </p>
        )}
        {!above && (
          <p className="ve-context">Du överträffar samtliga referenspunkter på skalan. Imponerande.</p>
        )}
      </div>

      <div className="receipt-rule" />

      {/* Stamp + result */}
      <div className="receipt-stamp-area">
        <div className={`stamp stamp--${result.id}`}>
          <span className="stamp-emoji" aria-hidden="true">{result.emoji}</span>
          <span className="stamp-label">{result.stamp}</span>
          <span className="stamp-title">{result.title}</span>
        </div>
      </div>

      <div className="receipt-result">
        <p className="receipt-subtitle">{result.subtitle}</p>
        {result.body.split('\n\n').map((p, i) => (
          <p key={i} className="receipt-body-text">{p}</p>
        ))}
      </div>

      <div className="receipt-rule" />

      {/* Exercise */}
      {tier && (
        <div className="exercise-block">
          <p className="exercise-heading">— Din rekommenderade övning —</p>
          {tier.exercise.split('\n\n').map((p, i) => (
            <p key={i} className="exercise-text">{p}</p>
          ))}
          <a
            className="youtube-btn"
            href={`https://www.youtube.com/watch?v=${tier.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ "{tier.song}" — {tier.artist}
          </a>
        </div>
      )}

      <div className="receipt-rule" />

      <p className="receipt-nudge">{result.nudge}</p>

      <div className="receipt-rule" />

      {/* Footer */}
      <div className="receipt-footer">
        <p>Tack för ditt besök!</p>
        <p className="receipt-disclaimer">Ej medicinsk rådgivning</p>
        <div className="barcode" aria-hidden="true" />
        <p className="receipt-tagline">* * * spara kvittot * * *</p>
      </div>

      <div className="receipt-perf" aria-hidden="true" />

      <div className="receipt-actions">
        <button className="btn-primary" onClick={onRestart} type="button">
          Gör om testet
        </button>
        <button className="btn-ghost" onClick={handleCopy} aria-live="polite" type="button">
          {copied ? '✓ Kopierat!' : 'Kopiera'}
        </button>
      </div>
    </div>
  )
}
