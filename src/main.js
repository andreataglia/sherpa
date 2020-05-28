import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition'


Vue.config.productionTip = true

Vue.use(VuePageTransition)

Vue.mixin({
  methods: {
    getLazySrc(){
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8HxxQDwAF3gITvWeQQwAAAABJRU5ErkJggg==";
    }
  }
})

import './assets/tailwind.css';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
