<template>
  <ul class="app-list">
    <li v-for="appID in appIDs" :key="appID">
      {{ appID }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppList extends Vue {
  @Prop() private appIDs: Array<number>;
}
</script>

<style scoped lang="scss">
</style>
