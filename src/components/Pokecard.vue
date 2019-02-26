<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex>
          <v-card color="grey" class="white--text">
            <v-layout row>
              <v-flex aling-self-end>
                <v-card-title primary-title>
                  <div>
                    <h1 class="mr-4"># {{ pokeId }}</h1>
                  </div>
                  <div>
                    <div class="headline text-capitalize">{{ pokeName }}</div>
                    <div>
                      <v-chip
                        v-for="(type, index) in pokeTypes"
                        :key="index"
                        color="primary"
                        text-color="white"
                      >{{type.type.name}}</v-chip>
                    </div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-img :src="pokeImage" height="125px" contain></v-img>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
  
  data () {
    return {
      pokeId: 0,
      pokeName: "",
      pokeTypes: [],
      pokeImage: ""
    }
  },

  methods: {
    getInfo() {
      this.$http.get(`pokemon/${this.name}`).then(res => {
        const data = res.data;
        this.pokeTypes = data.types;
        this.pokeImage = data.sprites.front_default;
        this.pokeId = data.id;
        this.pokeName = data.name
      });
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.getInfo()
    })
  }

};
</script>

<style>
</style>
