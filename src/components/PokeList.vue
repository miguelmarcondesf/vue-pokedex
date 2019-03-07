<template>
  <v-item-group>
    <input type="text" placeholder="search" v-model="search">

    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex v-for="(pokemon, index) in filteredPokemon" :key="index" xs12 sm6 md4>
          <v-item @click="goToPokemon(pokemon.name)">
            <Pokecard :name="pokemon.name"/>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
import Pokecard from './Pokecard'
import Vue from 'vue'

export default {
  data () {
    return {
      search: ''
    }
  },

  components: {
    Pokecard
  },

  props: {
    pokeList: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    filteredPokemon () {
      return this.pokeList.filter(pokemon => {
        return pokemon.name.match(this.search)
      })
    }
  },

  methods: {
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight

        if (bottomOfWindow) {
          let currentPage = this.$store.state.currentPage + 1

          const offset = (currentPage - 1) * 40
          this.$store.commit('writeCurrentPage', currentPage)

          const that = this

          Vue.prototype.$http
            .get(`pokemon?offset=${offset}&limit=40`)
            .then(function (res) {
              that.$store.commit('writePokeList', res.data.results)
            })
        }
      }
    }
  },

  mounted () {
    this.scroll()
  }
}
</script>

<style>
v-card {
  margin: 8px;
}
</style>
