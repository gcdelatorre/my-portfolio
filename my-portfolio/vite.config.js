import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // This is the v4 way
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind runs as a Vite plugin now
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})