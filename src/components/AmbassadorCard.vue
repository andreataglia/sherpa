<template>
  <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
    <router-link :to="noView ? '#' : getProfileUrl()">
      <img
        class="w-full rounded-br-large object-cover max-h-64 w-full object-top cursor-pointer focus:outline-none"
        :src="`${publicPath}img/ambassadorPics/amb-${this.ambId}.jpg`"
      />
    </router-link>
    <button
      class="btn btn-dark absolute right-0 -mt-16 mr-2 rounded-full w-11 h-11"
    >
      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"
        />
      </svg>
    </button>
    <button
      class="btn btn-light bg-yellow-200 text-gray-700 hover:bg-yellow-100 absolute right-0 -mt-3 mr-2 flex flex-col items-center rounded-full w-11 h-11"
    >
      <svg class="h-4 w-4 -mt-1" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"
        />
      </svg>
      <span class="text-xs">540</span>
    </button>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ getAmbassadorById.name }}</div>
      <p class="text-gray-600 text-sm">
        <span
          v-for="(bio, index) in getAmbassadorById.shortBio"
          :key="index"
          class="mr-2"
        >
          <span v-html="emoj[index]"></span>
          {{ bio.text }}
        </span>
      </p>
    </div>
  </div>
  <!-- <span>
    <v-card :elevation="elevation" class="bg-transparent ambCard mx-auto">
      <router-link :to="noView ? '#' : getProfileUrl()">
        <v-img
          :src="`${publicPath}img/ambassadorPics/amb-${this.ambId}.jpg`"
          class="white--text align-end rounded-t-md"
          gradient="to bottom, rgba(0,0,0,0), 80%, rgba(0,0,0,0.9)"
          max-height="400"
          position="top"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          <v-card-title v-text="getAmbassadorById.name"></v-card-title>
        </v-img>
      </router-link>
      <v-card-text class="shortBio">
        <span v-for="(bio, index) in getAmbassadorById.shortBio" :key="index">
          <span v-html="emoj[index]"></span>
          {{ bio.text }}
        </span>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-icon size="x-large" class="mr-2" color="secondary"
          >mdi-thumb-up</v-icon
        >
        <span class="subheading mr-2 text-gray-600">{{
          getAmbassadorById.upvotes
        }}</span>
        <v-spacer></v-spacer>
        <v-btn
          v-if="!getAmbassadorById.inTeam"
          color="primary"
          v-on:click="addToTeam()"
        >
          Add
        </v-btn>
        <v-tooltip v-else-if="getAmbassadorById.admin" top open-on-hover>
          <template v-slot:activator="{ on }">
            <v-sheet v-on="on">
              <v-btn disabled width="120" class="mr-2" text>
                Moderator
              </v-btn>
            </v-sheet>
          </template>
          <span>Moderators cannot be removed from team</span>
        </v-tooltip>
        <v-btn v-else color="primary" v-on:click="removeFromTeam()" outlined>
          Remove
        </v-btn>
        <v-btn v-if="!noView" color="secondary" :to="getProfileUrl()">
          View
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarTypes[snackbarType].color"
      :timeout="snackbarTimer"
    >
      {{ snackbarTypes[snackbarType].text }}
      <v-btn color="gray darken-3" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </span> -->
</template>

<script>
import Twemoji from 'twemoji';
export default {
  name: 'AmbassadorCard',
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
    snackbar: false,
    snackbarTimer: 2000,
    snackbarType: 0,
    snackbarTypes: [
      {
        text: 'Nice! Team member added',
        color: 'green lighten-1',
      },
      {
        text: 'Uuch.. One less team member',
        color: 'green lighten-1',
      },
      {
        text: 'Team is full! Remove someone first',
        color: 'red lighten-1',
      },
    ],
    emoj: [],
  }),

  methods: {
    addToTeam() {
      if (this.$store.getters.teamIsFull(this)) {
        this.openSnackBar(2);
      } else {
        this.$store.commit('addToTeam', this.ambId);
        this.openSnackBar(0);
      }
    },
    removeFromTeam() {
      this.$store.commit('removeFromTeam', this.ambId);
      this.openSnackBar(1);
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
