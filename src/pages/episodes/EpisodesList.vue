<template>
  <section class="flex flex-col">
    <ul v-if="hasEpisodes" class="flex flex-row flex-wrap gap-5 mb-5">
      <episode-item
        v-for="episode in episodes"
        :key="episode.id"
        :title="episode.title"
        :description="episode.description"
        :date="episode.date"
        :rating="episode.rating"
        class="flex-1"
      />
      <router-view />
    </ul>
    <h2 v-else>Du har endnu ikke oprettet en aktivitet</h2>
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

<style scoped>
h2 {
  @apply text-center text-xl mb-5;
}
</style>