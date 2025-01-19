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
      appBaseUrl: process.env.NUXT_PUBLIC_APP_BASE_URL || 'http://localhost:3000',
    },
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-auth-utils',
    'nuxt-nodemailer'
  ],

  nodemailer: process.env.NODE_ENV === 'development'
    ? {
        from: process.env.SMTP_FROM,
        host: process.env.SMTP_SERVER,
        port: Number(process.env.SMTP_PORT),
      }
    : {
        from: process.env.SMTP_FROM,
        host: process.env.SMTP_SERVER,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },

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
