
export default {
  target: 'server',
  head: {
    title: 'Repl.it PL Jam',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'vuesax/dist/vuesax.css',
    '~/assets/global.css'
  ],
  plugins: [
    '@/plugins/vuesax'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/content',
    '@nuxtjs/axios',
  ],
  axios: {},
  build: {}
}
