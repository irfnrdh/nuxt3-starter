// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false
  },

  app: {
    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
  ],

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    dbName: process.env.DB_NAME,

    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },

  tailwindcss: {
    exposeConfig: true
  },

  colorMode: {
    classSuffix: ""
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    imports: [{
      from: "tailwind-variants",
      name: "tv",
    }, {
      from: "tailwind-variants",
      name: "VariantProps",
      type: true,
    }, {
      from: "vue-sonner",
      name: "toast",
      as: "useSonner"
    }],
  },

  build: {
    transpile: ["vue-sonner"]
  },

  devServer: {
    https: {
      key: './server.key',
      cert: './server.crt'
    }
  }

  // auth : {
  //   baseURL: process.env.AUTH_ORIGIN,
  //   provider : {
  //     type: 'authjs'
  //   },
  // }
});