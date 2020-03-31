<template>
  <v-container fluid style="max-width:460px">
    <v-row no-gutters class="fillHeight text-center mx-auto">
      <div class="subtitle-2 mb-1 flexStatic">HOW IT WORKS</div>
      <v-card class="mb-2" elevation="8" max-height="55">
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
      <v-window v-model="onboarding">
        <v-window-item v-for="pic in pics" :key="pic.id" eager>
          <v-card
            light
            tile
            class="pb-2 capHeight d-flex flex-column"
            elevation="8"
          >
            <v-card-text class="font-weight-small body-2 text-center cardText"
              >{{ pic.text }}
            </v-card-text>
            <v-img
              :src="getGifName(pic.id)"
              :lazy-src="getLazyImg(pic.id)"
              eager
              class="mx-auto capHeightImage"
              contain
            ></v-img>
          </v-card>
        </v-window-item>
      </v-window>
      <v-btn
        v-if="parseInt(onboarding) < pics.length - 1"
        color="primary"
        width="100%"
        elevation="8"
        class="mt-4"
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
        color="primary"
        class="mt-4"
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
        text: `Browse through the local ambassadors`,
        icon: 'mdi-magnify'
      },
      {
        id: 1,
        text: `Create your team by adding the ones you wish`,
        icon: 'mdi-plus'
      },
      {
        id: 2,
        text: `We'll create a Whatsapp/Telegram group with them`,
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
    },
    getLazyImg(id) {
      return this.getGifName(id).substr(-4) + `_lazy.jpg`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

$btn-active-opacity: 0.1;

.topBtn {
  background-color: $secondary;
}
.activeBtn {
  border: 3px solid $primary;
  background-color: $secondary;
}
.cardText {
  padding-bottom: 0.5em;
  font-size: 2vh !important;
}

.capHeightImage {
  max-height: calc(100vh - 280px);
  max-width: 86%;
}

.capHeight {
  height: calc(100vh - 230px);
}
</style>
