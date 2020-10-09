<template>
  <div>
    <router-link :to="routeToDLCPage">
      {{ dlc.name }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DLC extends Vue {
  @Prop() private dlcId!: number;

  private dlc: any = {};

  get routeToDLCPage() {
    return `/app/${this.dlc.steam_appid}`;
  }

  get computedReleaseDate() {
    return this.dlc.release_date.coming_soon
      ? "Coming soon"
      : this.dlc.release_date.date;
  }

  created() {
    this.axios
      .get(`http://gameapi.ga:8080/api/gamedatabase/dlc/?id=${this.dlcId}`)
      .then(response => (this.dlc = response.data));
  }
}
</script>
