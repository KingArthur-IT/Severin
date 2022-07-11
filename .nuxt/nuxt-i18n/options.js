

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"rus","messages":{"rus":{"fotoshooting":"fotoshooting in tutta Italia","about":"обо мне","portfolio":"портфолио","description1":"Привет, меня зовут Галина, я живу и работаю фотографом в Тоскане, но\n                        и с большим удовольствием провожу фотосъемки по другим регионам\n                        Италии. Фотография- это не только моя работа, но и моя жизнь. Мне\n                        как-то подарили фотокамеру и тут случилась магия, с тех пор мы\n                        неразлучны.","description2":"Я поклонник живых фотографий, эмоций и жизни в кадре. Мои съёмки\n                        проходят в формате непренуждённой прогулки, где вы наслаждайтесь\n                        моментом, а я переношу ваши эмоции на пленку. У вас на всю жизнь\n                        останется уникальная память о вашей поездке."},"ita":{"fotoshooting":"fotoshooting in tutta Italia","about":"su di me","portfolio":"portafoglio","description1":"Ciao, mi chiamo Galina, vivo e lavoro come fotografa in Toscana, ma\n                        e con grande piacere trascorro la fotografia in altre regioni\n                        Italia. La fotografia non è solo il mio lavoro, ma anche la mia vita. per me\n                        in qualche modo ha dato una macchina fotografica e poi è successa la magia, da allora noi\n                        inseparabile.","description2":"Sono un fan delle foto dal vivo, delle emozioni e della vita nell'inquadratura. Il mio tiro\n                        si svolgono nel formato di una passeggiata informale, dove ti diverti\n                        momento, e trasferisco le tue emozioni nel film. Hai per tutta la vita\n                        ci sarà un ricordo unico del tuo viaggio."}}},
  vueI18nLoader: false,
  locales: ["rus","ita"],
  defaultLocale: "ita",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"rus"},{"code":"ita"}],
  localeCodes: ["rus","ita"],
  additionalMessages: [],
}

export const localeMessages = {}
