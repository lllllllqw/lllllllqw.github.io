<template>
  <div>
    <input type="text" v-model="nowInput" @input="handleInput">
  </div>
</template>

<script>
export default {
  model: {
    prop: 'defaultText',
    event: 'input'
  },
  props: {
    defaultText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      nowInput: this.defaultText
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.nowInput)
    },
    changeValue(value) {
      this.nowInput = value
    }
  }
}
</script>

<style>

</style>
