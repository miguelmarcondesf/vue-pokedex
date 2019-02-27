<template>
  <v-layout column>
    <v-flex>
      <h1>< Anterior > Próximo</h1>
    </v-flex>

    <v-divider />

    <v-flex class="pokemon-id">
      <h1 class="text-capitalize">{{ pokeName }} </h1>
      <span>  nº {{ pokeId }}</span>
    </v-flex>

    <v-flex align-self-center>
      <v-img height="150px" width="250px" contain :src="pokeImage ? pokeImage : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' " alt="Pokemon" ></v-img>
    </v-flex>

    <v-flex class="flex-wrapper mt-2">
      <div>
        <Stats :pokeStats="pokeStats" />
      </div>

      <div> 
        <Stats />
      </div>
    </v-flex>


    <EvolutionTimeline />
  </v-layout>

</template>

<script>
import EvolutionTimeline from '@/components/Pokemon/EvolutionTimeline'
import Stats from '@/components/Pokemon/Stats'

export default {
  data() {
    return {
      pokeId: 0,
      pokeName: "",
      pokeTypes: [],
      pokeImage: "",
      pokeStats: []
    }
  },

  components: {
    EvolutionTimeline,
    Stats
  },

  methods: {
    getInfo() {
      const name = this.$route.params.name
      const self = this
      this.$http.get(`pokemon/${name}`).then(res => {
        const data = res.data;
        self.pokeTypes = data.types;
        self.pokeImage = data.sprites.front_default;
        self.pokeId = data.id;
        self.pokeName = name
        self.pokeStats = data.stats
      });
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.getInfo();
    });
  }
}
</script>

<style lang="scss" scoped>
  .pokemon-id {
    display: flex;
    width: 80%;
    margin: 16px auto;
    justify-content: center;
    align-items: flex-end;

    h1 {
      display: flex;
      align-self: center;
      margin-right: 8px;
      font-weight: 800;
    }

    span {
      display: flex;
      font-size: 26px;
      color: #616161;
    }
  }

  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
