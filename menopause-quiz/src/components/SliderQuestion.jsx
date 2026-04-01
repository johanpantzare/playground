import { useState } from 'react'
import './SliderQuestion.css'

// selectedValue = raw 0–10 value (or undefined → defaults to 0)
// onChange(value) — called live as slider moves
export default function SliderQuestion({ question, selectedValue, onChange }) {
  const [localValue, setLocalValue] = useState(selectedValue ?? 0)

  function handleChange(e) {
    const val = Number(e.target.value)
    setLocalValue(val)
    onChange(val)
  }

  const currentLabel = question.valueLabels?.[localValue] ?? localValue
  const fillPercent = (localValue / 10) * 100

  return (
    <div className="slider-question">
      <div className="slider-value-display">
        <span className="slider-current-label">{currentLabel}</span>
      </div>

      <div className="slider-track-wrapper">
        <input
          type="range"
          className="slider-input"
          min={0}
          max={10}
          step={1}
          value={localValue}
          onChange={handleChange}
          aria-label={question.text}
          aria-valuemin={0}
          aria-valuemax={10}
          aria-valuenow={localValue}
          aria-valuetext={currentLabel}
          style={{ '--fill-percent': `${fillPercent}%` }}
        />
      </div>

      <div className="slider-end-labels">
        <span>{question.minLabel}</span>
        <span>{question.maxLabel}</span>
      </div>
    </div>
  )
}
