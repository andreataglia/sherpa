<template>
  <v-avatar class="myTeamAvatar mr-2">
    <img
      src="https://cdn.vuetifyjs.com/images/john.jpg"
      :title="getAmbassadorById.name"
    />
  </v-avatar>
</template>

<script>
export default {
  name: 'TeamAvatar',
  props: {
    id: Number
  },
  data: () => ({}),
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
</style>
