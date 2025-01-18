// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My Awesome Starter',
      meta: [
        {
          name: 'description',
          content: 'My Awesome Starter',
        },
      ],
    },
  },
  css: ['@/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000', // Biến public có sẵn ở cả client và server
    },
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-auth-utils',
  ],

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  colorMode: {
    classSuffix: '',
  },

  compatibilityDate: '2025-01-18',
})
