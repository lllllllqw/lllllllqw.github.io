<template>
  <div>
    {{markdown}}
  </div>
</template>

<script>
export default {
  name: 'cv-editor',
  props: {
    markdown: {
      type: String,
      reqiored: true,
      default: ''
    },
    enableHtml: {
      type: Boolean,
      reqiored: true,
      default: false
    }
  }
}
</script>
