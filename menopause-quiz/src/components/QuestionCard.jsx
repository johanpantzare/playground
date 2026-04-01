import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import './QuestionCard.css'

export default function QuestionCard({ question, questionIndex, totalQuestions, onAnswer, onBack, selectedScore }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Trigger entrance animation whenever question changes
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 30)
    return () => clearTimeout(t)
  }, [question.id])

  function handleSelect(score) {
    onAnswer(questionIndex, score)
  }

  return (
    <div className={`question-card ${visible ? 'question-card--visible' : ''}`}>
      <ProgressBar current={questionIndex + 1} total={totalQuestions} />

      <h2 className="question-text">{question.text}</h2>

      <ul className="answers-list" role="list">
        {question.answers.map((answer, i) => {
          const isSelected = selectedScore === answer.score && selectedScore !== undefined
          return (
            <li key={i} role="listitem">
              <button
                className={`answer-btn ${isSelected ? 'answer-btn--selected' : ''}`}
                onClick={() => handleSelect(answer.score)}
                aria-pressed={isSelected}
              >
                <span className="answer-indicator" aria-hidden="true" />
                <span className="answer-text">{answer.text}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="question-nav">
        {questionIndex > 0 && (
          <button className="btn-ghost" onClick={onBack}>
            ← Back
          </button>
        )}
      </div>
    </div>
  )
}
