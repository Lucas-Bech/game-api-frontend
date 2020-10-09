<template>
  <router-link :to="routeToAppPage" class="app-thumbnail">
    <img :src="app.header_image" class="thumbnail-image" />
    <div>{{ app.name }}</div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Game extends Vue {
  @Prop() private app!: any;

  get routeToAppPage() {
    return `/app/${this.app?.steam_appid}`;
  }
}
</script>

<style scoped lang="scss">
@import "@/themes/dark.scss";

.app-thumbnail {
  color: $primary-color;
  background-color: $tertiary-color;
  width: auto;
  height: auto;
  padding: 1em 2em;
  margin: auto;

  cursor: pointer;
  text-decoration: none;

  &.thumbnail-image {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
}
</style>
