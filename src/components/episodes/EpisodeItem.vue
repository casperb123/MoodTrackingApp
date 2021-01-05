<template>
  <li>
    <h1>{{ title }}</h1>
    <p class="date">{{ date }}</p>
    <p>{{ description }}</p>
    <p>Rating: {{ rating }}</p>
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