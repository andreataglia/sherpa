<template>
  <v-card class="mx-auto my-2 text-left" width="350">
    <v-row>
      <v-col cols="12" class="py-0">
        <v-container fluid class="py-0">
          <v-row>
            <v-col
              v-for="media in getAmbassadorById.media"
              :key="media.id"
              class="d-flex child-flex pa-0"
              cols="4"
            >
              <v-card
                flat
                class="d-flex"
                @click.stop="openMediaDialog(media.isVideo, media.id)"
                tile
              >
                <!-- :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" -->
                <v-img
                  :src="getMediaThumbUrl(media.id)"
                  :lazy-src="getMediaThumbUrl(media.id)"
                  aspect-ratio="1"
                  class="grey lighten-2 white--text align-end"
                >
                  <v-card-title class="pl-1 pb-0 body-1"
                    ><v-icon dark>{{
                      media.isVideo ? 'mdi-video' : 'mdi-file-image'
                    }}</v-icon
                    >150</v-card-title
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
              </v-card>
            </v-col>
          </v-row>
          <v-dialog
            ref="mediaDialog"
            persistent
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            dark
          >
            <v-card>
              <v-sheet>
                <video
                  v-if="dialogIsVideo"
                  class="mediaBox"
                  ref="videoBox"
                  @click.stop="videoClick()"
                >
                  <source :src="videoSrc" type="video/webm" />
                </video>
                <v-img
                  v-else
                  ref="imageBox"
                  :src="imageSrc"
                  class="mediaBox"
                  aspect-ratio="1"
                  contain
                >
                </v-img>
              </v-sheet>
              <v-btn
                bottom
                color="primary"
                elevation="8"
                fixed
                left
                @click.stop="closeMediaDialog()"
              >
                <v-icon>mdi-arrow-left-bold</v-icon>
                Back
              </v-btn>
              <v-btn
                rounded
                bottom
                color="secondary"
                elevation="0"
                fixed
                right
                @click.stop="dialog = false"
              >
                120
                <v-icon class="ml-2">mdi-heart</v-icon>
              </v-btn>
            </v-card>
          </v-dialog>
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
    publicPath: process.env.BASE_URL,
    videoPlaying: false,
    dialogIsVideo: true,
    videoSrc: '#',
    imageSrc: '#'
  }),
  methods: {
    openMediaDialog(isVideo, source) {
      this.dialogIsVideo = isVideo;
      this.dialog = true;
      this.$nextTick(function() {
        let video = this.$refs.videoBox;
        if (isVideo) {
          this.videoSrc = this.getMediaUrl(isVideo, source);
          video.play();
          this.videoPlaying = true;
          video.loop = true;
        } else {
          this.imageSrc = this.getMediaUrl(isVideo, source);
        }
      });
    },
    closeMediaDialog() {
      if (this.dialogIsVideo) {
        this.$refs.videoBox.pause();
        this.videoPlaying = false;
        this.$refs.videoBox.currentTime = 0;
      }
      this.dialog = false;
    },
    videoClick() {
      if (this.videoPlaying) {
        this.$refs.videoBox.pause();
        this.videoPlaying = false;
      } else {
        this.$refs.videoBox.play();
        this.videoPlaying = true;
      }
    },
    getMediaUrl(isVideo, source) {
      if (isVideo) {
        return this.publicPath + 'video/amb' + this.id + '-' + source + '.mp4';
      } else {
        return (
          this.publicPath +
          'img/ambassadorGallery/amb' +
          this.id +
          '-' +
          source +
          '.jpg'
        );
      }
    },
    getMediaThumbUrl(source) {
      return (
        this.publicPath +
        'img/ambassadorGallery/amb' +
        this.id +
        '-' +
        source +
        '-thumb.jpg'
      );
    }
  },
  computed: {
    getAmbassadorById() {
      return this.$store.getters.getAmbassadorById(parseInt(this.id));
    }
  }
};
</script>

<style scoped>
.mediaBox {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
