<template>
  <div class="h-full w-full">
    <div
      class="w-full relative border-gray-300 border border-dashed mt-6 p-4 rounded-md"
    >
      <div
        class="-mt-7 bg-gray-100 w-20 text-sm text-center text-gray-700 font-bold"
      >
        Your Team
      </div>
      <div class="flex overflow-hidden mt-2">
        <img
          class="inline-block h-16 w-16 rounded-full text-white border-4 border-yellow-100"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          class="-ml-2 inline-block h-16 w-16 rounded-full text-white border-4 border-yellow-100"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          class="-ml-2 inline-block h-16 w-16 rounded-full text-white border-4 border-yellow-100"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          class="-ml-2 inline-block h-16 w-16 rounded-full text-white border-4 border-yellow-100"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />

        <span class="inline-flex rounded-md">
          <router-link to="/team">
            <button
              to="/howitworks"
              class="inline-flex btn btn-dark absolute right-0 h-10 flex justify-around uppercase rounded-md -mr-5 mt-3"
            >
              Let's go
              <svg
                class="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
              </svg>
            </button>
          </router-link>
        </span>
      </div>
    </div>
  </div>

  <!-- <v-container fluid style="max-width:900px;">
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
                :disabled="currentTeam.length < $minTeamSize"
                to="/teamisset"
                >My Team Is Set
              </v-btn>
            </div>
          </template>
          <span v-if="parseInt($minTeamSize) - currentTeam.length > 0">Select at least {{ parseInt($minTeamSize) - currentTeam.length }} more ambassador to complete the team!</span>
          <span v-else>Ready to go!</span>
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
    <div class="flex flex-wrap justify-around items-start">
      <ambassador-card
        v-for="amb of ambassadors"
        :key="amb.id"
        class="mx-2 my-2"
        :id="amb.id"
      ></ambassador-card>
    </div>
  </v-container> -->
</template>

<script>
// import AmbassadorCard from '@/components/AmbassadorCard.vue';
// import TeamAvatar from '@/components/TeamAvatar.vue';

export default {
  components: {
    // AmbassadorCard,
    // TeamAvatar,
  },
  data: () => ({}),
  computed: {
    currentTeam() {
      return this.$store.getters.currentTeam;
    },
    ambassadors() {
      return this.$store.state.ambassadors;
    },
  },
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
