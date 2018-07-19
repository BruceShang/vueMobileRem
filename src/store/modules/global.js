const UPDATETITLE = 'UPDATETITLE'

const initState = {
  title: '',
}

const actions = {
  // 更换title
  updateTitle({ commit }, data) {
    commit('UPDATETITLE', data)
  },
}
const mutations = {
  [UPDATETITLE](state, data) {
    state.title = data
    global.document.title = data
  },
}
export default {
  namespaced: true,
  state: Object.assign({}, initState),
  mutations,
  actions,
}
