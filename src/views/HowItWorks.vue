<template>
  <v-container class="stepper-container">
    <v-stepper v-model="activeStep" class="child">
      <v-stepper-header class="flex-grow-1">
        <v-stepper-step editable :complete="activeStep > 1" step="1"
          >Name of step 1</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step editable :complete="activeStep > 2" step="2"
          >Name of step 2</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step editable step="3">Name of step 3</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items class="child">
        <v-stepper-content step="1">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
            width="100%"
          ></v-card>
          <v-btn color="primary" @click="activeStep = 2">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="activeStep = 3">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="activeStep = 4">Continue</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 1
    };
  }
};
</script>

<style scoped>
.stepper-container {
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #e2eaf4;
    padding: 10px;
  }
}

.child {
  display: inline-block;
  border-radius: 6px;
  padding: 20px;
  margin: 12px;
}

.child:first-child {
  width: 100%;
}

.child:not(:first-child) {
  flex: 1;
}
</style>
