import { createRouter, createWebHistory } from "vue-router";

import EpisodesList from "./pages/episodes/EpisodesList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/episodes" },
    { path: "/episodes", component: EpisodesList },
    { path: "/add", component: null },
    { path: "/.notFound(.*)", component: null },
  ],
});

export default router;
