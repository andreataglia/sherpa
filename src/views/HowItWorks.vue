<template>
  <div class="h-full w-full">
    <div
      class="max-w-md mx-auto flex items-center justify-between bg-white shadow-md rounded-sm mt-3 px-4 py-3"
    >
      <div
        class="border-red-500 pb-1"
        :class="{ 'border-b-4': onboarding == 0 }"
      >
        <button
          @click="onboarding = 0"
          class="rounded-full text-yellow-900 bg-yellow-200 border-2 border-red-500 hover:text-gray-800 focus:outline-none"
          aria-label="Back Button"
        >
          <svg class="h-10 w-10 p-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
      <div
        class="border-red-500 pb-1"
        :class="{ 'border-b-4': onboarding == 1 }"
      >
        <button
          @click="onboarding = 1"
          class="rounded-full text-yellow-900 bg-yellow-200 border-2 border-red-500 hover:bg-yellow-100 focus:outline-none"
          aria-label="Back Button"
        >
          <svg class="h-10 w-10 p-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"
            />
          </svg>
        </button>
      </div>
      <div
        class="border-red-500 pb-1"
        :class="{ 'border-b-4': onboarding == 2 }"
      >
        <button
          @click="onboarding = 2"
          class="rounded-full text-yellow-900 bg-yellow-200 border-2 border-red-500 hover:text-gray-800 focus:outline-none"
          aria-label="Back Button"
        >
          <svg class="h-10 w-10 p-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="bg-white rounded-sm shadow-md p-3 max-w-md mx-auto mt-3">
      <div class="text-sm text-gray-500 text-center">
        {{ $t(`howitworks.helpText[${onboarding}]`) }}
      </div>
      <vue-load-image v-show="onboarding == 0">
        <img
          slot="image"
          class="mx-auto max-h-50-screen mt-3"
          src="@/assets/img/sherpa_howitworks_0.gif"
        />
        <img
          slot="preloader"
          class="mx-auto"
          src="https://i.gifer.com/4V0b.gif"
        />
        <div slot="error" class="w-full h-full text-center flex justify-center">
          something went wrong :(
        </div>
      </vue-load-image>

      <vue-load-image v-show="onboarding == 1">
        <img
          slot="image"
          class="mx-auto max-h-50-screen mt-3"
          src="@/assets/img/sherpa_howitworks_1.gif"
        />
        <img
          slot="preloader"
          class="mx-auto"
          src="https://i.gifer.com/4V0b.gif"
        />
        <div slot="error" class="w-full h-full text-center flex justify-center">
          something went wrong :(
        </div>
      </vue-load-image>

      <vue-load-image v-show="onboarding == 2">
        <img
          slot="image"
          class="mx-auto max-h-50-screen mt-3"
          src="@/assets/img/sherpa_howitworks_2.gif"
        />
        <img
          slot="preloader"
          class="mx-auto"
          src="https://i.gifer.com/4V0b.gif"
        />
        <div slot="error" class="w-full h-full text-center flex justify-center">
          something went wrong :(
        </div>
      </vue-load-image>
    </div>
    <button
      v-if="onboarding < 2"
      @click="onboarding++"
      class="btn btn-dark w-full h-10 flex justify-around uppercase mt-4 mx-auto max-w-md"
    >
      {{ $t('howitworks.btn.next') }}
    </button>
    <router-link v-else to="/team">
      <button
        to="/howitworks"
        class="btn btn-dark w-full h-10 flex justify-around uppercase mt-4 mx-auto max-w-md"
      >
        {{ $t('howitworks.btn.final') }}
      </button>
    </router-link>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image';

export default {
  components: {
    'vue-load-image': VueLoadImage,
  },
  data: () => ({
    onboarding: 0,
  }),
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.pics.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.pics.length - 1 : this.onboarding - 1;
    },
  },
};
</script>
