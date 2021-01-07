<template>
  <section>
    <p v-if="!!error" class="error">{{ error }}</p>
    <div v-else>
      <base-spinner v-if="isLoading" />
      <div v-else class="flex flex-col">
        <div v-if="hasEpisodes">
          <ul class="flex flex-row flex-wrap gap-5 mb-5">
            <episode-item
              v-for="episode in episodes"
              :key="episode.id"
              :id="episode.id"
              :title="episode.title"
              :description="episode.description"
              :date="episode.date"
              :rating="episode.rating"
              class="flex-1"
            />
          </ul>
          <router-view />
        </div>
        <h2 v-else>Du har endnu ikke oprettet en aktivitet</h2>
        <the-add-button class="self-end" :to="addLink" />
      </div>
    </div>
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
  data() {
    return {
      isLoading: false,
      error: null,
    };
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
    async loadEpisodes() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("episodes/loadEpisodes");
      } catch (error) {
        this.error = error.message || "Noget gik galt!";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
ul {
  @apply w-full relative;
}

h2,
.error {
  @apply text-center text-xl md:text-2xl font-semibold mb-5;
}

.error {
  @apply text-red-500;
}
</style>