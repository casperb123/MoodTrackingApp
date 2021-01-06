<template>
  <li>
    <slot>
      <h1>{{ title }}</h1>
      <p class="date">{{ dateFormated }}</p>
      <p>{{ description }}</p>
      <base-emoji :emoji="emojiNumber" class="w-8 h-8 mt-4 text-yellow-400" />
    </slot>
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
    dateFormated() {
      return moment(this.date).calendar();
    },
  },
};
</script>

<style scoped>
li {
  @apply bg-white p-5 rounded min-w-full md:min-w-max;
}

h1 {
  @apply font-bold;
}

.date {
  @apply text-gray-400;
}
</style>