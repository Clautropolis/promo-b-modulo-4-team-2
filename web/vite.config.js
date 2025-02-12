import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/promo-b-modulo-4-team-2/",
  server: {
    watch: {
      usePolling: true,
    },
    open: true,
  },
});