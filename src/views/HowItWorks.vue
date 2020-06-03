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
      <div class="border-red-500 pb-1" :class="{ 'border-b-4': onboarding == 1 }">
        <button
          @click="onboarding = 1"
          class="rounded-full text-yellow-900 bg-yellow-200 border-2 border-red-500 hover:bg-yellow-100 focus:outline-none"
          aria-label="Back Button"
        >
          <svg class="h-10 w-10 p-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
      <div class="border-red-500 pb-1" :class="{ 'border-b-4': onboarding == 2 }">
        <button
          @click="onboarding = 2"
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
    </div>
    <div class="bg-white rounded-sm shadow-md p-3 max-w-md mx-auto mt-3">
      <div class="text-sm text-gray-500 text-center">
        {{ text[onboarding] }}
      </div>
      <img
        v-show="onboarding == 0"
        class="mx-auto max-h-50-screen mt-3"
        src="@/assets/img/sherpa_howitworks_0.gif"
      />
      <img
        v-show="onboarding == 1"
        class="mx-auto max-h-50-screen mt-3"
        src="@/assets/img/sherpa_howitworks_1.gif"
      />
      <img
        v-show="onboarding == 2"
        class="mx-auto max-h-50-screen mt-3"
        src="@/assets/img/sherpa_howitworks_2.gif"
      />
    </div>
    <button
      v-if="onboarding < 2"
      @click="onboarding++"
      class="btn btn-dark w-full h-10 flex justify-around uppercase mt-4 mx-auto max-w-md"
    >
      Next
    </button>
    <router-link v-else to="/team">
      <button
        to="/howitworks"
        class="btn btn-dark w-full h-10 flex justify-around uppercase mt-4 mx-auto max-w-md"
      >
        Let's Go
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    onboarding: 0,
    text: [
      `Browse through the local ambassadors`,
      `Create your team by adding the ones you wish`,
      `We'll create a Whatsapp/Telegram group with them`,
    ],
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
