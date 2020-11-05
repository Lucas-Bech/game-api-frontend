<template>
  <div id="search-results">
    <div v-if="isLoading" id="load-state">
      <span>Loading...</span>
    </div>
    <div v-if="lastSearchWas404" id="404-state">
      <span>No matches. You may need to be more or less specific.</span>
    </div>
    <AppList :apps="apps" :currentPage="computedZeroBasedCurrentPage" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AppList from "@/components/AppList.vue";
import defaultHeaderImage from "@/media/images/default_header_image.png";

@Component({
  components: {
    AppList
  }
})
export default class SearchResultsView extends Vue {
  @Prop() private queryString!: string;
  @Prop() private currentPage!: number;

  private apps: Array<any> = [];
  private isLoading = false;
  private lastSearchWas404 = false;

  created() {
    this.$root.$on("setCurrentPage", this.setCurrentPage);
    this.isLoading = true;
    this.populateApps().then(() => (this.isLoading = false));
  }

  beforeDestroy() {
    this.$root.$off("setCurrentPage", this.setCurrentPage);
  }

  get computedZeroBasedCurrentPage() {
    return this.currentPage - 1;
  }

  setCurrentPage(newPageNumber: number) {
    this.$router.push(`/search/${this.queryString}/${newPageNumber}`);
  }

  async populateApps() {
    const response = await this.axios.get(
      `https://gameapi.gq/api/gamedatabase/games/?limit=500&like=${this.queryString}`
    );
    const data = response.data;

    this.lastSearchWas404 = data?.error404; // when query fails to match, error404 is defined

    if (!this.lastSearchWas404) {
      // load the data, but filter for developer and header_image.
      // If both are garbage, the entry is considered garbage.
      this.apps = data.filter((app: any) => {
        return app.developers.length != 0 && app.header_image;
      });

      // replace missing or broken header images with default header_image
      this.apps.forEach(async app => {
        // replace missing
        if (!app.header_image) {
          app.header_image = defaultHeaderImage;
          return;
        }

        // replace broken
        this.axios.head(app.header_image).catch(() => {
          app.header_image = defaultHeaderImage;
        });
      });
    }
  }
}
</script>
