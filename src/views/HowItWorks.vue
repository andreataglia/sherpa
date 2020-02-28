<template>
  <v-container fluid style="max-width:600px">
    <v-row class="mx-0">
      <v-col cols="12" class="text-center pt-0">
        <div class="subtitle-2">HOW IT WORKS</div>
        <v-card class="mt-2" elevation="8">
          <v-card-actions class="">
            <v-item-group v-model="onboarding" class="text-center d-flex justify-space-between" style="width:100%;" mandatory>
                <v-item
                  v-for="pic in pics"
                  :key="pic.id"
                  v-slot:default="{ active, toggle }"
                >
                  <v-btn
                    fab
                    outlined
                    color="#37474F"
                    class="mx-4 topBtn"
                    :input-value="active"
                    @click="toggle"
                    :class="{ activeBtn: active }"
                  >
                    <v-icon>{{ pic.icon }}</v-icon>
                  </v-btn>
                </v-item>
            </v-item-group>
          </v-card-actions>
        </v-card>
        <v-card class="mt-2" elevation="8">
          <v-window v-model="onboarding">
            <v-window-item v-for="pic in pics" :key="pic.id">
              <v-card light tile class="pb-3 fitHeight">
                <v-card-text class="font-weight-medium body-1 text-left cardText">{{ pic.text }}</v-card-text>
                <v-img
                  src="https://picsum.photos/400/500?random"
                  class="mx-3 cardFitHeight"
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
          elevation="8"
          height="50"
          @click="
            onboarding =
              parseInt(onboarding) > pics.length - 1
                ? 1
                : parseInt(onboarding) + 1
          "
          >Next</v-btn
        >
        <v-btn
          v-else
          class="md-12 mt-6"
          elevation="8"
          color="primary"
          width="100%"
          to="/team"
          height="50"
          >Let's Go
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

export default {
  data: () => ({
    onboarding: 0,
    publicPath: process.env.BASE_URL,
    pics: [
      {
        id: 0,
        text: `In team page you'll find plenty of nice people. Select the ones `,
        icon: 'mdi-magnify'
      },
      {
        id: 1,
        text: `In team page you'll find plenty of nice people. Select the ones`,
        icon: 'mdi-plus'
      },
      {
        id: 2,
        text: `In team page you'll find plenty of nice people. Select the ones`,
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
@import '@/assets/_variables.scss';

$btn-active-opacity: 0.1;

.topBtn {
  background-color: $secondary;
}
.activeBtn {
  border: 3px solid $primary;
  background-color: $secondary;
}
.cardFitHeight {
  max-height: 50vh; /* Fallback for browsers that do not support Custom Properties */
  max-height: calc(var(--vh, 1vh) * 50);
  // max-height: calc(100vh - 335px);
}
.cardText {
  max-height: 70px;
}
</style>
