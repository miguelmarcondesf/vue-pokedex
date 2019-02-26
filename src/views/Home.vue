<template>
  <div>
    <PokeList :pokeList="pokeList" />
  </div>
</template>

<script>
import PokeList from '@/components/PokeList'
import { mapGetters } from 'vuex'

  export default {
    components: {
      PokeList
    },

    computed: {
        ...mapGetters({
            pokeList: 'pokeList'
        })
    },

    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch('loadPokeList')
      })
    }
  }
</script>
