import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/*.{vue,jsx,tsx}",
    "./components/*.{vue,jsx,tsx}",
    "./layouts/*.{vue,jsx,tsx}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
