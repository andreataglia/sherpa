<template>
  <span>
    <img
      @click.stop="dialog = true"
      class="inline-block h-16 w-16 rounded-full text-white border-4 border-yellow-50 cursor-pointer shadow-md m-1 mb-2 -ml-4 hover:border-yellow-100"
      :src="`${publicPath}img/ambassadorPics/amb-${this.ambId}.jpg`"
      aspect-ratio="1"
    />
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="dialog"
        class="z-10 fixed bottom-0 inset-x-0 px-4 pb-6 inset-0 p-0 flex items-center justify-center"
      >
        <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->

        <div v-if="dialog" class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <!--
    Modal panel, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      To: "opacity-100 translate-y-0 sm:scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 translate-y-0 sm:scale-100"
      To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  -->
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <ambassador-card
            class="z-20"
            v-if="dialog"
            v-click-outside="hideDialog"
            :amb-id="getAmbassadorById.id"
          ></ambassador-card>
        </transition>
      </div>
    </transition>
  </span>
</template>

<script>
import AmbassadorCard from '@/components/AmbassadorCard.vue';
import ClickOutside from 'vue-click-outside';

export default {
  name: 'TeamAvatar',
  directives: {
    ClickOutside,
  },
  components: {
    AmbassadorCard,
  },
  props: {
    ambId: Number,
  },
  data: () => ({
    dialog: false,
    publicPath: process.env.BASE_URL,
  }),
  methods: {
    hideDialog() {
      this.dialog = false;
    },
  },
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(this.ambId);
    },
  },
};
</script>

<style scoped></style>
