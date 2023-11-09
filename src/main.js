import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueCookies from 'vue-cookies';
import './registerServiceWorker'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import VueJsModal from 'vue-js-modal'
import VueLoading from 'vuejs-loading-plugin'
import VueEasyLightbox from 'vue-easy-lightbox'
import './plugin/socket.js';

Vue.use(VueEasyLightbox)
Vue.use(VueLoading)
Vue.use(VueJsModal)
Vue.use(VueCookies);
Vue.config.productionTip = false
window.Pusher = Pusher;
window.Echo = new Echo({
  broadcaster: 'pusher',
  cluster :  'ap1',
  broadcaster: 'pusher',
  key: '94e6a87800b6adf547b1',
  cluster: 'ap1',
  forceTLS: true,
  // wsHost: 'api.pm.antmedia.id',
  // wsPort: 6001,
  // wssPort: 6001,
  // scheme: 'http', // Menggunakan skema HTTP
  // key: '94e6a87800b6adf547b11', //Add your pusher key here
  // forceTLS: false,
  // encrypted: false, // Menonaktifkan enkripsi
  disableStats: true,
});
Vue.prototype.$echo = window.Echo;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

