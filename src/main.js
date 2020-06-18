import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css';

import VuePageTransition from 'vue-page-transition'
import VueTouch from 'vue-touch'
import Snackbar from './plugins/snackbar'
import i18n from "./i18n";

Vue.config.productionTip = true

Vue.use(VuePageTransition)
Vue.use(Snackbar)
Vue.use(VueTouch, {name: 'v-touch'});

Vue.prototype.$minTeamSize = 4
Vue.prototype.$maxTeamSize = 9


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
