<template>
  <form @submit.prevent="search">
    <input
      type="text"
      placeholder="Search for apps"
      v-model.trim="queryString"
    />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchField extends Vue {
  private queryString = "";

  search() {
    if (this.$router.currentRoute.params.queryString !== this.queryString) {
      this.$router.push(`/search/${this.queryString}/1`);
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/themes/dark.scss";

input {
  margin: 2em;
  padding: 0.5em;
  background-color: $secondary-color;
  color: $primary-color;
  border: 2px solid $primary-color;
  border-radius: 7px;
  outline: none;
}
</style>
