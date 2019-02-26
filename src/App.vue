<template>
  <v-app>
    <Header />

    <v-content>
      <router-view/>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Home from '@/views/Home'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
