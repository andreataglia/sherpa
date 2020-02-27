<template>
  <v-card class="pa-1" elevation="8">
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
                class="d-flex mediaCard"
                @click.stop="
                  openMediaDialog(
                    media.isVideo,
                    media.id,
                    media.likes,
                    media.desc
                  )
                "
                tile
                elevation="3"
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
                    ><v-icon dark>{{ media.isVideo ? 'mdi-video' : '' }}</v-icon
                    >{{ media.likes }}</v-card-title
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
                  autoplay="true"
                  @click.stop="videoClick()"
                >
                  <source :src="videoSrc" type="video/mp4" />
                </video>
                <v-img
                  v-else
                  ref="imageBox"
                  :src="imageSrc"
                  class="mediaBox"
                  aspect-ratio="1"
                  contain
                  v-touch="{
                    left: () => swipe('Left'),
                    right: () => swipe('Right'),
                    up: () => swipe('Up'),
                    down: () => swipe('Down')
                  }"
                >
                </v-img>
              </v-sheet>
              <v-chip
                v-if="mediaShowText"
                class="ma-2 mediaText"
                close
                @click:close="mediaShowText = false"
                color="secondary"
                text-color="#263238"
              >
                {{ mediaText }}
              </v-chip>
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
                @click.stop="putLike()"
                light
              >
                {{ mediaLikes }}
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
    imageSrc: '#',
    mediaLikes: 0,
    mediaText: '',
    mediaShowText: true,
    mediaId: 0,
    likesPut: []
  }),
  methods: {
    openMediaDialog(isVideo, mediaId, likes, mediaText) {
      this.dialogIsVideo = isVideo;
      this.dialog = true;
      this.mediaLikes = likes;
      this.mediaId = mediaId;
      this.mediaText = mediaText;
      this.mediaShowText = true;
      this.$nextTick(function() {
        let video = this.$refs.videoBox;
        if (isVideo) {
          this.videoSrc = this.getMediaUrl(isVideo, mediaId);
          video.playsinline = true;
          video.play();
          this.videoPlaying = true;
          video.loop = true;
        } else {
          this.imageSrc = this.getMediaUrl(isVideo, mediaId);
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
    getMediaUrl(isVideo, mediaId) {
      if (isVideo) {
        return (
          this.publicPath +
          'ambassadorGallery/amb' +
          this.id +
          '-' +
          mediaId +
          '.mp4'
        );
      } else {
        return (
          this.publicPath +
          'ambassadorGallery/amb' +
          this.id +
          '-' +
          mediaId +
          '.jpg'
        );
      }
    },
    getMediaThumbUrl(mediaId) {
      return (
        this.publicPath +
        'ambassadorGallery/amb' +
        this.id +
        '-' +
        mediaId +
        // '-thumb.jpg'
        '.jpg'
      );
    },
    putLike() {
      if (!this.likesPut.includes(this.mediaId)) {
        this.$store.commit('addLike', {
          ambId: this.id,
          mediaId: this.mediaId
        });
        this.likesPut.push(this.mediaId);
        this.mediaLikes += 1;
      }
    },
    swipe(direction) {
      // eslint-disable-next-line no-console
      console.log(direction);
      if (direction == 'Right') {
        this.mediaLikes++;
      } else {
        this.mediaLikes--;
      }
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

.mediaCard {
  padding: 1px;
}

.mediaText {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
