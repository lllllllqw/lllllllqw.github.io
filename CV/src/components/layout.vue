<template>
  <div>
    <pre v-html="msg"></pre>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      getSelfIntroduce() {
        this.$axios.get('../../static/me.txt')
          .then(res => {
            this.writeMsg(res.data)
          })
          .catch(e => {
            console.log(e)
          })
      },
      writeMsg(msg) {
        let i = 0
        let interval
        let char
        interval = setInterval(() => {
          char = msg.substring(i, i + 1)
          i++
          this.msg += char
          if (char == '\n') {
            console.log(i,char)
          }
          if (i >= msg.length) {
            clearInterval(interval)
          }
        }, 50)
      }
    },
    mounted() {
      this.getSelfIntroduce()
    }
  }

</script>

<style lang="scss">
  .layout-page {
    height: 100px;
  }

</style>
