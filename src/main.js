import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueCookies from 'vue-cookies';
import './registerServiceWorker'

Vue.use(VueCookies);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

