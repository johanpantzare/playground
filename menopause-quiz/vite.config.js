import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages deployment, set `base` to your repo name.
// Example: if your repo URL is https://username.github.io/my-repo/
// then set base: '/my-repo/'
//
// For local dev or root-domain deployment, leave base as '/'

export default defineConfig({
  plugins: [react()],
  base: '/menopause-quiz/', // <-- change this to your GitHub repo name
})
