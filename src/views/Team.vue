<template>
  <v-container fluid style="max-width:900px;">
    <v-row class="px-4">
      <v-col cols="12" class="text-center">
        <v-tooltip top open-on-hover>
          <template v-slot:activator="{ on }">
            <div v-on="on">
              <v-btn
                class="md-12"
                color="primary"
                width="250"
                height="50"
                elevation="8"
                :disabled="currentTeam.length < minTeamSize"
                to="/teamisset"
                >My Team Is Set
              </v-btn>
            </div>
          </template>
          <span>Select at least {{ parseInt(minTeamSize) - currentTeam.length }} more ambassador to complete the team!</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="body-2 font-weight-medium">My Team</div>
        <v-divider
          inset
          style="margin-top:-10px;"
          class="pb-3"
        ></v-divider>
        <div class="mx-auto" max-width="700">
          <v-slide-group multiple show-arrows class="bgColor">
            <transition-group name="list" tag="p" class="mb-1">
              <v-slide-item
                v-for="amb of currentTeam"
                :key="amb.id"
                v-slot:default="{ active, toggle }"
              >
                <team-avatar :id="amb.id" />
              </v-slide-item>
            </transition-group>
          </v-slide-group>
          <v-divider></v-divider>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-raw flex-wrap">
      <ambassador-card
        v-for="amb of ambassadors"
        :key="amb.id"
        class="mx-auto my-2"
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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
