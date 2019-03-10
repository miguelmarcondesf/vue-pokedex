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
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
