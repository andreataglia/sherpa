<template>
  <v-container fluid style="max-width:600px">
    <v-row class="mx-0">
      <v-col cols="12" class="text-center">
        <div class="title">HOW IT WORKS</div>
        <v-card color="primary" dark flat tile class="mt-2">
          <v-card-actions class="justify-space-around">
            <v-item-group v-model="onboarding" class="text-center" mandatory>
              <v-item
                v-for="pic in pics"
                :key="pic.id"
                v-slot:default="{ active, toggle }"
              >
                <v-btn
                  fab
                  outlined
                  color="black"
                  class="mx-2 topBtn"
                  :input-value="active"
                  @click="toggle"
                >
                  <v-icon>{{ pic.icon }}</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
          </v-card-actions>
          <v-window v-model="onboarding">
            <v-window-item v-for="pic in pics" :key="pic.id">
              <v-card light min-height="500" tile class="pb-4">
                <v-card-text>{{ pic.text }}</v-card-text>
                <v-img
                  src="https://picsum.photos/500/700?random"
                  class="px-4"
                  contain
                ></v-img>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
        <v-btn
          v-if="parseInt(onboarding) < pics.length - 1"
          class="md-12 mt-6"
          color="primary"
          width="100%"
          @click="
            onboarding =
              parseInt(onboarding) > pics.length - 1
                ? 1
                : parseInt(onboarding) + 1
          "
          >Next</v-btn
        >
        <v-btn v-else class="md-12 mt-6" color="primary" width="100%" to="/team"
          >Let's Go</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    onboarding: 0,
    publicPath: process.env.BASE_URL,
    pics: [
      {
        id: 0,
        text: `In team page you'll find plenty of nice people. Select the ones who best fit your needs`,
        icon: 'mdi-magnify'
      },
      {
        id: 1,
        text: `In team page you'll find plenty of nice people. Select the ones who best fit your needs`,
        icon: 'mdi-plus'
      },
      {
        id: 2,
        text: `In team page you'll find plenty of nice people. Select the ones who best fit your needs`,
        icon: 'mdi-message-text-outline'
      }
    ]
  }),
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.pics.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.pics.length - 1 : this.onboarding - 1;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/_variables.scss";
.topBtn {
  background-color: $secondary;
}
</style>
