<template>
  <div class="h-full w-full">
    <div
      class="w-full relative bg-white mt-6 p-4 pb-3 shadow-md rounded-sm sm:rounded-md"
    >
      <div
        class="-mt-7 bg-gray-100 w-32 text-sm text-center rounded-full text-gray-700 font-bold"
      >
        {{ $t("team.yourTeam") }}
      </div>
      <p class="text-sm text-gray-500 ml-1 my-3">
        {{ $t("team.helpText", { nMin: $minTeamSize, nMax: $maxTeamSize }) }}.
        <br />{{ $t("team.helpText2") }}.
      </p>
      <div class="flex overflow-hidden mt-2 pl-4">
        <transition-group name="list" tag="p">
          <team-avatar
            v-for="(amb, index) of currentTeam"
            :key="index + 100"
            :amb-id="amb.id"
          />
        </transition-group>

        <span class="inline-flex rounded-md sm:inline-flex">
          <button
            class="inline-flex btn btn-dark absolute right-0 h-10 justify-around uppercase rounded-md mr-3 sm:-mr-5 mt-3"
            :class="{ 'btn-disabled': !minSizeReached }"
            @click="teamIsSet()"
          >
            {{ $t("team.btn.text") }}
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
    </div>
  </div>
</template>

<script>
import AmbassadorCard from "@/components/AmbassadorCard.vue";
import TeamAvatar from "@/components/TeamAvatar.vue";

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
        this.$router.push("/teamisset");
      } else {
        this.$toast(this.$t("team.btn.disabledMsg.title"), {
          body: this.$t("team.btn.disabledMsg.body", { n: min }),
          type: "err",
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
