<template>
  <v-footer
  class="mt-4"
  dark
  height="auto"
>
  <v-card
    class="flex"
    flat
    tile
  >
    <v-card-title class="red">
      <strong class="subheading">Some epic phrase!</strong>

      <v-spacer></v-spacer>

    </v-card-title>

    <v-card-actions class="red darken-4 justify-center">
      &copy;{{ currentYear }} — <strong>Pokédex Vue.js</strong>
    </v-card-actions>
  </v-card>
</v-footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: 2018
    }
  },

  methods: {
    updateFooterDate() {
      const updateYear = new Date().getFullYear()
      this.currentYear = updateYear
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.updateFooterDate()
    })
  }
}
</script>

<style>

</style>
