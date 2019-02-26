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
    padding: 6px 10px;
    font-weight: 800;

    &.badge- {

      &fire {
        background-color: orange;
      }

      &poison {
        background-color: purple;
        color: white;
      }

      &water {
        background-color: blue;
        color: white;
      }

      &grass {
        background-color: green;
        color: white;
      }
    }
  }
  


</style>
