import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 base: 'PORTOFOLIO.SAYA',
    server:{port:5000},
  plugins: [react()],
})
