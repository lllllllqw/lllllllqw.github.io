<template>
  <div>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>
</style>