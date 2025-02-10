import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/project-promo-B-module-3-team-2/",
  server: {
    watch: {
      usePolling: true,
    },
    open: true,
  },
  base: '/project-promo-B-module-3-team-2/',
});