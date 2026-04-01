import { useState } from 'react'
import './app.css'
import { questions, SCREENING_COUNT, SCREENING_THRESHOLD, getAnswerScore } from './data/questions'
import { getResult } from './utils/results'
import StartScreen from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import ResultCard from './components/ResultCard'

const PHASE = {
  START: 'start',
  SCREENING: 'screening',
  FULL: 'full',
  RESULT: 'result',
}

const screeningQuestions = questions.slice(0, SCREENING_COUNT)
const fullQuestions = questions.slice(SCREENING_COUNT)
const MAX_SCORE = questions.length * 3

export default function App() {
  const [phase, setPhase] = useState(PHASE.START)
  const [currentIndex, setCurrentIndex] = useState(0)
  // answers[i] = raw value for question i (undefined = not yet answered)
  const [answers, setAnswers] = useState(Array(questions.length).fill(undefined))

  const activeQuestions = phase === PHASE.SCREENING ? screeningQuestions : fullQuestions
  const questionOffset = phase === PHASE.FULL ? SCREENING_COUNT : 0

  function handleStart() {
    setPhase(PHASE.SCREENING)
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(undefined))
  }

  function handleAnswer(localIndex, rawValue) {
    const globalIndex = questionOffset + localIndex
    const updated = [...answers]
    updated[globalIndex] = rawValue
    setAnswers(updated)

    const isLastInPhase = localIndex === activeQuestions.length - 1

    if (phase === PHASE.SCREENING && isLastInPhase) {
      // Evaluate screening score
      const screeningScore = screeningQuestions.reduce((sum, q, i) => {
        const val = updated[i]
        return sum + getAnswerScore(q, val)
      }, 0)

      if (screeningScore < SCREENING_THRESHOLD) {
        // All clear — show early result
        setTimeout(() => setPhase(PHASE.RESULT), 350)
      } else {
        // Continue to full assessment
        setTimeout(() => {
          setCurrentIndex(0)
          setPhase(PHASE.FULL)
        }, 350)
      }
      return
    }

    if (phase === PHASE.FULL && isLastInPhase) {
      setTimeout(() => setPhase(PHASE.RESULT), 350)
      return
    }

    setTimeout(() => setCurrentIndex(localIndex + 1), 300)
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (phase === PHASE.FULL) {
      // Go back to last screening question
      setCurrentIndex(screeningQuestions.length - 1)
      setPhase(PHASE.SCREENING)
    }
  }

  function handleRestart() {
    setPhase(PHASE.START)
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(undefined))
  }

  const totalScore = answers.reduce((sum, rawVal, i) => {
    return sum + getAnswerScore(questions[i], rawVal)
  }, 0)

  const result = phase === PHASE.RESULT ? getResult(totalScore) : null

  // Global question number for the progress bar (1-based)
  const globalQuestionNumber = questionOffset + currentIndex + 1
  const totalQuestions = questions.length

  return (
    <main className="app">
      {phase === PHASE.START && (
        <div className="card">
          <StartScreen onStart={handleStart} />
        </div>
      )}

      {(phase === PHASE.SCREENING || phase === PHASE.FULL) && (
        <div className="card">
          <QuestionCard
            key={`${phase}-${currentIndex}`}
            question={activeQuestions[currentIndex]}
            localIndex={currentIndex}
            globalQuestionNumber={globalQuestionNumber}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
            onBack={handleBack}
            selectedValue={answers[questionOffset + currentIndex]}
            showBack={currentIndex > 0 || phase === PHASE.FULL}
          />
        </div>
      )}

      {phase === PHASE.RESULT && result && (
        <div className="card">
          <ResultCard
            result={result}
            totalScore={totalScore}
            maxScore={MAX_SCORE}
            onRestart={handleRestart}
          />
        </div>
      )}
    </main>
  )
}
