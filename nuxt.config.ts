import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/")
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
});
