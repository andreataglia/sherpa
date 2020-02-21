<template>
  <v-container fluid>
    <v-row style="text-align:center;">
      <ambassador-card
        class="mx-auto my-2"
        :id="getAmbassadorById.id"
        no-view
      ></ambassador-card>

      <v-card class="mx-auto my-2" max-width="350">
        <v-card-text>
          Ambassador <b>{{ getAmbassadorById.name }}</b> lorem ipsum Lorem
          ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </v-card-text>
      </v-card>

      <v-card class="mx-auto my-2 text-left" width="350">
        <v-card-text>
          <v-row no-gutters>
            <v-col class="font-weight-bold">From</v-col>
            <v-col class="font-weight-bold">Languages</v-col>
            <v-col class="font-weight-bold"
              ><v-tooltip top open-on-hover>
                <template v-slot:activator="{ on }">
                  <span v-on="on">Avg. Resp. Time</span>
                </template>
                <span>Average Response Time</span>
              </v-tooltip></v-col
            >
          </v-row>
          <v-row no-gutters>
            <v-col>Catania</v-col>
            <v-col>Italian, English</v-col>
            <v-col>15 minutes</v-col>
          </v-row>
        </v-card-text>
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
      return this.$store.getters.getAmbassadorById(
        parseInt(this.$route.params.id)
      );
    }
  }
};
</script>

<style scoped></style>
