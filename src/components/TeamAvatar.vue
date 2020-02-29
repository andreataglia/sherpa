<template>
  <span>
    <v-avatar size="55" class="myTeamAvatar ml-2 elevation-5 my-2" @click.stop="dialog = true">
      <img
        :src="`${publicPath}img/ambassadorPics/amb-${this.id}.jpg`"
        :title="getAmbassadorById.name"
        aspect-ratio="1"
      />
    </v-avatar>
    <v-dialog v-model="dialog" overlay-opacity="0.95" max-width="400">
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

<style scoped lang="scss">
@import "@/assets/_variables.scss";
.myTeamAvatar {
  border-style: solid;
  border-width: 2px;
  border-color: $secondary;
  cursor: pointer;
}
</style>
