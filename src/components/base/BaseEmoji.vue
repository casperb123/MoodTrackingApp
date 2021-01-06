<template>
  <svg>
    <use :xlink:href="emoji" />
  </svg>
</template>

<script>
export default {
  emits: ["selected"],
  props: {
    emoji: {
      type: String,
      required: true,
    },
  },
};
</script>