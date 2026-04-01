import { useState } from 'react'
import './app.css'
import { questions } from './data/questions'
import { getResult } from './utils/results'
import StartScreen from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import ResultCard from './components/ResultCard'

// App states
const SCREEN = {
  START: 'start',
  QUIZ: 'quiz',
  RESULT: 'result',
}

const MAX_SCORE = questions.length * 3

export default function App() {
  const [screen, setScreen] = useState(SCREEN.START)
  const [currentIndex, setCurrentIndex] = useState(0)
  // answers: array of score values per question index, or undefined if unanswered
  const [answers, setAnswers] = useState(Array(questions.length).fill(undefined))

  function handleStart() {
    setScreen(SCREEN.QUIZ)
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(undefined))
  }

  function handleAnswer(questionIndex, score) {
    const updated = [...answers]
    updated[questionIndex] = score
    setAnswers(updated)

    // Auto-advance to next question after a brief moment
    if (questionIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(questionIndex + 1), 300)
    } else {
      // Last question — show results
      setTimeout(() => setScreen(SCREEN.RESULT), 350)
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function handleRestart() {
    setScreen(SCREEN.START)
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(undefined))
  }

  const totalScore = answers.reduce((sum, a) => sum + (a ?? 0), 0)
  const result = screen === SCREEN.RESULT ? getResult(totalScore) : null

  return (
    <main className="app">
      {screen === SCREEN.START && (
        <div className="card">
          <StartScreen onStart={handleStart} />
        </div>
      )}

      {screen === SCREEN.QUIZ && (
        <div className="card">
          <QuestionCard
            key={currentIndex}
            question={questions[currentIndex]}
            questionIndex={currentIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            onBack={handleBack}
            selectedScore={answers[currentIndex]}
          />
        </div>
      )}

      {screen === SCREEN.RESULT && result && (
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
