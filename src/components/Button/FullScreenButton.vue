<template>
  <div>
    <i :class="isFullscreen?'glyphicon glyphicon-move':'glyphicon glyphicon-fullscreen'" @click="toggleFullScreen"/>
  </div>
</template>

<script>

export default {
  name: 'FullScreenButton',
  data() {
    return {
      isFullscreen: false
    }
  },
  methods: {
    toggleFullScreen() {
      this.isFullscreen = !this.isFullscreen
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen()
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
    }
  }
}
</script>

<style scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
