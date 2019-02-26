// import lazyPokemon from '@/data/pokemon.js'
import Vue from 'vue'

export default {
  state: {
    pokeList: []
  },

  mutations: {
    writePokeList (state, value) {
      state.pokeList = value
    }
  },

  actions: {
    loadPokeList (context) {
      Vue.prototype.$http('pokemon').then(resp => {
        const data = resp.data
        context.commit('writePokeList', data.results)
      })
    }
  },

  getters: {
    pokeList (state) {
      console.log(state.pokeList)
      return state.pokeList
    }
  }
}
