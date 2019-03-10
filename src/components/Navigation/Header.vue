<template>
  <v-toolbar dark color="red">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="toolbal-logo">
      <router-link to="/">Pokédex Vue</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

      <!-- <v-text-field
        class="search-input"
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field> -->

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

  .search-input {
  }
</style>
