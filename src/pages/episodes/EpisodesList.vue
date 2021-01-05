<template>
  <section>
    <ul v-if="hasEpisodes">
      <episode-item
        v-for="episode in episodes"
        :key="episode.id"
        :title="episode.title"
        :description="episode.description"
        :date="episode.date"
        :rating="episode.rating"
      />
    </ul>
  </section>
</template>

<script>
import EpisodeItem from "../../components/episodes/EpisodeItem.vue";

export default {
  components: {
    EpisodeItem,
  },
  computed: {
    episodes() {
      return this.$store.getters["episodes/episodes"];
    },
    hasEpisodes() {
      return this.$store.getters["episodes/hasEpisodes"];
    },
  },
  created() {
    this.loadEpisodes();
  },
  methods: {
    loadEpisodes() {
      this.$store.dispatch("episodes/loadEpisodes");
    },
  },
};
</script>