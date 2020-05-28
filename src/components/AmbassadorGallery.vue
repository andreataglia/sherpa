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
                @click.stop="openMediaDialog(media.id)"
                tile
                elevation="3"
              >
                <v-img
                  :src="getMediaThumbUrl(media.id)"
                  :lazy-src="getMediaThumbUrl(media.id)"
                  aspect-ratio="1"
                  class="grey lighten-2 white--text align-end"
                >
                  <v-card-title class="pl-1 pb-0 body-1"
                    ><v-icon dark>{{ media.isVideo ? 'mdi-video' : '' }}</v-icon
                    >{{ media.likes }}
                  </v-card-title>
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
            persistent
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            dark
            eager
          >
            <div>
              <transition-group
                enter-active-class="transition ease-out duration-100 transform"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75 transform"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div
                  v-for="media in getAmbassadorById.media"
                  :key="media.id"
                  :class="{ hidden: mediaId != media.id }"
                  v-touch="{
                    left: () => swipe('Left'),
                    right: () => swipe('Right'),
                    down: () => closeMediaDialog(),
                  }"
                >
                  <video
                    v-if="media.isVideo"
                    class="mediaBox"
                    :ref="'videoBox' + media.id"
                    @click.stop="videoClick()"
                    playsinline
                    loop
                  >
                    <source
                      :src="getMediaUrl(media.isVideo, media.id)"
                      type="video/mp4"
                    />
                  </video>
                  <v-img
                    v-else
                    :src="getMediaUrl(media.isVideo, media.id)"
                    class="mediaBox"
                    aspect-ratio="1"
                    contain
                  >
                  </v-img>
                </div>
              </transition-group>
              <v-icon
                id="playButton"
                v-if="showPlayButton"
                @click.stop="videoClick()"
                size="80"
                >mdi-play-circle
              </v-icon>
              <v-banner
                two-line
                @click:icon="mediaShowText = false"
                id="chip-desc"
                v-model="mediaShowText"
                color="secondary"
                class="pr-3"
                transition="slide-y-transition"
              >
                <v-icon slot="icon" size="30">
                  mdi-close-circle
                </v-icon>
                {{ currentMediaInfo.desc }}
              </v-banner>
              <v-btn
                bottom
                color="primary"
                elevation="8"
                fixed
                height="50"
                left
                @click.stop="closeMediaDialog()"
              >
                <v-icon>mdi-arrow-left-bold</v-icon>
                Back
              </v-btn>
              <v-btn
                rounded
                bottom
                color="primary"
                elevation="8"
                fixed
                height="50"
                right
                @click.stop="putLike()"
                light
              >
                {{ currentMediaInfo.likes }}
                <v-icon class="ml-2">mdi-heart</v-icon>
              </v-btn>
            </div>
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
    id: Number,
  },
  data: () => ({
    dialog: false,
    publicPath: process.env.BASE_URL,
    videoPlaying: false,
    dialogIsVideo: true,
    mediaLikes: 0,
    mediaText: '',
    mediaShowText: true,
    mediaId: -1,
    likesPut: [],
  }),
  methods: {
    openMediaDialog(mediaId) {
      this.mediaId = mediaId;
      this.dialog = true;
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      this.mediaShowText = true;
      // autoplay the video
      if (this.currentMediaInfo.isVideo) {
        this.playVideo();
      }
    },
    closeMediaDialog() {
      this.dialog = false;
      this.stopVideo();
    },
    swipe(direction) {
      //TODO animation
      this.stopVideo();
      if (direction == 'Right') {
        this.mediaId = this.mediaId == 8 ? 0 : this.mediaId + 1;
      } else {
        this.mediaId = this.mediaId == 0 ? 8 : this.mediaId - 1;
      }
    },
    videoClick() {
      if (this.videoPlaying) {
        this.stopVideo();
      } else {
        this.playVideo();
      }
    },
    playVideo() {
      let video = this.$refs['videoBox' + this.mediaId][0];
      this.videoPlaying = true;
      video.play();
    },
    stopVideo() {
      if (this.currentMediaInfo.isVideo) {
        try {
          let video = this.$refs['videoBox' + this.mediaId][0];
          video.pause();
          this.videoPlaying = false;
          video.currentTime = 0;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
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
          mediaId: this.mediaId,
        });
        this.likesPut.push(this.mediaId);
      }
    },
  },
  computed: {
    getAmbassadorById() {
      let id = this.id;
      console.log();
      return this.$store.getters.getAmbassadorById(parseInt(id));
    },
    currentMediaInfo() {
      return this.mediaId > -1
        ? this.getAmbassadorById.media[this.mediaId]
        : {};
    },
    showPlayButton() {
      return this.currentMediaInfo.isVideo && !this.videoPlaying;
    },
  },
  // watch: {
  //   mediaId: function() {
  //     this.videoPlaying = false;
  //   },
  // },
};
</script>

<style>
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
#playButton {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -40px;
  margin-left: -40px;
  opacity: 0.9;
  -moz-opacity: 0.9; /* Firefox and Mozilla browsers */
  -webkit-opacity: 0.9; /* WebKit browser e.g. Safari */
  filter: alpha(opacity=90); /* For IE8 and earlier */
}
#chip-desc {
  max-width: 90%;
  position: absolute;
  top: 10px;
  left: 5%;
  border-radius: 2em;
  padding-left: 8px;
  opacity: 0.9;
  -moz-opacity: 0.9; /* Firefox and Mozilla browsers */
  -webkit-opacity: 0.9; /* WebKit browser e.g. Safari */
  filter: alpha(opacity=90); /* For IE8 and earlier */
}
.v-banner__wrapper {
  padding: 3px !important;
}
</style>
