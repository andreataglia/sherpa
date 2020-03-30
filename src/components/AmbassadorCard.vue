<template>
  <span>
    <v-card elevation="8" class="ambCard">
      <router-link :to="noView ? '#' : getProfileUrl()">
        <v-img
          :src="`${publicPath}img/ambassadorPics/amb-${this.id}.jpg`"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,0), 80%, rgba(0,0,0,0.9)"
          max-height="300"
        >
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
        <span class="subheading mr-2">{{ getAmbassadorById.upvotes }}</span>
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
    <v-snackbar v-model="snackbar" :timeout="snackbarTimer">
      {{
        teamMemberJustAdded
          ? 'Nice! One more team member added.'
          : 'Uuch.. One less team member.'
      }}
      <v-btn color="blue" text @click="snackbar = false">
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
    noView: Boolean
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    snackbar: false,
    snackbarTimer: 2000,
    teamMemberJustAdded: true,
    emoj: []
  }),

  methods: {
    addToTeam() {
      this.teamMemberJustAdded = true;
      this.$store.commit('addToTeam', this.id);
      this.snackbar = true;
    },
    removeFromTeam() {
      this.teamMemberJustAdded = false;
      this.$store.commit('removeFromTeam', this.id);
      this.snackbar = true;
    },
    getProfileUrl() {
      return this.noLink ? '' : 'team/' + this.id;
    }
  },
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(this.id);
    }
  },
  created: function() {
    let ambassadors = this.$store.getters.getAmbassadorById(this.id);
    for (let i = 0; i < ambassadors.shortBio.length; i++) {
      this.emoj.push(
        Twemoji.parse(ambassadors.shortBio[i].emoj, {
          ext: '.svg',
          folder: 'svg'
        })
      );
    }
  }
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
  max-width: 400px;
  min-width: 300px;
}
@media only screen and (max-width: 410px) {
  /* small phones */
  .ambCard {
    max-width: 370px;
  }
}
@media only screen and (max-width: 380px) {
  /* small phones */
  .ambCard {
    max-width: 330px;
  }
}
@media only screen and (max-width: 340px) {
  /* small phones */
  .ambCard {
    max-width: 300px;
  }
}
</style>
