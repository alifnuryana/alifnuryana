// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://alifnuryana.pages.dev',
    name: 'Alif Nuryana',
    description: 'Personal Website of Alif Nuryana 🤙',
    lang: 'id',
  },
})
