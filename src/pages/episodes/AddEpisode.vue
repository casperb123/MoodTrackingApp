<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-y-5">
    <div class="form-control">
      <label for="title" :class="{ error: !title.isValid }">
        <span>Hvordan har du det?</span>
        <span v-if="!title.isValid"> (Må ikke være tom)</span>
      </label>
      <input
        type="text"
        name="title"
        id="title"
        v-model.trim="title.val"
        placeholder="Skriv hvordan du har det"
        :class="{ error: !title.isValid }"
        @blur="clearValidity('title')"
      />
    </div>
    <div class="form-control">
      <rating-control
        v-model="rating.val"
        :class="{ error: !rating.isValid }"
        @update:modelValue="clearValidity('rating')"
      />
    </div>
    <div class="form-control">
      <label for="description" :class="{ error: !description.isValid }">
        <span>Beskrivelse</span>
        <span v-if="!description.isValid"> (Må ikke være tom)</span>
      </label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model.trim="description.val"
        placeholder="Skriv din beskrivelse"
        :class="{ error: !description.isValid }"
        @blur="clearValidity('description')"
      ></textarea>
    </div>
    <div class="form-control self-end flex gap-x-1">
      <base-button type="submit">Gem</base-button>
      <base-button flat link to="/episodes">Tilbage</base-button>
    </div>
  </form>
</template>

<script>
import EpisodeItem from "../../components/episodes/EpisodeItem.vue";
import RatingControl from "../../components/episodes/RatingControl.vue";

export default {
  components: {
    EpisodeItem,
    RatingControl,
  },
  data() {
    return {
      formIsValid: true,
      title: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      rating: {
        val: null,
        isValid: true,
      },
    };
  },
  methods: {
    clearValidity(input) {
      if (this[input].val !== "" && this[input].val !== null) {
        this[input].isValid = true;
      }
    },
    validateForm() {
      this.formIsValid = true;

      if (this.title.val === "") {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.rating.val === null) {
        this.rating.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) return;

      const episodeData = {
        title: this.title.val,
        description: this.description.val,
        rating: this.rating.val,
        date: new Date(),
      };

      this.$store.dispatch("episodes/addEpisode", episodeData);
      this.$router.replace("/episodes");
    },
    cancel() {
      this.$router.replace("/episodes");
    },
  },
};
</script>

<style scoped>
label {
  @apply block mb-2 font-semibold;
}

input,
textarea {
  @apply block w-full max-w-full border-2 p-2 outline-none rounded-md transition-all focus:border-green-500;
}

.error {
  @apply border-red-500;
}

label.error {
  @apply text-red-500;
}
</style>