import Vue from 'vue'
import Vuex from 'vuex'
import { asyncRoutes, constantRoutes } from './routes/index.js'

Vue.use(Vuex)

export function filterAsyncRoutes(routes, roles) {
  const res = []
  roles.forEach(route => {
    routes.filter(v => v.title === route.title&&res.push(v))
  })

  return res
}

export default new Vuex.Store({
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
})
