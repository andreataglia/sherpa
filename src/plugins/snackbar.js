import Snackbar from '@/components/Snackbar'

export default {
  install(Vue) {
    const CONSTRUCTOR = Vue.extend(Snackbar);
    let toastEl = new CONSTRUCTOR();

    function toast(msg, options = {}) {
      options.title = msg;
      if (!toastEl.$el) {
        let vm = toastEl.$mount();
        document.querySelector('body').appendChild(vm.$el);
      }
      toastEl.show(options);
    }
    
    Vue.prototype.$toast = toast; 

    // use as: $toast('errore', {body: 'errore 404', type: 'err'})
    // or simply: $toast('salvataggio corretto')
  },
};