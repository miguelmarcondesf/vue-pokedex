<template>
  <v-pagination
    v-model="currentPage"
    :length="pages"
    :total-visible="7"
    @next="nextPage"
    @input="goToPage"
    @previus="previousPage"
  ></v-pagination>
</template>

<script>
export default {
    props: {
    count: Number
  },

  computed: {

    pages() {
      return Math.ceil(this.count / 20)
    },

    currentPage: {
      get () {
        return this.$store.state.currentPage
      },
      set (page) {
        this.$store.commit('writeCurrentPage', page)
      }
    }
  },

  methods: {
    nextPage() {
      this.$store.dispatch('loadPage', this.currentPage)
    },

    previousPage() {
      this.$store.dispatch('loadPage', this.currentPage - 1)
    },

    goToPage(pageNumber) {
      this.$store.dispatch('loadPage', pageNumber)
    }
  }
}
</script>

<style>

</style>
