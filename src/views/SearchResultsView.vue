<template>
  <div id="search-results">
    <AppList :apps="apps" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AppList from "@/components/AppList.vue";

@Component({
  components: {
    AppList
  }
})
export default class SearchResultsView extends Vue {
  @Prop() private queryString!: string;

  private apps: Array<any> = [];

  created() {
    // request apps with names like queryString, filter those with
    // unavailable header images as they are assumed unlisted from the store page
    this.axios
      .get(
        `http://gameapi.ga:8080/api/gamedatabase/games/?like=${this.queryString}`
      )
      .then(
        (response: any) =>
          (this.apps = response.data.filter((app: any) => app.header_image))
      );
  }
}
</script>
