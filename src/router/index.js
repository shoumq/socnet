import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth')) {
        next()
      } else {
        next({ name: 'login' })
      }
    }
  },

  {
    path: '/login/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth')) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },

  {
    path: '/reg/',
    name: 'reg',
    component: () => import('../views/RegView.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth')) {
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },

  {
    path: '/friends/',
    name: 'friends',
    component: () => import('../views/FriendsView.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth')) {
        next()
      } else {
        next({ name: 'login' })
      }
    }
  },

  {
    path: '/user/:id',
    name: 'userPage',
    component: () => import('../views/UserView.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth')) {
        next()
      } else {
        next({ name: 'login' })
      }
    }
  },

  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
