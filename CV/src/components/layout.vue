<template>
  <div>
    <pre v-html="msg"></pre>
  </div>
</template>

<script>
import msg from '../../static/me.js'

  export default {
    data() {
      return {
        msg: ""
      }
    },
    methods: {
      writeMsg(msg) {
        let i = 0
        let interval
        let char
        interval = setInterval(() => {
          char = msg.substring(i, i + 1)
          i++
          this.msg += char
          if (char == '\n') {
            console.log(i, char)
          }
          if (i >= msg.length) {
            clearInterval(interval)
          }
        }, 50)
      }
    },
    mounted() {
      this.writeMsg(msg)
    }
  }

</script>

<style lang="scss">
  .layout-page {
    height: 100px;
  }

</style>
