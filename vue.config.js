module.exports = {
  pwa: {
    name: 'Welcome To Sicily',
    themeColor: '#ef5350',
    appleMobileWebAppCapable: 'yes',
    workboxOptions: {
      skipWaiting: true,
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'it',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
