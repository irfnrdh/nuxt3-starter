// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  modules: [
    // 'nuxt-icon',
    // 'nuxt-lodash',
    // '@pinia/nuxt',
    // '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',

    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
})
