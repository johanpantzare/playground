# Är det klimakteriet, älskling?

> A warm, witty wellness quiz. Not a diagnosis. Just a vibe check.

A polished React micro-app that helps users reflect — humorously and gently — on whether they might be experiencing menopause-related symptoms. Designed as a shareable, mobile-first experience with a luxury wellness aesthetic.

---

## Alternative name ideas

These were considered during development. Any of them would make an equally charming brand:

| Name | Vibe |
|---|---|
| **Lite varm bara** | "Just a little warm" — understated Swedish humour |
| **Inre temperatur** | "Inner temperature" — poetic, clinical-adjacent |
| **Hormoni** | Playful invented word, feels like a wellness app name |
| **Vallning & Balans** | "Hot flashes & Balance" — wellness brand energy |
| **Din inre klimatzon** | "Your inner climate zone" — mysterious and accurate |

---

## What this app is

A 12-question multiple-choice quiz that scores your answers and maps them to one of four result categories:

1. **Still Waters** — low symptom range
2. **Something is Stirring** — early signs
3. **Under Internal Pressure** — actively symptomatic range
4. **Full Internal Spa Drama** — high intensity range

The copy is intentionally warm, witty, and non-clinical. This app does not diagnose anything.

---

## Tech stack

- React 19
- Vite 7
- Plain CSS (no CSS frameworks)
- No external state libraries
- No router
- No backend

---

## Local development

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
cd menopause-quiz
npm install
```

### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173` (or the URL shown in your terminal).

---

## Build for production

```bash
npm run build
```

Output goes to `dist/`. You can preview it locally with:

```bash
npm run preview
```

---

## Deploy to GitHub Pages

### Step 1 — Configure the base path

In `vite.config.js`, set `base` to match your GitHub repository name:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // <-- replace with your actual repo name
})
```

If you're deploying to a custom domain or the root of a GitHub Pages org site, set `base: '/'`.

### Step 2 — Deploy with gh-pages

The `gh-pages` package is included as a dev dependency.

```bash
npm run deploy
```

This runs `vite build` and then pushes the `dist/` folder to the `gh-pages` branch of your repo.

### Step 3 — Enable GitHub Pages in your repo settings

1. Go to your repo on GitHub
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: `gh-pages` / `/ (root)`
5. Save

Your app will be live at `https://yourusername.github.io/your-repo-name/`

---

## Updating the quiz content

All question and answer data lives in `src/data/questions.js`. Each question has:

```js
{
  id: 1,
  text: "The question text",
  answers: [
    { text: "Answer option", score: 0 }, // score: 0–3
    // ...
  ]
}
```

Result category definitions live in `src/utils/results.js`. Adjust `minScore` / `maxScore` thresholds if you change the number of questions.

---

## Accessibility notes

- Semantic HTML throughout
- Answer buttons use `aria-pressed` for screen reader state
- Progress bar has `role="progressbar"` with `aria-valuenow`
- Focus states are visible and styled
- Text contrast meets WCAG AA for all foreground/background pairs

---

## Disclaimer

This app is not a medical device, diagnosis tool, or substitute for professional medical advice. It is a humorous wellness reflection quiz. Users with genuine health concerns should consult a qualified healthcare provider.
