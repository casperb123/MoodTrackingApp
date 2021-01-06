<template>
  <section class="flex flex-col">
    <ul v-if="hasEpisodes">
      <episode-item
        v-for="episode in episodes"
        :key="episode.id"
        :title="episode.title"
        :description="episode.description"
        :date="episode.date"
        :rating="episode.rating"
      />
      <router-view />
    </ul>
    <the-add-button class="self-end" :to="addLink" />
  </section>
</template>

<script>
import EpisodeItem from "../../components/episodes/EpisodeItem.vue";
import TheAddButton from "../../components/layout/TheAddButton.vue";

export default {
  components: {
    EpisodeItem,
    TheAddButton,
  },
  computed: {
    episodes() {
      return this.$store.getters["episodes/episodes"];
    },
    hasEpisodes() {
      return this.$store.getters["episodes/hasEpisodes"];
    },
    addLink() {
      return "/add";
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