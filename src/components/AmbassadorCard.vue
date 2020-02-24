<template>
  <span>
    <v-card min-width="320" max-width="400" elevation="8">
      <v-img
        :src="`${publicPath}img/ambassadorPics/amb-${this.id}.jpg`"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="getAmbassadorById.name"></v-card-title>
      </v-img>
      <v-card-text> A true <b>sea lover</b> lorem ipsum </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-icon size="x-large" class="mr-2">mdi-thumb-up</v-icon>
        <span class="subheading mr-2">{{getAmbassadorById.upvotes}}</span>
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
              <v-btn disabled width="80" class="mr-2" outlined>
                Remove
              </v-btn>
            </v-sheet>
          </template>
          <span>Admins cannot be removed from team</span>
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
    teamMemberJustAdded: true
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
  }
};
</script>
