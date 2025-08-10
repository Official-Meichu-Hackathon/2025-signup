import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import eslint from 'vite-plugin-eslint'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    eslint(),
    Sitemap({
      hostname: 'https://2025.meichuhackathon.org',
      dynamicRoutes: [
        '/registration',
        '/schedule',
        '/problems',
        '/data',
        '/signup',
        '/success-signup',
      ],
      generateRobotsTxt: false,
    }),
  ],
})
