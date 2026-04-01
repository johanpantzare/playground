import { useState } from 'react'
import './app.css'
import { questions, getAnswerScore } from './data/questions'
import { getResult } from './utils/results'
import StartScreen from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import ResultCard from './components/ResultCard'

const MAX_SCORE = questions.length * 3 // 15

export default function App() {
  const [screen, setScreen] = useState('start') // 'start' | 'quiz' | 'result'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(undefined))

  function handleStart() {
    setScreen('quiz')
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(undefined))
  }

  function handleAnswer(index, rawValue) {
    const updated = [...answers]
    updated[index] = rawValue
    setAnswers(updated)

    if (index < questions.length - 1) {
      setTimeout(() => setCurrentIndex(index + 1), 280)
    } else {
      setTimeout(() => setScreen('result'), 320)
    }
  }

  function handleBack() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  function handleRestart() {
    setScreen('start')
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(undefined))
  }

  const totalScore = answers.reduce(
    (sum, val, i) => sum + getAnswerScore(questions[i], val),
    0
  )
  const result = screen === 'result' ? getResult(totalScore) : null

  return (
    <main className="app">
      {screen === 'start' && (
        <div className="card">
          <StartScreen onStart={handleStart} />
        </div>
      )}

      {screen === 'quiz' && (
        <div className="card">
          <QuestionCard
            key={currentIndex}
            question={questions[currentIndex]}
            index={currentIndex}
            total={questions.length}
            onAnswer={handleAnswer}
            onBack={handleBack}
            selectedValue={answers[currentIndex]}
            isLast={currentIndex === questions.length - 1}
          />
        </div>
      )}

      {screen === 'result' && result && (
        <div className="card card--receipt">
          <ResultCard
            result={result}
            answers={answers}
            questions={questions}
            totalScore={totalScore}
            maxScore={MAX_SCORE}
            onRestart={handleRestart}
          />
        </div>
      )}
    </main>
  )
}
