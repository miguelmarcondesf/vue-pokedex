<template>
  <div class="home">
    <div class="text-xs-center">

      <RegionFilter />
    </div>

    <PokeList :pokeList="pokeList" />

  </div>
</template>

<script>
import PokeList from '@/components/PokeList'
import RegionFilter from '@/components/RegionFilter'
import { mapGetters } from 'vuex'

  export default {

    components: {
      PokeList,
      RegionFilter
    },

    computed: {
      ...mapGetters({
          pokeList: 'pokeList'
      }),

      count: function () {
        return this.$store.state.count
      },
      currentPage: function () {
        return this.$store.state.currentPage
      }
    },

    mounted() {
      this.$nextTick(() => {
        if (this.$route.query.page) {
          this.$store.dispatch('loadPage', this.$route.query.page)
        } else {
          this.$store.dispatch('loadPage', 1)
        }
      })
    }
  }
</script>
