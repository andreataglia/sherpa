<template>
  <v-container fluid>
    <v-row class="px-4">
      <v-col cols="12" class="text-center">
        <v-btn class="md-12" color="primary" width="100%" disabled
          >My Team Is Set
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>My Team</div>
        <v-divider inset style="margin-top:-10px;" class="pb-3"></v-divider>
        <team-avatar
          v-for="amb of currentTeam"
          :key="amb.id"
          :id="amb.id"
        />
        <v-divider class="mt-3"></v-divider>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-column">
      <ambassador-card
        v-for="amb of ambassadors"
        :key="amb.id"
        class="mx-auto my-2 ambassadorCard"
        :id="amb.id"
      ></ambassador-card>
    </v-row>
  </v-container>
</template>

<script>
import AmbassadorCard from '@/components/AmbassadorCard.vue';
import TeamAvatar from '@/components/TeamAvatar.vue';

export default {
  components: {
    AmbassadorCard,
    TeamAvatar
  },
  data: () => ({
  }),
  computed: {
    currentTeam() {
      return this.$store.getters.currentTeam;
    },
    ambassadors() {
      return this.$store.state.ambassadors;
    }
  }
};
</script>
<style scoped>
.ambassadorCard {
  width: 400px;
}
@media only screen and (min-width: 768px) {
  /* tablets and desktop */
  .ambassadorCard {
    width: 400px;
  }
}

@media only screen and (max-width: 420px) {
  /* small phones */
  .ambassadorCard {
    width: 350px;
  }
}
</style>