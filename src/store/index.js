import { createStore } from "vuex";

import episodesModule from "./modules/episodes/index.js";

const store = createStore({
  modules: {
    episodes: episodesModule,
  },
});

export default store;
