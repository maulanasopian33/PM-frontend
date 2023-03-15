import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueCookies from 'vue-cookies';
import './registerServiceWorker'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

Vue.use(VueCookies);
Vue.config.productionTip = false

window.Pusher = Pusher;
window.Echo = new Echo({
  broadcaster: 'pusher',
  cluster :  'ap1',
  key: '94e6a87800b6adf547b1' //Add your pusher key here
});
Vue.prototype.$echo = window.Echo;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

