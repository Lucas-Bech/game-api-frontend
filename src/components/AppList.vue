<template>
  <div class="app-list">
    <AppThumbnail :app="app" v-for="app in apps" :key="app.steam_appid" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AppThumbnail from "@/components/AppThumbnail.vue";

@Component({
  components: {
    AppThumbnail
  }
})
export default class AppList extends Vue {
  @Prop() private apps!: Array<any>;
}
</script>

<style scoped lang="scss">
.app-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 500px));
  grid-gap: 2em;
  justify-content: space-evenly;
  margin: 2em;
}
</style>
