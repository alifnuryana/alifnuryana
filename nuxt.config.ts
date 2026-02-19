import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  modules: ['nitro-cloudflare-dev', '@nuxt/eslint'],
  devtools: { enabled: true },

  css: ['./app/assets/css/tailwind.css'],
  compatibilityDate: '2025-07-15',

  nitro: {
    preset: 'cloudflare-pages',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
