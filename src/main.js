import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VuePageTransition from 'vue-page-transition'

import './assets/tailwind.css';

Vue.config.productionTip = true

Vue.use(VuePageTransition)

Vue.prototype.$minTeamSize = 3
Vue.prototype.$maxTeamSize = 4


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
