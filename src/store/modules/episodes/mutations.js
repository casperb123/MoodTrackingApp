export default {
  addEpisode(state, payload) {
    state.episodes.push(payload);
  },
  deleteEpisode(state, payload) {
    const index = state.episodes.findIndex(
      (episode) => episode.id === payload.id
    );
    state.episodes.splice(index, 1);
  },
  setEpisodes(state, payload) {
    state.episodes = payload;
  },
};
