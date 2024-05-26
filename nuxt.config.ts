// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  typescript: {
    shim: false
  },
  components: [
    { path: '~/components/sidekick', prefix: '' },
    { path: '~/components/sidekick/light', prefix: 'Sidekick' },
    '~/components'
  ],
})
