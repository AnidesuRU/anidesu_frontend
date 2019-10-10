import colors from "vuetify/lib/util/colors";

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/actioncable-vue', ssr: false },
    '~/plugins/vue-infinite-loading',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/axios',
    [
      '@nuxtjs/vuetify',
      {
        treeShake: true,
        defaultAssets: {
          font: {
            icons: 'Arial'
          }
        },
        icons: {
          iconfont: 'md'
        },
        theme: {
          dark: true,
          themes: {
            dark: {
              primary: colors.grey.darken4
            },
          }
        }
      }
    ],
  ],
  axios: {
    host: 'localhost',
    port: 8080,
    prefix: '/api/v1'
  },

  /*
  ** Build configuration
  */
  build: {
  }
}
