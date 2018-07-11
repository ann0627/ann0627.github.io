const webpack = require('webpack');

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Personal',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ],
    script: [{
      type: 'javascript',
      src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
    }]
  },
  router: {
    base: '/',
  },
  plugins: [
    '~/plugins/vue-slick',
    '~/plugins/vue-lodash',
    '~/plugins/vue-scrollto',
    {
      src: '~plugins/ga.js',
      ssr: false
    }
  ],
  axios: {
    // proxyHeaders: false,
    // baseURL: 'https://hsbk.dev3.hellosanta.tw'
    baseURL: process.env.API_URL || 'http://localhost:3000/',
  },
  sassResources: [
    '@/assets/scss/style.scss'
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend(config, {
      isServer
    }) {
      if (isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
