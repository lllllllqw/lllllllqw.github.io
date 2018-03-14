<template>
  <div ref="container" :class="{'fade-in-animation': enableHtml}" class="cv-editor">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{result}}</pre>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'cv-editor',
  props: {
    markdown: {
      type: String,
      required: true,
      default: ''
    },
    enableHtml: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    result() {
      return this.enableHtml ? marked(this.markdown) : this.markdown
    }
  },
  methods: {
    goBottom() {
        this.$refs.container.scrollTop = 100000
      }
  }
}
</script>

<style>
  .fade-in-animation {
    animation: flip 2s;
  }

  @keyframes flip {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

