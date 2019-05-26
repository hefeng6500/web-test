import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/home',
    name: 'home',
    title: "首页",
    index: '1',
    component: Home
  }
]

export const asyncRoutes = [
  {
    path: '/sysManage',
    name: 'sysManage',
    title: "系统管理",
    index: '2',
    children: [
      { path: 'userManage', name: 'userManage', title: "用户管理", index: '1', component: () => import('../views/sysManage/userManage.vue') },
      {
        path: 'roleManage', name: 'roleManage',
        title: '角色管理',
        children: [
          { path: 'inRole', name: 'inRole', title: "内部角色", index: '1', component: () => import('../views/sysManage/inRole.vue') },
          { path: 'outRole', name: 'outRole', title: "外部角色", index: '2', component: () => import('../views/sysManage/outRole.vue') }
        ]
      }
    ]
  },
  {
    path: '/orderManage',
    name: 'orderManage',
    title: "订单管理",
    index: '3',
    component: () => import('../views/orderManage.vue')
  },
  {
    path: '/resourceManage',
    name: 'resourceManage',
    title: "资源管理",
    index: '4',
    component: () => import('../views/resourceManage.vue')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

export default router
