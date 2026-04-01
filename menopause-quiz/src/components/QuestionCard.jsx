import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import MoodCheckIn from './MoodCheckIn'
import SliderQuestion from './SliderQuestion'
import './QuestionCard.css'

export default function QuestionCard({
  question,
  localIndex,
  globalQuestionNumber,
  totalQuestions,
  onAnswer,
  onBack,
  selectedValue,
  showBack,
}) {
  const [visible, setVisible] = useState(false)
  // For slider: track pending value so we can confirm via button
  const [pendingSlider, setPendingSlider] = useState(selectedValue ?? 0)

  useEffect(() => {
    setVisible(false)
    setPendingSlider(selectedValue ?? 0)
    const t = setTimeout(() => setVisible(true), 30)
    return () => clearTimeout(t)
  }, [question.id, selectedValue])

  function handleMoodSelect(optionIndex) {
    onAnswer(localIndex, optionIndex)
  }

  function handleChoiceSelect(score) {
    onAnswer(localIndex, score)
  }

  function handleSliderChange(val) {
    setPendingSlider(val)
  }

  function handleSliderConfirm() {
    onAnswer(localIndex, pendingSlider)
  }

  return (
    <div className={`question-card ${visible ? 'question-card--visible' : ''}`}>
      <ProgressBar current={globalQuestionNumber} total={totalQuestions} />

      <h2 className="question-text">{question.text}</h2>

      {question.type === 'mood' && (
        <MoodCheckIn
          question={question}
          selectedValue={selectedValue}
          onSelect={handleMoodSelect}
        />
      )}

      {question.type === 'slider' && (
        <>
          <SliderQuestion
            question={question}
            selectedValue={pendingSlider}
            onChange={handleSliderChange}
          />
          <div className="slider-confirm-row">
            <button className="btn-primary slider-confirm-btn" onClick={handleSliderConfirm}>
              Nästa →
            </button>
          </div>
        </>
      )}

      {question.type === 'choice' && (
        <ul className="answers-list" role="list">
          {question.answers.map((answer, i) => (
            <li key={i} role="listitem">
              <button
                className={`answer-btn ${selectedValue === answer.score ? 'answer-btn--selected' : ''}`}
                onClick={() => handleChoiceSelect(answer.score)}
                aria-pressed={selectedValue === answer.score}
                type="button"
              >
                <span className="answer-indicator" aria-hidden="true" />
                <span className="answer-text">{answer.text}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="question-nav">
        {showBack && (
          <button className="btn-ghost" onClick={onBack} type="button">
            ← Tillbaka
          </button>
        )}
      </div>
    </div>
  )
}
