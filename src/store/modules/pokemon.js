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

  getters: {
    pokeList (state) {
      return state.pokeList
    }
  }
}
