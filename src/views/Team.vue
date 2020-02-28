<template>
  <v-container fluid>
    <v-row class="px-4">
      <v-col cols="12" class="text-center">
        <v-tooltip top open-on-hover>
          <template v-slot:activator="{ on }">
            <div v-on="on">
              <v-btn
                class="md-12"
                color="primary"
                width="100%"
                height="50"
                elevation="8"
                :disabled="currentTeam.length < minTeamSize"
                to="/teamisset"
                >My Team Is Set
              </v-btn>
            </div>
          </template>
          <span>Your team needs at least {{ minTeamSize }} ambassadors</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>My Team</div>
        <v-divider inset style="margin-top:-10px;" class="pb-3"></v-divider>
        <div class="mx-auto" max-width="700">
          <v-slide-group multiple show-arrows class="bgColor">
            <transition-group name="list" tag="p">
              <v-slide-item
                v-for="amb of currentTeam"
                :key="amb.id"
                v-slot:default="{ active, toggle }"
              >
                <team-avatar :id="amb.id" />
              </v-slide-item>
            </transition-group>
          </v-slide-group>
        </div>
        <v-divider class=""></v-divider>
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
    minTeamSize: 3
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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
