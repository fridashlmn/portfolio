import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'msapplication-TileColor',
          content: '#000000',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'manifest',
          href: `/site.webmanifest`,
          crossorigin: 'use-credentials',
        },
        {
          rel: 'mask-icon',
          color: '#5bbad5',
          href: `/safari-pinned-tab.svg`,
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  modules: [
    'nuxt-security',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Bodoni Moda': true,
        },
      },
    ],
  ],

  nitro: {
    compressPublicAssets: { brotli: true },
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  security: {
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
      contentSecurityPolicy: false,
      xFrameOptions: false,
    },
  },

  vite: {
    plugins: [tailwindcss(), svgLoader()],
    optimizeDeps: {
      include: ['fast-deep-equal'],
    },
  },

  compatibilityDate: '2025-02-08',
})
