import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/search/"
  },
  {
    path: "/search/:queryString/:currentPage",
    props: true, // define props on component for this directive to work
    component: () => import("@/views/SearchResultsView.vue") // lazy load
  },
  {
    path: "/app/:id",
    props: true, // define props on component for this directive to work
    component: () => import("@/views/AppView.vue") // lazy load
  }
];

const router = new VueRouter({
  routes
});

export default router;
