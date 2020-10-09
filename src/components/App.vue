<template>
  <div id="app-infopage">
    <img :src="app.header_image" />

    <h1>{{ app.name }}</h1>

    <div id="subheader">
      <h4>
        Developer:
        {{ computedDeveloper }}
      </h4>
      <h4>
        Publisher:
        {{ computedPublisher }}
      </h4>
    </div>

    <h3>Review rating: {{ app.review_score }}/10</h3>

    <div id="main">
      <div id="dlc-list" v-if="app.type === 'game'">
        <h3 class="list-title">DLC</h3>
        <DLC :dlcId="dlcId" v-for="dlcId in app.dlc_ids" :key="dlcId" />
        <p v-if="app.dlc_ids.length == 0">No DLC</p>
      </div>

      <div id="category-list">
        <h3 class="list-title">Categories</h3>
        <span v-for="(category, index) in app.categories" :key="index">
          <span v-if="index != 0">, </span>
          <span>{{ category }}</span>
        </span>
      </div>

      <div id="genre-list">
        <h3 class="list-title">Genres</h3>
        <span v-for="(genre, index) in app.genres" :key="genre">
          <span v-if="index != 0">, </span>
          <span>{{ genre }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DLC from "@/components/DLC.vue";

@Component({
  components: {
    DLC
  }
})
export default class Game extends Vue {
  @Prop() private id!: number;

  private app: any = {};

  get computedDeveloper() {
    if (this.app?.developers?.[0])
      return this.app.developers[0];
    else
      return "Unknown";
  }

  get computedPublisher() {
    if (this.app?.publishers?.[0])
      return this.app.publishers[0];
    else
      return "Unknown";
  }

  created() {
    this.axios
      .get(
        `http://gameapi.ga:8080/api/gamedatabase/game/?id=${this.id}&dlc=true`
      )
      .then(response => (this.app = response.data));
  }
}
</script>

<style lang="scss" scoped>
#app-infopage {
  padding: 1.5em;
}

#subheader {
  display: flex;
  justify-content: space-evenly;
}

#main {
  display: grid;
  grid-template-areas:
    "genre category"
    "dlc   review";
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  justify-content: space-evenly;
  margin-top: 1em;
}

.list-title {
  font-size: 1.4em;
}

#genre-list {
  grid-area: "genre";
}

#category-list {
  grid-area: "category";
}

#dlc-list {
  grid-area: "dlc";
}

#review-list {
  grid-area: "review";
}
</style>
