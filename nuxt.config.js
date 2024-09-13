const BLOG_URLS = [
  '/blog/unleash-the-power-of-website-designing-boost-your-online-presence/',
  '/blog/the-ultimate-guide-to-successful-website-development-in-2024/',
  '/blog/10-must-have-features-for-modern-website-designing/',
  '/blog/the-ultimate-guide-to-software-development-and-integration-to-boost-your-business-efficiency/',
  '/blog/the-secrets-behind-effective-website-design-and-development/',
  '/blog/10-essential-tools-for-seamless-software-development-and-integration/',
  '/blog/boost-conversions-with-expert-website-development-techniques/',
  '/blog/ultimate-technical-seo-guide-to-boost-website-rankings-without-backlinks/',
  '/blog/the-art-of-creative-website-designing-inspire-and-captivate/',
  '/blog/mastering-ux-ui-the-key-to-engaging-website-design/',
  '/blog/elevate-your-brand-with-professional-website-development/',
  '/blog/web-design-trends-to-watch-out-for-in-2024/',
  '/blog/cutting-edge-technologies-for-next-level-website-development/',
  '/blog/the-future-of-software-development-and-integration-latest-trends-and-innovations/',
  '/blog/website-designing-tips-optimizing-for-speed-and-performance/',
  '/blog/get-noticed-seo-friendly-website-design-techniques/',
  '/blog/mastering-the-dasics-of-wWebsite-designing-a-step-by-step-guide/',
  '/blog/maximize-user-engagement-with-interactive-website-development/',
  '/blog/website-launch-success-a-comprehensive-guide/',
  '/blog/website-development-on-a-budget-how-to-get-quality-within-reach/',
  '/blog/the-psychology-behind-effective-website-design-strategies/',
  '/blog/optimize-your-website-development-for-voice-search/',
  '/blog/unlocking-success-key-principles-of-successful-software-development-and-integration/',
  '/blog/the-benefits-and-challenges-of-ai-integration-for-different-industries/',
  '/blog/latest-web-design-trends-and-innovation-in-2024/',
  '/blog/choosing-the-right-software-development-and-integration-partner/',
  '/blog/insider-secrets-unleashing-technical-seo-wizards-for-unstoppable-rankings/',
  '/blog/the-future-of-technical-seo-and-staying-ahead-of-algorithm-updates/',
  '/blog/mastering-seo-the-secret-sauce-to-skyrocket-your-traffic/',
  '/blog/artificial-intelligence-for-businesses-in-2024/',
  '/blog/saas-in-2024/',
  '/blog/the-complete-guide-to-full-stack-web-development/',
  '/blog/5-common-mistakes-to-avoid-when-integrating-ai-into-your-app/',
  '/blog/the-latest-technologies-and-frameworks-for-saas-development/',
]

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  env: {
     open_Ai_Token: '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',
     open_Ai_Organization: 'org-L7wPsQDhqyXd8zJ9l22JBhJ7',
     open_Ai_Url: 'https://api.openai.com/v1/chat/completions',
  },

  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Teksyo | Creating Million-Dollar Websites & AI SaaS for Startup Ideas',
    htmlAttrs: {
      lang: 'en',
    },
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Turn your startup idea into a success story! We specialize in Web Design, E-commerce, Custom Solutions, SAAS, and AI-Integration (OpenAI/ChatGPT)' },
      { hid: 'keywords', name: 'keywords', content: 'ecommerce web design services, web development services, web design services, custom business solution services, SAAS development services, open ai/chat gpt integration' },
      { hid: 'keywords', name: 'keywords', content: 'law firm web design services, small business web design services, roofing web design services, plumbing web design services, corporate web design services' },
      // Open Graph Tags (for social sharing)
      { hid: 'og:title', property: 'og:title', content: 'Teksyo | Creating Million-Dollar Websites & AI SaaS for Startup Ideas' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.teksyo.com' },
      { hid: 'og:description', property: 'og:description', content: 'Turn your startup idea into a success story! We specialize in Web Design, E-commerce, Custom Solutions, SAAS, and AI-Integration (OpenAI/ChatGPT)' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.teksyo.com/teksyo-og-home.jpg' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      // Twitter Card Tags (for Twitter sharing):
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@TeksyoDesign' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Teksyo | Creating Million-Dollar Websites & AI SaaS for Startup Ideas' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Turn your startup idea into a success story! We specialize in Web Design, E-commerce, Custom Solutions, SAAS, and AI-Integration (OpenAI/ChatGPT)' },
      { hid: 'twitter:image:src', property: 'twitter:image:src', content: 'https://www.teksyo.com/teksyo-og-home.jpg' },
      // Author Tag (for page author):
      { name: 'author', content: 'Teksyo' }
  ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
        {
            src: "/js/gtm.js",
        },
        {
            src: "https://www.googletagmanager.com/gtag/js?id=G-WBG54NXJEY",
            async: true,
        },
        {
            src: "/js/ga.js",
        },
        {
            src: "/js/pixel.js",
        }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '~/assets/css/style.css', 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/aos.client.js', // only in client side
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // put any other module here, always declare the sitemap module at end of array
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    // options
    hostname: 'https://www.teksyo.com',
    filter ({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`
        return route
      })
    },
    exclude: [
      '/blog',
      '/reviews',
      '/service',
      '/contact-us',
      '/cost-calculator',
    ],
    routes: BLOG_URLS
    /*hostname: 'https://example.com',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
      '/page/1',
      '/page/2',
      {
        url: '/page/3',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z'
      }
    ]*/
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.(mp4|mov)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false
        }
      });
    }
  },

  // for error handling
  generate: { 
    fallback: true,
    routes: BLOG_URLS
  }
}