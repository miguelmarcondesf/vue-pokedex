<template>
  <v-app>
    <Header />

    <v-content>
      <v-container>
        <Pokecard />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Pokecard from '@/components/Pokecard'

export default {
  name: 'App',
  components: {
    Header,
    Pokecard
  },
  data () {
    return {
      //
    }
  }
}
</script>
