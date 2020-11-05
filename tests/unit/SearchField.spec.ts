import { mount, createLocalVue } from "@vue/test-utils";
import SearchField from "@/components/SearchField.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("SearchField.vue", () => {
  const wrapper = mount(SearchField, {
    localVue,
    router,
    data() {
      return {
        queryString: "warband"
      };
    }
  });

  it("navigates to correct url", () => {
    (wrapper.vm as any).search();
    expect(wrapper.vm.$route.path).toBe("/search/warband/1");
  });
});
