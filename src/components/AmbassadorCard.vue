<template>
  <v-card v-if="!noLink" :to="getProfileUrl()">
    <v-img
      src="https://cdn.vuetifyjs.com/images/john.jpg"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="name"></v-card-title>
    </v-img>
    <v-card-text> A true <b>sea lover</b> lorem ipsum </v-card-text>
    <v-card-actions>
      <v-icon size="x-large" class="mr-2">mdi-thumb-up</v-icon>
      <span class="subheading mr-2">256</span>
      <v-spacer></v-spacer>
      <v-btn color="primary">
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else>
    <v-img
      src="https://cdn.vuetifyjs.com/images/john.jpg"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="name"></v-card-title>
    </v-img>
    <v-card-text> A true <b>sea lover</b> lorem ipsum </v-card-text>
    <v-card-actions>
      <v-icon size="x-large" class="mr-2">mdi-thumb-up</v-icon>
      <span class="subheading mr-2">256</span>
      <v-spacer></v-spacer>
      <v-btn color="primary">
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AmbassadorCard',
  props: {
    id: Number,
    noLink: Boolean
  },
  data: () => ({}),
  methods: {
    getProfileUrl() {
      return 'team/' + this.id;
    }
  },
  computed: {
    name() {
      return this.$store.state.ambassadors.find(amb => amb.id === this.id).name;
    }
  }
};
</script>
