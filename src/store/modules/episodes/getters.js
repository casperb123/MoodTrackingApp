export default {
  episodes(state) {
    return state.episodes;
  },
  hasEpisodes(state) {
    return state.episodes && state.episodes.length > 0;
  },
};
