import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/episodes" },
    { path: "/episodes", component: null },
    { path: "/add", component: null },
    { path: "/.notFound(.*)", component: null },
  ],
});

export default router;
