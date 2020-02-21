<template>
  <v-card class="mx-auto my-2 text-left" width="350">
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-container fluid>
          <v-row>
            <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
              <v-card flat class="d-flex">
                <v-dialog
                  persistent
                  v-model="dialog"
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                >
                  <template v-slot:activator="{ on }">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="
                        `https://picsum.photos/10/6?image=${n * 5 + 10}`
                      "
                      aspect-ratio="1"
                      class="grey lighten-2"
                      v-on="on"
                      @click="playVideo()"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </template>
                  <v-card>
                    qui video
                    <video class="videoPlayer">
                      <source
                        src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm"
                        type="video/webm"
                      />
                      Your browser does not support HTML5 video.
                    </video>
                    e qui
                  </v-card>
                  <!-- <v-btn
                    bottom
                    color="primary"
                    elevation="8"
                    dark
                    fixed
                    left
                    @click="dialog = false"
                  >
                    <v-icon>mdi-arrow-left-bold</v-icon>
                    Back
                  </v-btn> -->
                </v-dialog>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'AmbassadorGallery',
  props: {
    id: Number
  },
  data: () => ({
    dialog: false,
    publicPath: process.env.BASE_URL
  }),
  methods: {
    playVideo() {
      // console.log('ciao')
    }
  }
};
</script>

<style scoped>
.videoPlayer {
  height: 700px;
  max-width: 100%;
}
</style>
