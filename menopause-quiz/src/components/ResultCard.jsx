import { useState } from 'react'
import { getAnswerScore } from '../data/questions'
import './ResultCard.css'

function ScoreDots({ score, max = 3 }) {
  return (
    <span className="score-dots" aria-label={`${score} av ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < score ? 'dot dot--filled' : 'dot'} aria-hidden="true" />
      ))}
    </span>
  )
}

export default function ResultCard({ result, answers, questions, totalScore, maxScore, onRestart }) {
  const [copied, setCopied] = useState(false)

  const today = new Date().toLocaleDateString('sv-SE', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  async function handleCopy() {
    const text = `${result.emoji} ${result.title} — ${totalScore}/${maxScore}\n"${result.subtitle}"\n\nÄr det klimakteriet, älskling?`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch { /* silent */ }
  }

  return (
    <div className="receipt screen-enter">

      {/* Perforated top edge */}
      <div className="receipt-perf receipt-perf--top" aria-hidden="true" />

      {/* Header */}
      <div className="receipt-header">
        <p className="receipt-store">VÄLMÅENDECENTRUM AB</p>
        <p className="receipt-dept">Klimateriavdelningen</p>
        <p className="receipt-org">Org.nr: 1972–∞</p>
      </div>

      <div className="receipt-rule" />

      {/* Meta */}
      <div className="receipt-meta">
        <span>Datum</span><span>{today}</span>
        <span>Kund</span><span>Dig, älskling</span>
        <span>Ärende</span><span>Inre klimatkontroll</span>
      </div>

      <div className="receipt-rule" />

      {/* Line items */}
      <div className="receipt-items">
        <div className="receipt-item receipt-item--head">
          <span>Artikel</span>
          <span>Nivå</span>
          <span>Poäng</span>
        </div>
        {questions.map((q, i) => {
          const raw = answers[i]
          const score = getAnswerScore(q, raw)
          return (
            <div key={q.id} className="receipt-item">
              <span>{q.shortName}</span>
              <ScoreDots score={score} />
              <span>{score}/3</span>
            </div>
          )
        })}
      </div>

      <div className="receipt-rule" />

      {/* Total */}
      <div className="receipt-total">
        <span>TOTALT</span>
        <span>{totalScore}/{maxScore}</span>
      </div>

      <div className="receipt-rule" />

      {/* Stamp */}
      <div className="receipt-stamp-area">
        <div className={`stamp stamp--${result.id}`}>
          <span className="stamp-emoji" aria-hidden="true">{result.emoji}</span>
          <span className="stamp-label">{result.stamp}</span>
          <span className="stamp-title">{result.title}</span>
        </div>
      </div>

      {/* Result text */}
      <div className="receipt-result">
        <p className="receipt-subtitle">{result.subtitle}</p>
        {result.body.split('\n\n').map((p, i) => (
          <p key={i} className="receipt-body-text">{p}</p>
        ))}
      </div>

      <div className="receipt-rule" />

      {/* Nudge */}
      <p className="receipt-nudge">{result.nudge}</p>

      <div className="receipt-rule" />

      {/* Footer */}
      <div className="receipt-footer">
        <p>Tack för ditt besök!</p>
        <p className="receipt-disclaimer">Ej medicinsk rådgivning</p>
        <div className="barcode" aria-hidden="true" />
        <p className="receipt-tagline">* * * spara kvittot * * *</p>
      </div>

      {/* Perforated bottom edge */}
      <div className="receipt-perf receipt-perf--bottom" aria-hidden="true" />

      {/* Actions (outside receipt paper) */}
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
