<template>
  <span>
    <video ref="videoBox">
      <source :src="source" type="video/webm" />
    </video>
    <v-btn ref="fakeBtn" @click="play()"></v-btn>
  </span>
</template>
<script>
export default {
  name: 'VideoBox',
  props: {
    source: String
  },
  data() {},
  ready() {},
  mounted() {
    this.$refs.fakeBtn.click();
  },
  methods: {
    play() {
      this.$refs.videoBox.play();
    }
  }
};
</script>
