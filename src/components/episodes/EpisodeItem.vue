<template>
  <li>
    <h1>{{ title }}</h1>
    <p class="date">{{ date }}</p>
    <p>{{ description }}</p>
    <base-emoji :emoji="emojiNumber" class="w-8 h-8 mt-4" />
  </li>
</template>

<script>
export default {
  props: {
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
  },
};
</script>

<style scoped>
li {
  @apply bg-white p-5 rounded mb-5;
}

h1 {
  @apply font-bold;
}

.date {
  @apply text-gray-400;
}
</style>