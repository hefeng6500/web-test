const state = {
  sidebar: true
}

const mutations = {
  CHANGE_SIDEBAR_STATE: (state) => {
    state.sidebar = !state.sidebar
  }
}

const actions = {
  changeSidebar: ({commit}) => {
    commit('CHANGE_SIDEBAR_STATE')
  }
}

export default {
  state,
  mutations,
  actions
}