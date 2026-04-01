import { useState } from 'react'
import './ResultCard.css'

export default function ResultCard({ result, totalScore, maxScore, onRestart }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    const shareText = `${result.emoji} ${result.title}\n"${result.subtitle}"\n\nMy score: ${totalScore}/${maxScore}\n\nTake the quiz: Är det klimakteriet, älskling?`
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Clipboard not available — silently skip
    }
  }

  const scorePercent = Math.round((totalScore / maxScore) * 100)

  return (
    <div className="result-card screen-enter">
      <div className="result-header">
        <span className="result-emoji" aria-hidden="true">{result.emoji}</span>
        <h2 className="result-title">{result.title}</h2>
        <p className="result-subtitle">{result.subtitle}</p>
      </div>

      <div className="result-score-ring" aria-label={`Score: ${totalScore} out of ${maxScore}`}>
        <svg className="ring-svg" viewBox="0 0 80 80" aria-hidden="true">
          <circle className="ring-bg" cx="40" cy="40" r="34" />
          <circle
            className="ring-fill"
            cx="40"
            cy="40"
            r="34"
            strokeDasharray={`${2 * Math.PI * 34}`}
            strokeDashoffset={`${2 * Math.PI * 34 * (1 - scorePercent / 100)}`}
          />
        </svg>
        <div className="ring-label">
          <span className="ring-number">{totalScore}</span>
          <span className="ring-max">/ {maxScore}</span>
        </div>
      </div>

      <div className="result-body">
        {result.body.split('\n\n').map((paragraph, i) => (
          <p key={i} className="result-paragraph">{paragraph}</p>
        ))}
      </div>

      <div className="result-nudge">
        <span aria-hidden="true">💬</span>
        <p>{result.nudge}</p>
      </div>

      <div className="result-actions">
        <button className="btn-primary result-restart" onClick={onRestart}>
          Take it again
        </button>
        <button
          className="btn-ghost result-copy"
          onClick={handleCopy}
          aria-live="polite"
        >
          {copied ? '✓ Copied!' : 'Copy result'}
        </button>
      </div>

      <p className="result-fine-print">
        This is not a medical assessment. It is, however, a vibe check.
      </p>
    </div>
  )
}
