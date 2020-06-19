<template>
  <div class="h-full w-full">
    <vue-load-image>
      <img
        slot="image"
        class="mx-auto max-h-70-screen"
        src="@/assets/welcome.png"
      />
      <img
        slot="preloader"
        class="mx-auto"
        src="https://media.giphy.com/media/s4KqhlPU9Ypnq/giphy.gif"
      />
      <div slot="error" class="w-full h-full text-center flex justify-center">
        something went wrong :(
      </div>
    </vue-load-image>
    <router-link to="/howitworks">
      <button
        class="btn btn-dark w-full h-10 flex justify-around uppercase mt-4 mx-auto max-w-md"
      >
        {{ $t("home.btn") }}
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
  i18n: {
    messages: {
      en: { txt: "Let's Go" },
      it: { txt: 'Iniziamo' },
    },
  },
};
</script>
