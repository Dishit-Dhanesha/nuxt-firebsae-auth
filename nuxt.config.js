export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /* reCAPTCHA siteKey */
  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: process.env.RECAPTCHA_SITE_KEY // for example
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  router: {
    middleware: ['auth'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.APIKEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APPI,
          measurementId: process.env.MEASUREMENT_ID,
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false,
            },
            ssr: false, // default
          },
          // firebase: true,
          firestore: {
            memoryOnly: false,
            enablePersistence: true,
          },
        },
      },
    ],
    '@nuxtjs/pwa',
    '@nuxtjs/bulma',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-buefy',
    [
      'nuxt-social-meta',
      {
        url: 'Site url',
        title: 'Title',
        site_name: 'Site name',
        description: 'Site description',
        img: 'Link to image in static folder',
        img_size: { width: 'Image width in px', height: 'Image height in px' },
        locale: 'en_US',
        twitter: '@user',
        twitter_card: 'summary_large_image',
        theme_color: '#theme-color',
      },
    ],
    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-XXXXXXX',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
