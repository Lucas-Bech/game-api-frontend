<template>
  <div id="app">
    <SearchField />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchField from "@/components/SearchField.vue";

@Component({
  components: {
    SearchField
  }
})
export default class AppBase extends Vue {}
</script>

<style lang="scss">
@import "@/themes/dark.scss";

html,
body,
#app {
  width: 100%;
  height: 100%;

  color: $primary-color;
  background-color: $secondary-color;
  width: inherit;
  height: inherit;
  margin: 0;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app {
  margin: auto;
}
</style>
