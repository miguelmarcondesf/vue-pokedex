<template>
  <v-app>
    <Header />

    <v-content>
      <v-container>
        <Home />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Home from '@/views/Home'

export default {
  name: 'App',
  components: {
    Header,
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
