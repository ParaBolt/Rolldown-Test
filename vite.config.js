import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build:
  {
    cssCodeSplit: true,

    lib:
    {
      entry: 'src/App.vue',
      name: 'test.abc',
      fileName: () => 'App.js',
      formats: ['iife']
    }
  }
})