import './StartScreen.css'

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen screen-enter">
      <div className="start-brand">
        <span className="start-bloom" aria-hidden="true">🌸</span>
      </div>

      <h1 className="start-title">
        Är det klimakteriet,<br />
        <em>älskling?</em>
      </h1>

      <p className="start-tagline">
        A warm, witty wellness quiz for anyone who has recently opened a window
        for no reason they can fully explain.
      </p>

      <div className="start-divider" aria-hidden="true" />

      <p className="start-intro">
        Twelve questions. Honest answers. Zero judgement.
        Just you, some gently phrased reflections on your inner climate,
        and a result that will feel either surprisingly accurate
        or extremely irrelevant — both are valid outcomes.
      </p>

      <button className="btn-primary start-cta" onClick={onStart}>
        Begin the vibe check
      </button>

      <p className="start-disclaimer">
        <strong>Not medical advice.</strong> This quiz is designed for reflection
        and gentle humour — not diagnosis. If you have real concerns,
        please speak with your GP. They have heard everything and they will
        not be surprised.
      </p>
    </div>
  )
}
