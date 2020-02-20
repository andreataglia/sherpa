<template>
  <v-avatar class="myTeamAvatar mr-2">
    <img src="https://cdn.vuetifyjs.com/images/john.jpg" :title="id" />
  </v-avatar>
</template>

<script>
export default {
  name: 'TeamAvatar',
  props: {
    id: Number,
  },
  data: () => ({
    
  }),
  methods: {
    getProfileUrl: function(){
      return "team/" + this.name.trim().toLowerCase()
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
