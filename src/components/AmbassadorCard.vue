<template>
  <div class="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <router-link :to="noView ? '#' : getProfileUrl()">
      <vue-load-image>
        <img
          slot="image"
          class="w-full rounded-br-large object-cover max-h-64 w-full object-top cursor-pointer focus:outline-none"
          :src="`${publicPath}img/ambassadorPics/amb-${this.ambId}.jpg`"
        />
        <img
          slot="preloader"
          src="https://media.giphy.com/media/s4KqhlPU9Ypnq/giphy.gif"
        />
        <div slot="error" class="w-full h-full text-center flex justify-center">
          no image :(
        </div>
      </vue-load-image>
    </router-link>
    <button
      class="text-gray-700 font-semibold absolute right-0 -mt-14 mr-2 flex flex-col items-center rounded-full w-11 h-11 focus:outline-none"
    >
      <svg
        class="h-4 w-4 -mt-1 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"
        />
      </svg>
      <span class="text-xs">540</span>
    </button>
    <button
      class="btn btn-light absolute right-0 mt-2 sm:mt-4 mr-2 rounded-md flex uppercase text-xs"
      @click="addToTeam()"
      v-if="!getAmbassadorById.inTeam"
    >
      Add to team
    </button>
    <button
      class="btn btn-dark absolute right-0 mt-2 sm:mt-4 mr-2 rounded-md flex uppercase text-xs"
      :class="{ 'btn-disabled': getAmbassadorById.admin }"
      @click="removeFromTeam(getAmbassadorById.admin)"
      v-else
    >
      Remove
      <!-- <svg class="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"
        />
      </svg> -->
    </button>
    <div class="px-2 sm:px-6 py-3 sm:py-4">
      <div class="font-bold text-xl mb-2 w-3/5">{{ getAmbassadorById.name }}</div>
      <p class="text-gray-600 text-sm">
        <span
          v-for="(bio, index) in getAmbassadorById.shortBio"
          :key="index"
          class="mr-2"
        >
          <span v-html="emoj[index]"></span>
          {{ bio.text }}<br />
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import Twemoji from 'twemoji';
import VueLoadImage from 'vue-load-image';

export default {
  name: 'AmbassadorCard',
  components: {
    'vue-load-image': VueLoadImage,
  },
  props: {
    ambId: Number,
    noView: Boolean,
    elevation: {
      type: Number,
      default: 8,
    },
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    emoj: [],
  }),

  methods: {
    addToTeam(admin) {
      if (this.$store.getters.teamIsFull(this)) {
        let max = this.$maxTeamSize;
        this.$toast('Team is full! Remove someone first', {
          body: `the team can have max ${max} ambassadors`,
          type: 'err',
        });
      } else {
        this.$store.commit('addToTeam', this.ambId);
        let max = this.$maxTeamSize;
        let current = this.$store.getters.currentTeam.length;
        let text =
          max - current > 0
            ? `You can still add up to ${max -
                current} ambassadors to your team`
            : 'Your team is now full and ready to go!';
        this.$toast('Nice! Team member added', { body: text });
      }
    },
    removeFromTeam(admin) {
      if (!admin) {
        this.$store.commit('removeFromTeam', this.ambId);
        this.$toast('Uuch.. One less team member');
      } else {
        this.$toast('This guy is an admin and cannot be removed', {
          type: 'err',
        });
      }
    },
    getProfileUrl() {
      return this.noLink ? '' : 'team/' + this.ambId;
    },
    openSnackBar(type) {
      this.snackbarType = type;
      this.snackbar = true;
    },
  },
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(this.ambId);
    },
  },
  created: function() {
    let ambassadors = this.$store.getters.getAmbassadorById(this.ambId);
    for (let i = 0; i < ambassadors.shortBio.length; i++) {
      this.emoj.push(
        Twemoji.parse(ambassadors.shortBio[i].emoj, {
          ext: '.svg',
          folder: 'svg',
        })
      );
    }
  },
};
</script>

<style>
img.emoji {
  display: inline;
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
}
</style>
