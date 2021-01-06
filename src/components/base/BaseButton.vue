<template>
  <router-link v-if="link" :class="{ round: round, flat: flat }">
    <slot />
  </router-link>
  <button v-else :class="{ round: round, flat: flat }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    round: {
      type: Boolean,
      required: false,
      default: false,
    },
    flat: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
button,
a {
  @apply px-5 py-3 rounded-md bg-green-800 text-green-50 hover:bg-green-600 hover:text-white transition-colors;
}

.flat {
  @apply bg-transparent text-black;
}

.round {
  @apply rounded-full p-0;
}
</style>