import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      //경로 별칭 설정
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
