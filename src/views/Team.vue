<template>
  <v-container fluid>
    <v-row class="px-4">
      <v-col cols="12" class="text-center">
        <v-btn class="md-12 mt-6" color="primary" width="100%" disabled
          >My Team Is Set
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>My Team</div>
        <v-divider inset style="margin-top:-10px;" class="pb-3"></v-divider>

        <v-avatar class="myTeamAvatar">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <v-avatar class="myTeamAvatar">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <v-divider class="mt-3"></v-divider>
      </v-col>
    </v-row>
    <v-row style="text-align:center;">
      <team-card class="mx-auto my-2" name="Andrea Taglia" img="https://cdn.vuetifyjs.com/images/john.jpg"></team-card>
      <team-card class="mx-auto my-2" name="Ciao Ciao" img="https://cdn.vuetifyjs.com/images/john.jpg"></team-card>
      <team-card class="mx-auto my-2" name="Paolo Debellini" img="https://cdn.vuetifyjs.com/images/john.jpg"></team-card>
    </v-row>
  </v-container>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue';

export default {
  components: {
    TeamCard
  },
  data: () => ({
    dialog: false,
    drawer: null,
    team: [
      { icon: 'mdi-contacts', name: 'Andrea Taglia', admin: true },
      { icon: 'mdi-contacts', name: 'Paolo Debellini', admin: true }
    ]
  })
};
</script>

<style scoped>
.myTeamAvatar {
  border-style: solid;
  border-width: 2px;
  border-color: red;
  margin-right: 5px;
}
</style>
