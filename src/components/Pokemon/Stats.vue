<template>
  <v-card
    color="white"
    dark
    width="400"
    height="350"
    class="mx-2 mt-4 poke-stats"
  >
    <v-card-title>
      <span class="title font-weight-bold mx-auto">Stats</span>
    </v-card-title>

    <v-card-text v-for="(stats, index) in pokeStats" :key="index" class="headline font-weight-bold">
      <div class="flex-wrapper">
        <span>{{ stats.stat.name }}</span>
        <span>{{ stats.base_stat }}</span>
      </div>
      <v-progress-linear
      height="5"
      :color="returnProgressStatsColor(stats)"
      :value="`${stats.base_stat}`"
    ></v-progress-linear>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  data () {
    return {
      statColor: 'red'
    }
  },

  props: {
    pokeStats: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    returnProgressStatsColor (stat) {
      console.log(stat.stat.name)
      if (stat.stat.name === 'speed') {
        return 'pink'
      } else if (stat.stat.name === 'special-defense') {
        return 'green'
      } else if (stat.stat.name === 'special-attack') {
        return 'blue'
      } else if (stat.stat.name === 'defense') {
        return 'yellow'
      } else if (stat.stat.name === 'attack') {
        return 'orange'
      } else {
        return 'red'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .poke-stats {
    .v-card__title {
      padding: 8px;
    }

    .headline {
      line-height: 0;
      padding: 4px 16px;
    }

    span {
      font-size: 12px;
      text-align: center;
      text-transform: capitalize;
      color: black;
    }

    .v-progress-linear {
      margin: 0;
    }
  }

  .flex-wrapper {
    display: flex;
  justify-content: space-between;
  }
</style>
