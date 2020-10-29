import { mount } from "@vue/test-utils";
import SearchResultsView from "@/views/SearchResultsView.vue";
import AppList from "@/components/AppList.vue";
import flushPromises from "flush-promises";

jest.mock('axios')

describe("SearchResultsView.vue", () => {  
  
  const queryString = "warband"
  let wrapper = mount(SearchResultsView, {
    propsData: { queryString }
  });

  it('child component AppList exists', () => {
    expect(wrapper.findComponent(AppList).exists()).toBe(true);
  });
  
});
