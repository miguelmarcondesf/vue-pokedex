<template>
  <v-item-group>
    <input type="text" placeholder="search" v-model="search">

    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex
          v-for="(pokemon, index) in filteredPokemon"
          :key="index"
          xs12
          sm6
          md4
        >
          <v-item @click="goToPokemon(pokemon.name)">
            <Pokecard :name="pokemon.name" />
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
</template>

<script>
import Pokecard from './Pokecard'

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
      console.log(this.search)

      return this.pokeList.filter((pokemon) => {
        return pokemon.name.match(this.search)
      })
    }
  }
}
</script>

<style>
  v-card {
    margin: 8px;
  }
</style>
