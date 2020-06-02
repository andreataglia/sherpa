<template>
  <v-container fluid>
    <v-row class="pb-16 d-flex flex-column">
      <ambassador-card class="profileSection" :id="getAmbassadorById.id" :elevation="2" no-view></ambassador-card>

      <ambassador-gallery class="profileSection" :id="parseInt($route.params.id)" />

      <v-card class="text-left profileSection">
        <div class="flex justify-between pa-4 text-gray-600 font-normal">
          <div>
            <div class="font-bold text-gray-800">From</div>
            {{ getAmbassadorById.from }}
          </div>
          <div>
            <div class="font-bold text-gray-800">Languages</div>
            {{ getAmbassadorById.languages }}
          </div>
          <div>
            <div class="font-bold text-gray-800">
              <v-tooltip top open-on-hover>
                <template v-slot:activator="{ on }">
                  <span v-on="on">Avg. Resp. Time</span>
                </template>
                <span>Average Response Time</span>
              </v-tooltip>
            </div>
            {{ getAmbassadorById.resptime }}
          </div>
        </div>
      </v-card>

      <v-card class="profileSection pa-4 mt-2">
        <div class="text-justify text-gray-600 font-normal">
          <span class="aboutMe">About me: </span>{{ getAmbassadorById.longBio }}
        </div>
      </v-card>
    </v-row>

    <v-btn bottom color="red" dark fixed height="50" left to="/team">
      <v-icon>mdi-arrow-left-bold</v-icon>
      Back
    </v-btn>
  </v-container>
</template>

<script>
import AmbassadorGallery from '@/components/AmbassadorGallery.vue';
import AmbassadorCard from '@/components/AmbassadorCard.vue';

export default {
  name: 'AmbassadorProfile',
  components: {
    AmbassadorGallery,
    AmbassadorCard,
  },
  data: () => ({}),
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(
        parseInt(this.$route.params.id)
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

.profileSection {
  width: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
}
@media only screen and (max-width: 414px) {
  /* small phones */
  .profileSection {
    max-width: 400px;
  }
}
@media only screen and (max-width: 375px) {
  /* small phones */
  .profileSection {
    max-width: 350px;
  }
}
@media only screen and (max-width: 320px) {
  /* small phones */
  .profileSection {
    max-width: 300px;
  }
}

.aboutMe {
  color: $primary;
  font-weight: bolder;
}
</style>
