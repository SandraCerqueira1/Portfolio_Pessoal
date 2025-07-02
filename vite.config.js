import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Portfolio_Pessoal/', // <-- substitui isso pelo nome exato do repositório no GitHub
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})
