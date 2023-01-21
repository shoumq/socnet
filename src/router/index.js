import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/IndexView.vue')
  },

  {
    path: '/profile/',
    component: () => import('../views/ProfileView.vue')
  },

  {
    path: '/friends/',
    component: () => import('../views/FriendsView.vue')
  },

  {
    path: '/user/:id',
    component: () => import('../views/UserView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
