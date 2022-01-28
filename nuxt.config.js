export default {
    target: 'static',

    head: {
        title: 'Nirbaan Express',
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
            content: ''
        },
        {
            name: 'keywords',
            content: 'Courier Service, Nirbaan Express'
        },
        {
            name: 'format-detection',
            content: 'telephone=no'
        },
        {
            name: 'author',
            content: 'Team Nirbaan Express'
        },
        {
            property: 'og:title',
            content: 'Nirbaan Express'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:description',
            content: 'Nirbaan Express'
        },
        {
            property: 'og:image',
            content: 'https://nirbaanexpress.com/site-thumbnail.jpg'
        },
        {
            property: 'og:url',
            content: 'https://nirbaanexpress.com'
        },
        {
            property: 'twitter:title',
            content: 'Nirbaan Express'
        },
        {
            property: 'twitter:creator',
            content: 'Team Nirbaan Express'
        },
        {
            property: 'twitter:description',
            content: ''
        },
        {
            property: 'twitter:image',
            content: 'https://nirbaanexpress.com/site-thumbnail.jpg'
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' }],
        script: [
          
            {
                src: "https://cdn.tailwindcss.com"
            },
            {
                src:"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"

            }
        ],
    },

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'custom',
                path: '*',
                component: resolve(__dirname, 'pages/404.vue')
            })
        },
        middleware: ['auth']
    },


    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/v-select.js',
        '~/plugins/js-vue-pagination.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/auth-next'
    ],

    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://phplaravel-670314-2397630.cloudwaysapps.com',
        // baseURL:'http://localhost:8000',
        credentials: true,
        
    },

      auth: {
        strategies: {
            'laravelSanctum': {
                provider: 'laravel/sanctum',
                url: 'https://phplaravel-670314-2397630.cloudwaysapps.com',
                // url:'http://localhost:8000',
                endpoints: {
                    login: {
                        url: '/api/login'
                    },
                    logout: {
                        url: '/api/logout'
                    },
                    user: {
                        url: '/api/user'
                    }
                }
            },
        },
        redirect: {
            home: '/dashboard',
            login: '/login',
            logout: '/login',

        }
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    
    

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}