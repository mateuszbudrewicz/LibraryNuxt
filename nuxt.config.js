module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Library Opole',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Charmonman'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lobster'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Righteous'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:600&amp;subset=latin-ext'},
      { rel:'stylesheet', href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css"} 
    ]
  },
  modules: [
      ['bootstrap-vue/nuxt', { css: false }],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

