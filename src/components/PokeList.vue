<template>
  <v-item-group>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex
          v-for="(pokemon, index) in pokeList"
          :key="index"
          xs12
          sm6
          md4
        >
          <v-item>
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
  }
}
</script>

<style>
  v-card {
    margin: 8px;
  }
</style>
