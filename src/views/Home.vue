<template>
  <v-container fluid style="max-width:600px">
    <v-row no-gutters class="fillHeight">
      <v-img
        src="@/assets/welcome.png"
        contain
        class="flexItem mb-4"
      />
      <v-btn
        color="primary"
        elevation="8"
        width="100%"
        height="50"
        dark
        to="/howitworks"
        class="myButton"
      >
        Let's Go
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss" scoped>
  .flexItem{
    flex: 1;
    max-height: calc(100vh - 130px);
  }
</style>