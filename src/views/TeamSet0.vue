<template>
  <v-row class="pb-10 d-flex flex-column px-4 text-center">
    <v-card class="mx-0 text-center" elevation="8">
      <div class="pb-0 pt-2 title red--text font-italic">
        Awesome!
      </div>
      <v-img
        laz-src="../assets/people.png"
        src="../assets/people.png"
        contain
        class="mx-auto px-12 mt-2 fixHeight"
      />
      <div class="pb-2 pt-4 font-normal text-md text-gray-600">
        Time to create a chat with your team on Telegram or Whatsapp
      </div>
      <div class="mx-auto ml-2 pb-4 text-center">
        <v-slide-group multiple show-arrows>
          <v-slide-item
            v-for="amb of currentTeam"
            :key="amb.id"
            v-slot:default="{ active, toggle }"
          >
            <team-avatar :id="amb.id" :size="60" class="px-1"></team-avatar>
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-card>
    <v-btn
      color="primary"
      height="50"
      width="100%"
      class="mx-0 mt-4"
      to="/teamisset/msg"
    >
      Next
    </v-btn>
    <v-btn
      color="secondary"
      height="50"
      width="100%"
      class="mx-0 mt-2"
      to="/team"
    >
      I want to edit my team
    </v-btn>
  </v-row>
</template>

<script>
import TeamAvatar from '@/components/TeamAvatar.vue';

export default {
  name: 'TeamSet',
  components: {
    TeamAvatar,
  },
  computed: {
    currentTeam() {
      return this.$store.getters.currentTeam;
    },
  },
};
</script>

<style>
.fixHeight {
  max-height: calc(100vh - 380px);
}
.v-slide-group__content {
  justify-content: center;
}
.v-slide-group__next {
  min-width: 20px !important;
}
.v-slide-group__prev {
  min-width: 20px !important;
}
</style>
