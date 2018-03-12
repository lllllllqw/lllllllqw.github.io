<template>
  <div id="app">
    <style-editor :code="styleMsg"></style-editor>
    <cv-editor :markdown="markdownMsg"></cv-editor>
  </div>
</template>

<script>
  import {me as fullMsg, fullMarkdown} from '../static/me.js'
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
        styleMsg: "",
        markdownMsg: "",
        interval: 50
      }
    },
    methods: {
      progressivelyShowStyle: function (n) {
        return new Promise((resolve, reject) => {
          let {
            interval
          } = this
          let showStyle = (async function () {
            let nStyle = fullMsg[n]
            if (!nStyle) {
              return
            }
            // 计算0 - n组字符总数
            let allLength = fullMsg.filter((val, index) => {
              return index <= n
            }).map(item => {
              return item.length
            }).reduce((all, now) => {
              return all + now
            }, 0)
            // 获取0 - (n -1)组字符串长度
            let prefixLength = allLength - nStyle.length
            if(this.styleMsg.length < allLength) {
              // 当前n组已经打出长度
              let l = this.styleMsg.length - prefixLength
              let char = nStyle.substring(l, l + 1) || ' '
              this.styleMsg += char
              // 如果出现换行符,去底部
              if(nStyle.substring(l-1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  // this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout( showStyle, interval)
            }
            else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = fullMarkdown.length
          let { interval } = this
          let showResume = () => {
            if (this.markdownMsg.length < length) {
              this.markdownMsg = fullMarkdown.substring(0, this.markdownMsg.length + 1)
              let lastChar = this.markdownMsg[this.markdownMsg.length - 1]
              let prevChar = this.markdownMsg[this.markdownMsg.length - 2]
              if(prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => {
                  // this.$refs.resumeEditor.goBottom()
                })
              }
              setTimeout(showResume, interval)
            }else {
              resolve()
            }
          }
          showResume()
        })
      }
    },
    mounted() {
      this.progressivelyShowStyle(0)
      this.progressivelyShowResume()
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
