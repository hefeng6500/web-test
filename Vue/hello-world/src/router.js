import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/diff',
      name: 'diff',
      component: () => import('./views/diff.vue')
    },
    {path: '/',
    name: 'highlight',
    component: () => import('./views/highlight.vue')
      
    }
  ]
})