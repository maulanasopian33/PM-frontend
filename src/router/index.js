import GlobalChatVue from '@/components/GlobalChat copy.vue'
import GlobalPage from '@/components/GlobalPages.vue'
import Workspace from '@/components/'
import loginVue from '@/components/login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GlobalPage
  },
  {
    path: '/:workspace',
    name: 'home',
    component: workspace
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
  base: process.env.BASE_URL,
  routes
})

export default router
