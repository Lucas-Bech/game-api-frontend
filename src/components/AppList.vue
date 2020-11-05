<template>
  <div>
    <div class="app-list">
      <AppThumbnail
        :app="app"
        v-for="app in currentPageApps"
        :key="app.steam_appid"
      />
    </div>
    <div class="page-buttons">
      <button
        v-for="pageNumber in numberOfPages"
        :key="pageNumber"
        ref="pageButtons"
        @click="setCurrentPageEmit(pageNumber)"
        :class="{ active: currentPage == pageNumber - 1 }"
      >
        Page {{ pageNumber }}
      </button>
    </div>
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
  @Prop() private currentPage!: number;

  private entriesPerPage = 10;

  get numberOfPages(): number {
    return Math.ceil(this.apps.length / this.entriesPerPage);
  }

  get currentPageApps(): any {
    const pageOffset = this.entriesPerPage * this.currentPage;
    return this.apps.slice(pageOffset, pageOffset + this.entriesPerPage);
  }

  setCurrentPageEmit(newPageNumber: number): void {
    this.$root.$emit("setCurrentPage", newPageNumber);
    this.resetView();
  }

  resetView(): void {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  }
}
</script>

<style scoped lang="scss">
.app-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 500px));
  grid-gap: 2em 0;
  justify-content: space-evenly;
  margin: 2em;
  padding-bottom: 2em;
}
.page-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  grid-gap: 1em;
  justify-content: center;
  margin: 2em;
  padding-bottom: 2em;

  button {
    color: $primary-color;
    background-color: $tertiary-color;
    border: 2px solid $primary-color;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    outline: none;
    cursor: pointer;

    &.active {
      border: 2px solid red;
    }
  }
}
</style>
