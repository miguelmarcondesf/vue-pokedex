<template>
  <v-toolbar dark color="red">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="toolbal-logo">
      <router-link to="/">PokéDex Vue</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .toolbal-logo {
    a  {
      color: white;
      text-decoration: none;
    }
  }
</style>
