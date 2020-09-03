<template>
  <div class="app">
    <h1>{{ appID }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Game extends Vue {
  @Prop() private appID!: Number;
}
</script>