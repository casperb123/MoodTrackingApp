<template>
  <li>
    <slot>
      <article>
        <div>
          <h1>{{ title }}</h1>
          <p class="date">{{ dateFormated }}</p>
          <p>{{ description }}</p>
          <base-emoji
            :emoji="emojiNumber"
            class="w-8 h-8 mt-4 text-yellow-400"
          />
        </div>
        <base-button round @click="deleteEpisode">
          <svg class="w-10 h-10 transform rotate-45">
            <use xlink:href="#plusIcon" />
          </svg>
        </base-button>
      </article>
    </slot>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  computed: {
    emojiNumber() {
      return `#${this.rating}`;
    },
    dateFormated() {
      return moment(this.date).calendar();
    },
  },
  methods: {
    deleteEpisode() {
      this.$store.dispatch("episodes/deleteEpisode", {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
li {
  @apply bg-white p-5 rounded min-w-full md:min-w-max;
}

h1 {
  @apply font-semibold text-lg;
}

.date {
  @apply text-gray-400;
}

article {
  @apply flex justify-between;
}

article button {
  @apply place-self-start;
}
</style>