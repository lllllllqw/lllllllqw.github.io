<template>
  <div id="app">
    <style-editor ref="styleEditor" :code="styleMsg"></style-editor>
    <cv-editor ref="cvEditor" :markdown="markdownMsg" :enableHtml="enableHtml"></cv-editor>
  </div>
</template>

<script>
  import {
    me as fullMsg,
    fullMarkdown
  } from '../public/me.js'
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
        enableHtml: false,
        interval: 30
      }
    },
    methods: {
      startWriting:async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        this.enableHtml = true
      },
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
            if (this.styleMsg.length < allLength) {
              // 当前n组已经打出长度
              let l = this.styleMsg.length - prefixLength
              let char = nStyle.substring(l, l + 1) || ' '
              this.styleMsg += char
              // 如果出现换行符,去底部
              if (nStyle.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = fullMarkdown.length
          let {
            interval
          } = this
          let showResume = () => {
            if (this.markdownMsg.length < length) {
              this.markdownMsg = fullMarkdown.substring(0, this.markdownMsg.length + 1)
              let lastChar = this.markdownMsg[this.markdownMsg.length - 1]
              let prevChar = this.markdownMsg[this.markdownMsg.length - 2]
              if (prevChar === '\n' && this.$refs.cvEditor) {
                this.$nextTick(() => this.$refs.cvEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    },
    mounted() {
      this.startWriting()
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
