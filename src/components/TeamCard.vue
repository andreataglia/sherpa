<template>
  <v-card shaped>
    <v-img
      :src="img"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="name"></v-card-title>
    </v-img>
    <v-card-text> A true <b>sea lover</b> lorem ipsum </v-card-text>
    <v-card-actions>
      <v-icon class="mr-1">mdi-heart</v-icon>
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
  name: 'TeamCard',
  props: {
    name: String,
    added: Boolean,
    img: String
  },
  data: () => ({})
};
</script>
