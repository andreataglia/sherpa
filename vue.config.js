const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    themeColor: '#ef5350'  
  },
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin({
        progressiveImages: true
      })
    ],
  },
}