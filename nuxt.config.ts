// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  typescript: {
    // typeCheck: true,
  },

  nitro: {
    experimental: {
      websocket: true,
      database: true,
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["@nuxt/eslint", "@nuxt/content", "@nuxt/ui", "@nuxt/image"],

  content: {
    highlight: {
      // theme: {
      //   default: "catppuccin-latte",
      //   dark: "catppuccin-macchiato",
      // },
      theme: "catppuccin-latte",
    },
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
    editorSupport: true,
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },
});