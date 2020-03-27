<template>
  <v-container fluid style="max-width:600px">
    <v-row no-gutters class="fillHeight text-center mx-auto">
      <div class="subtitle-2 mb-1 flexStatic">HOW IT WORKS</div>
      <v-card class="mb-2 flexStatic" elevation="8" max-height="55">
        <v-card-actions>
          <v-item-group
            v-model="onboarding"
            class="text-center d-flex justify-space-between"
            style="width:100%;"
            mandatory
          >
            <v-item
              v-for="pic in pics"
              :key="pic.id"
              v-slot:default="{ active, toggle }"
            >
              <v-btn
                fab
                small
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
      <v-card elevation="8" class="mb-4 flexItem flexStatic">
        <v-window v-model="onboarding">
          <v-window-item v-for="pic in pics" :key="pic.id">
            <v-card light tile class="pb-2">
              <v-card-text
                class="font-weight-small body-2 text-center cardText"
                >{{ pic.text }}</v-card-text
              >
              <v-img
                :src="getGifName(pic.id)"
                class="mx-2 cardFitHeight"
                contain
              ></v-img>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card>
      <v-btn
        v-if="parseInt(onboarding) < pics.length - 1"
        color="primary"
        class="flexStatic"
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
        elevation="8"
        class="flexStatic"
        color="primary"
        width="100%"
        to="/team"
        height="50"
        >Let's Go
      </v-btn>
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
        text: `In team page you'll find plenty of nice people. `,
        icon: 'mdi-magnify'
      },
      {
        id: 1,
        text: `In team page you'll find plenty of nice people.`,
        icon: 'mdi-plus'
      },
      {
        id: 2,
        text: `In team page you'll find plenty of nice people.`,
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
    },
    getGifName(id) {
      return `${this.publicPath}img/sherpa_howitworks_${id}.gif`;
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
  max-height: calc(100vh - 280px);
  // align-items: align-self;
}
.cardText {
  padding-bottom: 0.5em;
}

.flexItem {
  flex: 1;
  align-items: align-self;
}

.flexStatic {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
