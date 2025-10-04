import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
  "display": "standalone",
  "theme_color": "#3f51b5",
  "background_color": "#3f51b5",
  "icons": [
    {
      "src": "/manifest/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/manifest/android-icon-36x36.png",
      "sizes": "36x36",
      "type": "image/png",
    },
    {
      "src": "/manifest/android-icon-48x48.png",
      "sizes": "48x48",
      "type": "image/png",
    },
    {
      "src": "/manifest/android-icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
    },
    {
      "src": "/manifest/android-icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
    },
    {
      "src": "/manifest/android-icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
    },
    {
      "src": "/manifest/android-icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
    }
  ]
      }
    })
  ],
})
