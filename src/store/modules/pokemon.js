// import lazyPokemon from '@/data/pokemon.js'
export default {
  state: {
    pokeList: []
  },

  mutations: {
    writePokeList (state, value) {
      const oldPokeState = state.pokeList

      value.map((data) => {
        oldPokeState.push(data)
      })

      state.pokeList = oldPokeState
    }
  },

  getters: {
    pokeList (state) {
      return state.pokeList
    }
  }
}
