<template>
  <v-timeline class="mt-4">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <span
        slot="opposite"
        :class="`headline font-weight-bold ${year.color}--text`"
        v-text="year.year"
      ></span>
      <div class="py-3">
        <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">Lorem ipsum</h2>
        <div>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'EvolutionTimeline',
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
    ]
  }),

  props: {
    pokeName: {
      type: String,
      default: 'Ditto'
    }
  },

  methods: {
    async searchEvolutionChain () {
      const evolutionChain = await Vue.prototype.$http.get(`pokemon-species/${this.pokeName}`)

      console.log(evolutionChain.data)
    }
  },

  mounted () {
    this.searchEvolutionChain()
  }
}
</script>

<style>

</style>
