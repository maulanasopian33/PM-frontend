import GlobalChatVue from '@/components/GlobalChat.vue'
import GlobalPage from '@/components/GlobalPages.vue'
import Workspace from '@/components/workspacePage.vue'
import loginVue from '@/components/login.vue'
import detailworkspace from '@/components/detailtaskpage.vue'
import workspaceChat from '@/components/base/workspace-chat.vue'
import reportproject from '@/components/base/reportproject.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSimpleAlert from "vue-simple-alert"
import HomeViewVue from '@/views/AboutView.vue'
import '@/css/style.css'
import dashboardVue from '@/components/parsial/admin/dashboard.vue'
Vue.use(VueSimpleAlert);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/login'
  },
  
  {
    path: '/multi',
    name: 'multi',
    component : HomeViewVue
  },

  {
    path: '/dashboard/:workspace',
    name: 'dashboard by id',
    component: Workspace
  },
  {
    path: '/report/:workspace',
    name: 'Detail project per workspace',
    component: reportproject
  },
  {
    path: '/diskusi/:workspace',
    name: 'diskusi by workspace',
    component: workspaceChat
  },
  {
    path: '/detail/:workspace',
    name: 'detail workspace',
    component: detailworkspace,
    props: true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: GlobalPage,
    props: true
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
