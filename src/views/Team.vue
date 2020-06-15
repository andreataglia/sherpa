<template>
  <div class="h-full w-full">
    <div class="w-full relative bg-white mt-6 p-4 pb-3 shadow-md rounded-sm">
      <div
        class="-mt-7 bg-gray-100 w-24 text-sm text-center rounded-full text-gray-700 font-bold"
      >
        Your Team
      </div>
      <div class="flex overflow-hidden mt-2 pl-4">
        <transition-group name="list" tag="p">
          <team-avatar
            v-for="(amb, index) of currentTeam"
            :key="index"
            :amb-id="amb.id"
          />
        </transition-group>

        <!-- <img
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
        /> -->

        <span class="inline-flex rounded-md hidden sm:inline-flex">
          <button
            class="inline-flex btn btn-dark absolute right-0 h-10 flex justify-around uppercase rounded-md mr-3 sm:-mr-5 mt-3"
            :class="{ 'btn-disabled': !minSizeReached }"
            @click="teamIsSet()"
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
        </span>
      </div>
    </div>

    <button
      class="btn btn-dark w-full h-10 flex justify-center mt-1 uppercase mx-auto max-w-md mb-2 sm:hidden"
      :class="{ 'btn-disabled': !minSizeReached }"
      @click="teamIsSet()"
    >
      My team is set, let's go
      <svg class="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
      </svg>
    </button>

    <div class="flex flex-wrap justify-around mt-4">
      <ambassador-card
        v-for="amb of ambassadors"
        :key="amb.id"
        class="sm:mx-2 my-2 min-w-min-content"
        :amb-id="amb.id"
      ></ambassador-card>
      <!-- <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full rounded-br-large"
          src="https://tailwindcss.com/img/card-top.jpg"
        />
        <button
          class="btn btn-dark absolute right-0 -mt-16 mr-2 rounded-full w-11 h-11"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"
            />
          </svg>
        </button>
        <button
          class="btn btn-light absolute right-0 -mt-3 mr-2 flex flex-col items-center rounded-full w-11 h-11"
        >
          <svg class="h-4 w-4 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"
            />
          </svg>
          <span class="text-xs">540</span>
        </button>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Andrea Taglia</div>
          <p class="text-gray-700 text-base">
            🌊 Sea lover 🏖️ Beach hunter 🏄 Restless surfer
          </p>
        </div>
      </div> -->
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
import AmbassadorCard from '@/components/AmbassadorCard.vue';
import TeamAvatar from '@/components/TeamAvatar.vue';

export default {
  components: {
    AmbassadorCard,
    TeamAvatar,
  },
  data: () => ({}),
  methods: {
    teamIsSet() {
      let min = this.$minTeamSize;
      if (this.minSizeReached) {
        this.$router.push('/teamisset');
      } else {
        this.$toast('Not completed yet!', {
          body: `your team needs at least ${min} ambassadors`,
          type: 'err',
        });
      }
    },
  },
  computed: {
    currentTeam() {
      return this.$store.getters.currentTeam;
    },
    ambassadors() {
      return this.$store.state.ambassadors;
    },
    minSizeReached() {
      return this.currentTeam.length >= this.$minTeamSize ? true : false;
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
