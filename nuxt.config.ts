export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://alifnuryana.pages.dev',
    name: 'Alif Nuryana',
    description: 'Personal Website of Alif Nuryana 🤙',
    lang: 'id',
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'cloudflare-pages',
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
