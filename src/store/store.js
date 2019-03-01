import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from './modules/pokemon'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentPage: 1,
    maxPokemon: 0,
    count: 0
  },
  mutations: {
    writeCurrentPage (state, page) {
      state.currentPage = parseInt(page)
    },

    updateCount: function (state, value) {
      state.count = parseInt(value)
    }
  },
  actions: {
    loadPage (context, page) {
      const offset = (page - 1) * 40
      context.commit('writeCurrentPage', page)
      Vue.prototype.$http.get(`pokemon?offset=${offset}&limit=40`).then(function (res) {
        context.commit('writePokeList', res.data.results)
        context.commit('updateCount', res.data.count)
      })
      router.push({
        path: '/',
        query: {
          page: page
        }
      })
    }
  },

  modules: {
    pokemon
  }
})
