/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      display: ["group-hover"]
    },
    screens: {
      'mobile': {'max': '320px'},
      // => @media (max-width: 320px) { ... }

      'small-tablet': {'max': '480px'},
      // => @media (max-width: 480px) { ... }

      'tablet': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'big-tablet': {'max': '960px'},
      // => @media (max-width: 960px) { ... }

      'laptop': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'desktop': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }
    },
  },
  plugins: [],
}

