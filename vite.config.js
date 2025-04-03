import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    enviroment: 'jsdom',
    setupfiles: './src/setupTests.js',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    
  }
})
