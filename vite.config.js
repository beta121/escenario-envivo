import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/escenario-envivo/',
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    emptyOutDir: true,
  }
})
