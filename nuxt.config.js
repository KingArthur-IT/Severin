export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'severin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        rel: 'stylesheet'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css'
  ],

  styleResources: { 
    scss: [
      '~/assets/scss/styles.scss'
  ],
},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources', '@nuxtjs/i18n', '@nuxt/image'
  ],

  i18n: {
    locales: ['rus', 'ita'],
    defaultLocale: 'ita',
    vueI18n: {
      fallbackLocale: 'rus',
      messages: {
        rus: {
          fotoshooting: 'fotoshooting in tutta Italia',
          about: 'обо мне',
          portfolio: 'портфолио',
          description1: `Привет, меня зовут Галина, я живу и работаю фотографом в Тоскане, но
                        и с большим удовольствием провожу фотосъемки по другим регионам
                        Италии. Фотография- это не только моя работа, но и моя жизнь. Мне
                        как-то подарили фотокамеру и тут случилась магия, с тех пор мы
                        неразлучны.`,
          description2: `Я поклонник живых фотографий, эмоций и жизни в кадре. Мои съёмки
                        проходят в формате непренуждённой прогулки, где вы наслаждайтесь
                        моментом, а я переношу ваши эмоции на пленку. У вас на всю жизнь
                        останется уникальная память о вашей поездке.`
        },
        ita: {
          fotoshooting: 'fotoshooting in tutta Italia',
          about: 'su di me',
          portfolio: 'portafoglio',
          description1: `Ciao, mi chiamo Galina, vivo e lavoro come fotografa in Toscana, ma
                        e con grande piacere trascorro la fotografia in altre regioni
                        Italia. La fotografia non è solo il mio lavoro, ma anche la mia vita. per me
                        in qualche modo ha dato una macchina fotografica e poi è successa la magia, da allora noi
                        inseparabile.`,
          description2: `Sono un fan delle foto dal vivo, delle emozioni e della vita nell'inquadratura. Il mio tiro
                        si svolgono nel formato di una passeggiata informale, dove ti diverti
                        momento, e trasferisco le tue emozioni nel film. Hai per tutta la vita
                        ci sarà un ricordo unico del tuo viaggio.`
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
