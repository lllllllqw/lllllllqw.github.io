<template>
  <div id="app">
    <style-editor :code="msg"></style-editor>
    <cv-editor></cv-editor>
  </div>
</template>

<script>
  import msg from '../static/me.js'
  import StyleEditor from './components/StyleEditor.vue'
  import CvEditor from './components/CvEditor.vue'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      CvEditor
    },
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
</style>
