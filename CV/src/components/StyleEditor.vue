<template>
  <div class="style-editor" ref="container">
    <pre v-html="highlightedCode"></pre>
    <div class="code" v-html="codeInStyleTag"></div>
  </div>
</template>

<script>
  import Prismjs from 'prismjs'
  export default {
    name: 'style-editor',
    props: {
      code: {
        type: String,
        required: true,
        default: ''
      }
    },
    computed: {
      highlightedCode: function () {
        return Prismjs.highlight(this.code, Prismjs.languages.css)
      },
      codeInStyleTag: function () {
        return `<style>${this.code}</style>`
      }
    },
    methods: {
      goBottom() {
        this.$refs.container.scrollTop = 100000
      }
    }
  }

</script>

<style lang="scss">
  .code {
    display: none;
  }

</style>
