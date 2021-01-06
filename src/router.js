import { createRouter, createWebHistory } from "vue-router";

import EpisodesList from "./pages/episodes/EpisodesList.vue";
import AddEpisode from "./pages/episodes/AddEpisode.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/episodes" },
    { path: "/episodes", component: EpisodesList },
    { path: "/add", component: AddEpisode },
    { path: "/.notFound(.*)", component: null },
  ],
});

export default router;
