<template>
  <div class="bg-white shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <div class="sm:flex sm:items-start sm:justify-between">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Confirm Team?
          </h3>
          <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
            <p>
              Your team looks awesome! Either confirm it and go straight to
              create the chat with them or make some last minute changes if you
              wish.
            </p>
          </div>
        </div>
        <div
          class="mt-5 mt-0 sm:ml-6 flex-shrink-0 flex items-center"
        >
          <span class="inline-flex rounded-md shadow-sm">
            <router-link to="/teamisset/msg">
            <button type="button" class="btn btn-dark rounded-md">
              Let's Go
            </button>
            </router-link>
          </span>
        </div>
      </div>

      <div class="mt-5">
        <div
          class="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:justify-between items-center"
        >
          <div class="flex overflow-hidden mt-2 pl-4">
            <transition-group name="list" tag="p">
              <team-avatar
                v-for="(amb, index) of currentTeam"
                :key="index + 100"
                :amb-id="amb.id"
              />
            </transition-group>
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
            <span class="inline-flex rounded-md shadow-sm">
              <router-link to="/team">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                >
                  Edit Team
                </button>
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamAvatar from '@/components/TeamAvatar.vue';
import VueLoadImage from 'vue-load-image';

export default {
  name: 'TeamSet',
  components: {
    TeamAvatar,
    'vue-load-image': VueLoadImage,
  },
  computed: {
    currentTeam() {
      return this.$store.getters.currentTeam;
    },
  },
};
</script>
