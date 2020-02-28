<template>
  <v-container fluid>
    <v-row class="pb-10 d-flex flex-column">
      <ambassador-card
        class="profileSection"
        :id="getAmbassadorById.id"
        no-view
      ></ambassador-card>
      <ambassador-gallery
        class="profileSection"
        :id="parseInt(this.$route.params.id)"
      />
      <v-card class="text-left profileSection" elevation="8">
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
              </v-tooltip>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>Siracusa</v-col>
            <v-col>Italian, English</v-col>
            <v-col>15 minutes</v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="profileSection" elevation="8">
        <v-card-text class="text-justify">
          <span class="aboutMe">About me: </span>{{ getAmbassadorById.longBio }}
        </v-card-text>
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
import AmbassadorGallery from '@/components/AmbassadorGallery.vue';

export default {
  components: {
    AmbassadorCard,
    AmbassadorGallery
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

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.profileSection {
  width: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
}
@media only screen and (min-width: 768px) {
  /* tablets and desktop */
  .profileSection {
    width: 400px;
  }
}

@media only screen and (max-width: 420px) {
  /* small phones */
  .profileSection {
    width: 350px;
  }
}
.aboutMe{
  color: $primary;
  font-weight: bolder;
}
</style>
