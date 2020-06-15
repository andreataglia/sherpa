import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VuePageTransition from 'vue-page-transition'
import VueTouch from 'vue-touch'
import Snackbar from './plugins/snackbar'

import './assets/tailwind.css';

Vue.config.productionTip = true

Vue.use(VuePageTransition)
Vue.use(Snackbar)
Vue.use(VueTouch, {name: 'v-touch'});

Vue.prototype.$minTeamSize = 4
Vue.prototype.$maxTeamSize = 9


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
