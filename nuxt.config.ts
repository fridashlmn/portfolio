import svgLoader from 'vite-svg-loader'
// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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

  buildModules: ['@nuxtjs/google-fonts', '@nuxt/image-edge'],

  components: ['~/components'],

  css: ['~/assets/css/global.css', '~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    dir: 'assets/images',
  },

  modules: [
    'nuxt-windicss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Bodoni Moda': true,
        },
      },
    ],
    '@nuxt/image-edge',
  ],

  nitro: {
    compressPublicAssets: { brotli: true },
  },

  target: 'static',

  vite: {
    plugins: [svgLoader()],
    optimizeDeps: {
      include: ['fast-deep-equal'],
    },
  },

  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 3003,
        open: false,
      },
    },
  },
})
