<template>
  <svg class="text-yellow-400" :class="{ clickable: clickable }">
    <use :xlink:href="emoji" />
  </svg>
</template>

<script>
export default {
  props: {
    emoji: {
      type: String,
      required: true,
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.emoji {
  @apply text-yellow-400;
}

.clickable {
  @apply hover:text-yellow-500 transition-colors cursor-pointer;
}
</style>