import colors from 'vuetify/es5/util/colors'

export default {
  ssr: true,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + 'Web Developer',
    title: 'Devara Eko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Devara Eko - Web Developer' },
      { hid: 'keywords', name: 'keywords', content: 'devara eko, developer, web development, web developer, backend developer, responsive design, portofolio' },
      { hid: 'description', name: 'description', content: "Hi! I'm a web developer based in Yogyakarta, Indonesia. My passion and focus is backend development. But, I also love to create a beautiful and responsive website." },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://devaraeko.com/' },
      { property: 'og:site_name', content: 'Devara Eko - Web Developer' },
      { property: 'og:title', content: 'Devara Eko - Web Developer' },
      { property: 'og:description', content: "Hi! I'm a web developer based in Yogyakarta, Indonesia. My passion and focus is backend development. But, I also love to create a beautiful and responsive website." },
      { property: 'og:image', content: 'https://res.cloudinary.com/devaraeko/images/devara-eko-site.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://devaraeko.com/' },
      { property: 'twitter:title', content: 'Devara Eko - Web Developer' },
      { property: 'twitter:description', content: "Hi! I'm a web developer based in Yogyakarta, Indonesia. My passion and focus is backend development. But, I also love to create a beautiful and responsive website." },
      { property: 'twitter:image', content: 'https://res.cloudinary.com/devaraeko/images/devara-eko-site.jpg' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Devara Eko - Web Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#b2dfdb' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-75813593-2'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader'
  ],
  pwa: {
    manifest: {
      name: 'Hi! My name is Devara Eko, a web developer',
      short_name: 'Devara Eko'
    },
    meta: {
      theme_color: '#AFDED4'
    }
  },
  sitemap: [
    {
      hostname: 'https://devaraeko.com',
      path: '/sitemap.xml',
      trailingSlash: true
    }
  ],
  /*
  ** Web Fonts Loaded
  */
  webfontloader: {
    google: {
      families: [
        'Inconsolata:200,300,400,500,600,700'
      ],
      urls: [
        'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700&display=swap'
      ]
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    //   if (ctx && ctx.isClient) {
    //     config.optimization.splitChunks.maxSize = 51200
    //   }
    // }
  }
}
