<template>
  <App :id="id" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import App from "@/components/App.vue";

@Component({
  components: {
    App
  }
})
export default class AppView extends Vue {
  @Prop() private id!: number;
}
</script>
