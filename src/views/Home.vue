<template>
  <div class="home">
    <AppList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppList from "@/components/AppList.vue";

@Component({
  components: {
    AppList
  }
})
export default class Home extends Vue {}
</script>
