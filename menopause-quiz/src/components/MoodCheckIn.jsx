import './MoodCheckIn.css'

// selectedValue = option index (or undefined)
// onSelect(index) — called when user taps a mood card
export default function MoodCheckIn({ question, selectedValue, onSelect }) {
  return (
    <div className="mood-checkin">
      <ul className="mood-options" role="list">
        {question.options.map((option, i) => (
          <li key={i} role="listitem">
            <button
              className={`mood-btn ${selectedValue === i ? 'mood-btn--selected' : ''}`}
              onClick={() => onSelect(i)}
              aria-pressed={selectedValue === i}
              type="button"
            >
              <span className="mood-emoji" aria-hidden="true">{option.emoji}</span>
              <span className="mood-label">{option.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
