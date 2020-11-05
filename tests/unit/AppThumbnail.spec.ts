import { mount, createLocalVue } from "@vue/test-utils";
import AppThumbnail from "@/components/AppThumbnail.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("AppThumbnail.vue", () => {
  const wrapper = mount(AppThumbnail, {
    localVue,
    router,
    propsData: {
      app: {
        steam_appid: 48700,
        name: "Mount & Blade: Warband",
        type: "game",
        required_age: 0,
        developers: ["TaleWorlds Entertainment"],
        publishers: ["TaleWorlds Entertainment"],
        release_date: { coming_soon: false, date: "2010-03-31T00:00:00" },
        genres: ["Action", "RPG"],
        categories: [
          "Single-player",
          "Multi-player",
          "Steam Achievements",
          "Steam Trading Cards",
          "Steam Workshop"
        ],
        header_image:
          "https://steamcdn-a.akamaihd.net/steam/apps/48700/header.jpg?t=1589227310",
        review_score: 9
      }
    }
  });

  it("renders image", () => {
    expect(wrapper.find("img").attributes("src")).toEqual(
      "https://steamcdn-a.akamaihd.net/steam/apps/48700/header.jpg?t=1589227310"
    );
  });

  it("renders title", () => {
    expect(wrapper.text()).toBe("Mount & Blade: Warband");
  });
});
