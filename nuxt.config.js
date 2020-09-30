
export default {
  target: 'server',
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'Repl.it PL Jam',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Repl.it Programming Language Jam Showcase.' }
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
