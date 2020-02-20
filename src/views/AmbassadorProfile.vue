<template>
  <v-container fluid>
    <v-row style="text-align:center;">
      <ambassador-card
        class="mx-auto my-2"
        :id="getAmbassadorById.id"
        no-view
      ></ambassador-card>

      <v-card class="mx-auto my-2">
        <v-card-text>
          Ambassador <b>{{ getAmbassadorById.name }}</b> lorem ipsum
        </v-card-text>
      </v-card>

      <v-card class="mx-auto my-2">
        <v-card-text> A true <b>sea lover</b> lorem ipsum </v-card-text>
      </v-card>

      <v-card class="mx-auto my-2">
        <v-card-text> A true <b>sea lover</b> lorem ipsum </v-card-text>
      </v-card>
    </v-row>

    <v-btn bottom color="red" elevation="8" dark fixed left to="/team">
      <v-icon>mdi-arrow-left-bold</v-icon>
      Back
    </v-btn>
  </v-container>
</template>

<script>
import AmbassadorCard from '@/components/AmbassadorCard.vue';

export default {
  components: {
    AmbassadorCard
  },
  data: () => ({}),
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(parseInt(this.$route.params.id));
    }
  }
};
</script>

<style scoped></style>
