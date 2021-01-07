<template>
  <ul class="flex justify-center gap-x-4 rounded-md">
    <li :class="{ active: activeOption === 1 }">
      <button type="button" @click="activate(1)">
        <base-emoji emoji="#1" class="w-12 h-12" />
      </button>
    </li>
    <li :class="{ active: activeOption === 2 }">
      <button type="button" @click="activate(2)">
        <base-emoji emoji="#2" class="w-12 h-12" />
      </button>
    </li>
    <li :class="{ active: activeOption === 3 }">
      <button type="button" @click="activate(3)">
        <base-emoji emoji="#3" class="w-12 h-12" />
      </button>
    </li>
    <li :class="{ active: activeOption === 4 }">
      <button type="button" @click="activate(4)">
        <base-emoji emoji="#4" class="w-12 h-12" />
      </button>
    </li>
    <li :class="{ active: activeOption === 5 }">
      <button type="button" @click="activate(5)">
        <base-emoji emoji="#5" class="w-12 h-12" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      activeOption: this.modelValue,
    };
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
button {
  @apply text-gray-400 hover:text-yellow-500 focus:text-yellow-500 transition-colors outline-none;
}

.active button {
  @apply text-yellow-400;
}

.error {
  @apply border-2 p-1;
}
</style>