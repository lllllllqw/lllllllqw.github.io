<template>
  <div class="style-editor-container">
    <pre v-html="code"></pre>
  </div>
</template>

<script>
export default {
  name: 'style-editor',
  props: {
    code: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
