<template>
  <v-card
    color="white"
    dark
    width="400"
    height="350"
    class="mx-2 mt-4 poke-infos"
  >

    <v-card-title>
      <span class="title font-weight-bold mx-auto black--text">Types</span>
    </v-card-title>

    <div class="flex-wrapper">
      <v-card-text v-for="(types, index) in pokeTypes" :key="index" class="headline font-weight-bold">
        <span
          text-color="white"
          color="none"
          :class="`badge badge-${types.type.name}`"
        >{{types.type.name}}</span>

      </v-card-text>
    </div>

    <hr>

    <div class="flex-wrapper">
      <v-card-title>
        <span class="title font-weight-bold mx-auto black--text">Width:</span>
      </v-card-title>

      <v-card-title>
        <span class="title font-weight-bold mx-auto black--text">Height:</span>
      </v-card-title>
    </div>

  </v-card>
</template>

<script>
export default {
  props: {
    pokeTypes: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .poke-infos {
    .v-card__title {
      padding: 8px;
    }

    .headline {
      line-height: 0;
      padding: 4px 16px;
    }

    .v-progress-linear {
      margin: 0;
    }

    .v-card__text {
      text-align: center;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .badge {
    font-size: 16px;
    margin-top: 4px;
    margin-right: 8px;
    font-family: sans-serif;
    text-transform: uppercase;
    padding: 2px 16px;
    font-weight: 800;
    color: white;
    border-radius: 20px;

    &.badge- {

      &normal {
        background-color: #A8A878;
        border: 1px solid #6D6D4E;
      }

      &fire {
        background-color: #F08030;
        border: 1px solid #9C531F;
      }

      &fighting {
        background-color: #C03028;
        border: 1px solid #7D1F1A;
      }

      &water {
        background-color: #6890F0;
        border: 1px solid #445E9C
      }

      &flying {
        background-color: #A890F0;
        border: 1px solid #6D5E9C;
      }

      &grass {
        background-color: #78C850;
        border: 1px solid #4E8234;
      }

      &poison {
        background-color: #A040A0;
        border: 1px solid #682A68;
      }

      &electric {
        background-color: #F8D030;
        border: 1px solid #A1871F
      }

      &ground {
        background-color: #E0C068;
        border: 1px solid #927D44;
      }

      &psychic {
        background-color: #F85888;
        border: 1px solid #A13959;
      }

      &rock {
        background-color: #B8A038;
        border: 1px solid #786824;
      }

      &ice {
        background-color: #98D8D8;
        border: 1px solid #638D8D;
      }

      &bug {
        background-color: #A8B820;
        border: 1px solid #6D7815;
      }

      &dragon {
        background-color: #7038F8;
        border: 1px solid #4924A1;
      }

      &ghost {
        background-color: #705898;
        border: 1px solid #493963;
      }

      &dark {
        background-color: #705848;
        border: 1px solid #49392F;
      }

      &steel {
        background-color: #B8B8D0;
        border: 1px solid #787887;
      }

      &fairy {
        background-color: #EE99AC;
        border: 1px solid #9B6470;
      }
    }
  }

  hr {
    margin: 16px;
    opacity: .5;
  }
</style>
