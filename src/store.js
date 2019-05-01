import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: []
  },
  mutations: {
    foods(state, foods) {
      state.foods = foods
    }
  },
  actions: {
    foods({ commit }, foods) {
      commit('foods', foods)
    },
  },
  getters: {
    foods: ({ foods }) => foods
  }
})
