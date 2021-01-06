<template>
  <base-button link round>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  </base-button>
</template>

<style scoped>
/* a {
  @apply rounded-full h-16 w-16 flex items-center justify-center bg-green-800 text-green-50 hover:bg-green-600 transition-colors;
} */

a {
  @apply h-16 w-16 flex items-center justify-center;
}

svg {
  @apply w-full;
}
</style>