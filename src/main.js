import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition'
// import vuetwemoji from 'vue-twemoji'


Vue.config.productionTip = false
Vue.use(VuePageTransition)
// Vue.use(vuetwemoji, {
//   extension: '.svg', //.svg, .png
//   size: '16x16'
// })
 
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
