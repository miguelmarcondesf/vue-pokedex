<template>
  <v-card color="white" class="black--text mt-2" max-height="165px">
    <v-layout row>
      <v-flex aling-self-end>
        <h4 class="ml-2"># {{ pokeId }}</h4>
        <v-card-title>
          <div>
            <div class="headline text-capitalize">{{ pokeName }}</div>
            <v-flex>
              <span
                v-for="(type, index) in pokeTypes"
                :key="index"
                text-color="white"
                color="none"
                :class="`badge badge-${type.type.name}`"
              >{{type.type.name}}</span>
            </v-flex>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex sm4 align-self-start>
        <v-img :src="pokeImage ? pokeImage : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' " alt="Pokemon" contain></v-img>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    id: 0,
    name: "",
    types: [],
    image: ""
  },

  data() {
    return {
      pokeId: 0,
      pokeName: "",
      pokeTypes: [],
      pokeImage: ""
    };
  },

  methods: {
    getInfo() {
      const self = this
      this.$http.get(`pokemon/${this.name}`).then(res => {
        const data = res.data;
        self.pokeTypes = data.types;
        self.pokeImage = data.sprites.front_default;
        self.pokeId = data.id;
        self.pokeName = data.name;
      });
    }
  },

  watch: {
    name: function (val, oldVal) {
      const self = this
      if (val !== oldVal) {
        self.name = val
        self.getInfo()
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.getInfo();
    });
  }
};
</script>

<style lang="scss" scoped>

  .badge {
    font-size: 10px;
    margin-top: 4px;
    margin-right: 8px;
    font-family: sans-serif;
    text-transform: uppercase;
    padding: 2px 8px;
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
  


</style>
