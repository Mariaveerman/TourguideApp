import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/TourguideApp/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mijn React PWA',
        short_name: 'MijnApp',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icons/quastion.png',
            sizes: '512x512',
            type: 'image/png'
          },
                    {
            src: 'icons/quastion.png',
            sizes: '512x512',
            type: 'image/png'
          }

        ]
      }
    })
  ]
})
