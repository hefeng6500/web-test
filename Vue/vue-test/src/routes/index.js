import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/home',
    name: 'home',
    title: "首页",
    component: ()=> import('../components/HelloWorld.vue')
  }
]


const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

export default router
