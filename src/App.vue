<template>
  <the-header />
  <div class="container mx-auto mt-12">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
