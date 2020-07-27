export default {
  // or
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...');
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */

  head: {
    title: 'Tasty Sites',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'WordPress websites, Vue / Nuxt apps and motion videos Interactive content, SVG animations, animated banners, logos, videos and fancy web stuff'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Creating Lightweight Websites, Vue Apps And Animations With GSAP'
      },
      {hid: 'og:image', property: 'og:image', content: 'icon.png'},
      {hid: 'og:width', property: 'og:width', content: '500'},
      {hid: 'og:height', property: 'og:height', content: '500'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://www.tastysites.pl'},
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'WordPress websites, Vue / Nuxt apps and motion videos Interactive content, SVG animations, animated banners, logos, videos and fancy web stuff'
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [],
  loading: {color: '#000', throttle: 1},
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/svg',
    'nuxt-lazy-load',
    '@nuxtjs/manifest',
    // With options
    ['nuxt-rfg-icon', {
      masterPicture: 'static/icon.png',
      static: false
    }],
  ],

  optimizedImages: {
    optimizeImages: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  rfg: {
    "masterPicture": "static/icon.png",
    "iconsPath": "/",
    "design": {
      "ios": {
        "pictureAspect": "backgroundAndMargin",
        "backgroundColor": "#ffffff",
        "margin": "14%",
        "assets": {
          "ios6AndPriorIcons": false,
          "ios7AndLaterIcons": false,
          "precomposedIcons": false,
          "declareOnlyDefaultIcon": true
        }
      },
      "desktopBrowser": {
        "design": "raw"
      },
      "windows": {
        "pictureAspect": "noChange",
        "backgroundColor": "#b91d47",
        "onConflict": "override",
        "assets": {
          "windows80Ie10Tile": false,
          "windows10Ie11EdgeTiles": {
            "small": false,
            "medium": true,
            "big": false,
            "rectangle": false
          }
        }
      },
      "androidChrome": {
        "pictureAspect": "noChange",
        "themeColor": "#ffffff",
        "manifest": {
          "name": "Tasty Sites",
          "display": "standalone",
          "orientation": "notSet",
          "onConflict": "override",
          "declared": true
        },
        "assets": {
          "legacyIcon": false,
          "lowResolutionIcons": false
        }
      },
      "safariPinnedTab": {
        "pictureAspect": "silhouette",
        "themeColor": "#5bbad5"
      }
    },
    "settings": {
      "scalingAlgorithm": "Mitchell",
      "errorOnImageTooSmall": false,
      "readmeFile": false,
      "htmlCodeFile": false,
      "usePathAsIs": false
    }
  }

}
