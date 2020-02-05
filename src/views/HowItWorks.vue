<template>
  <v-container fluid>
    <v-row class="px-4">
      <v-col cols="12" class="text-center">
        <h3>HOW IT WORKS:</h3>
        <v-stepper v-model="activeStep" class="mt-6 stepper-container">
          <v-stepper-header>
            <v-stepper-step class="stepper-step" editable complete-icon="mdi-magnify" step="1"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable complete-icon="mdi-plus" step="2"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable complete edit-icon="mdi-message" step="3"></v-stepper-step>
          </v-stepper-header>

          <v-stepper-items class="mt-2">
            <v-stepper-content step="1">
              <v-card class="mb-12">
                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-img
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                />
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12">
                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-img
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                />
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12">
                <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-img
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                />
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
        <v-btn
          class="md-12 mt-6"
          color="primary"
          width="100%"
          @click="activeStep = parseInt(activeStep) > 2 ? 1 : parseInt(activeStep) + 1"
          >Next</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      activeStep: 1
    };
  }
};
</script>

<style scoped>
.stepper-container {
  /* height: 100%; */
}

.v-stepper__step__step{
  width: 50px;
}
</style>
