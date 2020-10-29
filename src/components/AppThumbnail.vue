<template>
  <router-link :to="routeToAppPage" class="app-thumbnail">
    <img :src="app.header_image" class="thumbnail-image" />
    <span class="app-name">{{ app.name }}</span>
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
.app-thumbnail {
  color: $primary-color;
  background-color: $secondary-color;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;

  cursor: pointer;
  text-decoration: none;

  .thumbnail-image {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .app-name {
    display: block;
  }
}
</style>
