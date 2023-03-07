import GlobalChatVue from '@/components/GlobalChat copy.vue'
import GlobalPage from '@/components/GlobalPages.vue'
import Workspace from '@/components/workspacePage.vue'
import loginVue from '@/components/login.vue'
import detailworkspace from '@/components/detailtaskpage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/login'
  },
  {
    path: '/dashboard/:workspace',
    name: 'dashboard by id',
    component: Workspace
  },
  {
    path: '/detail/:workspace',
    name: 'detail workspace',
    component: detailworkspace
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: GlobalPage
  },
  {
    path: '/login',
    name: 'login',
    component: loginVue
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component: GlobalChatVue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/',
  routes
})

export default router
