import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import AppBase from "./AppBase.vue";
import router from "./router";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(AppBase)
}).$mount("#app");
