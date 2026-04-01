import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import SliderQuestion from './SliderQuestion'
import './QuestionCard.css'

export default function QuestionCard({ question, index, total, onAnswer, onBack, selectedValue, isLast }) {
  const [visible, setVisible] = useState(false)
  const [sliderVal, setSliderVal] = useState(selectedValue ?? 0)

  useEffect(() => {
    setVisible(false)
    setSliderVal(selectedValue ?? 0)
    const t = setTimeout(() => setVisible(true), 30)
    return () => clearTimeout(t)
  }, [question.id, selectedValue])

  return (
    <div className={`question-card ${visible ? 'question-card--visible' : ''}`}>
      <ProgressBar current={index + 1} total={total} />

      <h2 className="question-text">{question.text}</h2>

      <SliderQuestion
        question={question}
        value={sliderVal}
        onChange={setSliderVal}
      />

      <div className="question-actions">
        <button
          className="btn-primary confirm-btn"
          onClick={() => onAnswer(index, sliderVal)}
          type="button"
        >
          {isLast ? 'Visa mitt kvitto →' : 'Nästa →'}
        </button>

        {index > 0 && (
          <button className="btn-ghost" onClick={onBack} type="button">
            ← Tillbaka
          </button>
        )}
      </div>
    </div>
  )
}
