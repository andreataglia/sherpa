<template>
  <div class="block">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-1">
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
                  class="d-flex pa-1"
                  @click.stop="openMediaDialog(media.id)"
                >
                  <v-img
                    :src="getMediaThumbUrl(media.id)"
                    :lazy-src="getMediaThumbUrl(media.id)"
                    aspect-ratio="1"
                    class="grey lighten-2 white--text align-end"
                    gradient="to bottom, rgba(0,0,0,0), 90%, rgba(0,0,0,0.9)"
                  >
                    <v-card-title class="pl-1 pb-0 body-1 text-gray-200"
                      ><v-icon dark>{{
                        media.isVideo ? 'mdi-video' : ''
                      }}</v-icon
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

              <div
                v-show="dialog"
                class="z-40 overflow-hidden fixed bottom-0 inset-x-0 px-4 pb-6 inset-0 p-0 flex items-center justify-center"
              >
                <transition
                  enter-active-class="transition ease-out duration-100 transform"
                  enter-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75 transform"
                  leave-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-900 opacity-85"></div>
                  </div>
                </transition>

                <v-banner
                  two-line
                  @click:icon="mediaShowText = false"
                  id="chip-desc"
                  v-model="mediaShowText"
                  class="absolute top-0 left-0 ml-2 mt-2 z-50 max-w-xs sm:max-w-xl rounded-lg sm:rounded-full opacity-75 bg-red-700 sm:py-0"
                  transition="slide-y-transition"
                >
                  <v-icon slot="icon" size="30">
                    mdi-close-circle
                  </v-icon>
                  <span class="pr-3 text-sm">
                    {{ currentMediaInfo.desc }}
                  </span>
                </v-banner>

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
                    </div>
                  </transition-group>
                  <button
                    v-if="showPlayButton"
                    @click.stop="videoClick()"
                    class="absolute top-auto left-auto -mt-2 -ml-5 opacity-75 hover:text-gray-500 text-white items-center"
                  >
                    <svg
                      fill="currentColor"
                      class="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"
                      />
                    </svg>
                  </button>
                  <button
                    @click.stop="swipe('Left')"
                    class="hidden sm:inline-flex absolute top-auto left-0 ml-5 opacity-75 hover:text-gray-500 text-white items-center"
                  >
                    <svg
                      fill="currentColor"
                      class="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"
                      />
                    </svg>
                  </button>
                  <button
                    @click.stop="swipe('Right')"
                    class="hidden sm:inline-flex absolute top-auto right-0 mr-5 opacity-75 hover:text-gray-500 text-white items-center"
                  >
                    <svg
                      fill="currentColor"
                      class="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>
                    </svg>
                  </button>
                </div>
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
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
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
      document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
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
          // video.currentTime = 0;
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
  created() {
    document.getElementsByTagName('html')[0].scrollTop = 200;
  },
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
.v-banner__wrapper {
  padding: 3px !important;
  border: 0 !important;
}
</style>
