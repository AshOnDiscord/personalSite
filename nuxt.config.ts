// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // <meta name="darkreader-lock">
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [{ name: "darkreader-lock", content: "" }],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "@nuxt/content"],

  typescript: {
    typeCheck: true,
  },
});