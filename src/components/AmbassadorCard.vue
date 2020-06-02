<template>
  <span>
    <v-card :elevation="elevation" class="bg-transparent ambCard mx-auto">
      <router-link :to="noView ? '#' : getProfileUrl()">
        <v-img
          :src="`${publicPath}img/ambassadorPics/amb-${this.id}.jpg`"
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
  </span>
</template>

<script>
import Twemoji from 'twemoji';
export default {
  name: 'AmbassadorCard',
  props: {
    id: Number,
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
        this.$store.commit('addToTeam', this.id);
        this.openSnackBar(0);
      }
    },
    removeFromTeam() {
      this.$store.commit('removeFromTeam', this.id);
      this.openSnackBar(1);
    },
    getProfileUrl() {
      return this.noLink ? '' : 'team/' + this.id;
    },
    openSnackBar(type) {
      this.snackbarType = type;
      this.snackbar = true;
    },
  },
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(this.id);
    },
  },
  created: function() {
    let ambassadors = this.$store.getters.getAmbassadorById(this.id);
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

<style scoped>
a {
  text-decoration: none;
}

.shortBio >>> .emoji {
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
  margin-left: 4px;
}

.ambCard {
  width: 400px;
}
@media only screen and (max-width: 414px) {
  .ambCard {
    max-width: 400px;
  }
}
@media only screen and (max-width: 375px) {
  .ambCard {
    max-width: 350px;
  }
}
@media only screen and (max-width: 321px) {
  .ambCard {
    max-width: 300px;
  }
}
</style>
