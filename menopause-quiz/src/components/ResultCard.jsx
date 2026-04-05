import { useState } from 'react'
import { getAnswerScore } from '../data/questions'
import { computeVE, formatVE, VE_REFERENCES } from '../utils/results'
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

// Find the two reference points the user sits between
function getVEContext(ve) {
  const sorted = [...VE_REFERENCES].sort((a, b) => a.ve - b.ve)
  const below = [...sorted].filter(r => r.ve <= ve).pop()
  const above = sorted.find(r => r.ve > ve)
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

  async function handleCopy() {
    const text = `${result.emoji} ${result.title}\n${formatVE(ve)} VE\n"${result.subtitle}"\n\nÄr det klimakteriet, älskling?`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch { /* silent */ }
  }

  return (
    <div className="receipt screen-enter">

      <div className="receipt-perf receipt-perf--top" aria-hidden="true" />

      <div className="receipt-header">
        <p className="receipt-store">VÄLMÅENDECENTRUM AB</p>
        <p className="receipt-dept">Klimateriavdelningen</p>
        <p className="receipt-org">Org.nr: 1972–∞</p>
      </div>

      <div className="receipt-rule" />

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
          <span>p</span>
        </div>
        {questions.map((q, i) => {
          const score = getAnswerScore(q, answers[i])
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

      <div className="receipt-total">
        <span>RÅSUMMA</span>
        <span>{rawSum} / 50</span>
      </div>

      <div className="receipt-rule" />

      {/* VE block — the star of the show */}
      <div className="ve-block">
        <p className="ve-label">VALLNINGSENHETER (VE)</p>
        <p className="ve-formula">VE = ⌊ e^(Σ × 0.45) × 10 ⌋</p>
        <p className="ve-number">{formatVE(ve)}</p>
        <p className="ve-unit">VE</p>

        <div className="ve-references">
          <p className="ve-ref-head">— Referensskala —</p>
          {VE_REFERENCES.map((ref) => {
            const isUser = below && above
              ? ref.ve === below.ve
              : false
            const isAbove = above && ref.ve === above.ve
            return (
              <div
                key={ref.label}
                className={`ve-ref-row ${isUser ? 've-ref-row--you-below' : ''} ${isAbove ? 've-ref-row--you-above' : ''}`}
              >
                <span className="ve-ref-label">{ref.label}</span>
                <span className="ve-ref-val">{formatVE(ref.ve)}</span>
              </div>
            )
          })}
          <div className="ve-ref-row ve-ref-row--you">
            <span className="ve-ref-label">★ DU</span>
            <span className="ve-ref-val">{formatVE(ve)}</span>
          </div>
        </div>
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

      <div className="receipt-result">
        <p className="receipt-subtitle">{result.subtitle}</p>
        {result.body.split('\n\n').map((p, i) => (
          <p key={i} className="receipt-body-text">{p}</p>
        ))}
      </div>

      <div className="receipt-rule" />

      <p className="receipt-nudge">{result.nudge}</p>

      <div className="receipt-rule" />

      <div className="receipt-footer">
        <p>Tack för ditt besök!</p>
        <p className="receipt-disclaimer">Ej medicinsk rådgivning</p>
        <div className="barcode" aria-hidden="true" />
        <p className="receipt-tagline">* * * spara kvittot * * *</p>
      </div>

      <div className="receipt-perf receipt-perf--bottom" aria-hidden="true" />

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
