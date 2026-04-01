import './ProgressBar.css'

export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="progress-wrapper" role="group" aria-label="Testets framsteg">
      <div className="progress-meta">
        <span className="progress-label">Fråga {current} av {total}</span>
        <span className="progress-pct">{percentage}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Fråga ${current} av ${total}`}
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
