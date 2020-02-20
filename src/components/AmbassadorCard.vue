<template>
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/john.jpg"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="getAmbassadorById.name"></v-card-title>
    </v-img>
    <v-card-text> A true <b>sea lover</b> lorem ipsum </v-card-text>
    <v-card-actions>
      <v-icon size="x-large" class="mr-2">mdi-thumb-up</v-icon>
      <span class="subheading mr-2">256</span>
      <v-spacer></v-spacer>
      <v-btn v-if="!getAmbassadorById.inTeam" color="primary" v-on:click="addToTeam()">
        Add
      </v-btn>
      <v-btn v-else color="primary" v-on:click="removeFromTeam()">
        Remove
      </v-btn>
      <v-btn v-if="!noView" color="secondary" :to="getProfileUrl()">
        View
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AmbassadorCard',
  props: {
    id: Number,
    noView: Boolean
  },
  data: () => ({

  }),
  methods: {
    addToTeam() {
      this.$store.commit('addToTeam', this.id);
    },
    removeFromTeam() {
      this.$store.commit('removeFromTeam', this.id);
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
