<template>
  <span>
    <v-avatar class="myTeamAvatar mr-2" v-bind:class="{adminAvatar: getAmbassadorById.admin}" @click.stop="dialog = true">
      <img
        :src="`${publicPath}img/ambassadorPics/amb-${this.id}.jpg`"
        :title="getAmbassadorById.name"
        aspect-ratio="1"
      />
    </v-avatar>
    <v-dialog v-model="dialog" max-width="400" overlay-opacity="0.95">
      <ambassador-card :id="getAmbassadorById.id"></ambassador-card>
    </v-dialog>
  </span>
</template>

<script>
import AmbassadorCard from '@/components/AmbassadorCard.vue';

export default {
  components: {
    AmbassadorCard
  },
  name: 'TeamAvatar',
  props: {
    id: Number
  },
  data: () => ({
    dialog: false,
    publicPath: process.env.BASE_URL
  }),
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(this.id);
    }
  }
};
</script>

<style scoped>
.myTeamAvatar {
  border-style: solid;
  border-width: 2px;
  border-color: red;
}
.adminAvatar{
  border-color: blue;
}
</style>
