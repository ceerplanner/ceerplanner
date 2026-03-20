import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ceerplanner/', // GitHub Pages base: https://ceeplannner.github.io/ceeplanner/
})
