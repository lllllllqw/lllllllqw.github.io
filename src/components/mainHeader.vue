<template>
  <div class="main-header" :style="{'background-color': isScrolled ? '#fff':'#20A6F7'}">
    <div class="right-menu">
      <div>
        <button @click="toogleFullScreen">{{isFullScreen?"退出全屏":"全屏模式"}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isFullScreen: false
      }
    },
    computed: {
      isScrolled: function () {
        return this.$store.state.layout.scrollY !== 0
      }
    },
    methods: {
      toogleFullScreen: function () {
        if (this.isFullScreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
          this.isFullScreen = false
        } else {
          var docElm = document.documentElement
          // W3C
          if (docElm.requestFullscreen) {
            docElm.requestFullscreen()
          } else if (docElm.mozRequestFullScreen) {
            // FireFox
            docElm.mozRequestFullScreen()
          } else if (docElm.webkitRequestFullScreen) {
            // Chrome等
            docElm.webkitRequestFullScreen()
          } else if (docElm.msRequestFullscreen) {
            // IE11
            docElm.msRequestFullscreen()
          }
          this.isFullScreen = true
        }
      }
    },
    mounted: function () {
      var th = this
      window.onscroll = function () {
        th.$store.state.layout.scrollY = window.scrollY
      }
    }
  }

</script>

<style lang="scss">
  .main-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 80px;
    border-bottom: 1px solid #ddd;
    transition: background-color 1.5s;
    .right-menu {
      float: right;
      &>* {
        line-height: 80px;
        display: inline-block;
      }
      .user-avatar {
        height: 60px;
        width: 60px;
      }
    }
  }

</style>
