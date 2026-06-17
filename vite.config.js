import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png)$/i,
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { lossless: false, quality: 80 },
    }),
  ],
  base: '/escenario-envivo/',
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    emptyOutDir: true,

    esbuild: {
      drop: ['console', 'debugger'],
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
    },

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  }
})