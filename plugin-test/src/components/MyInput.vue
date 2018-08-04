<template>
  <div>
    <input type="text" v-model="nowInput">
  </div>
</template>

<script>
export default {
  // 默认prop为value,event为input,此处为自定义
  // 使用checkbox之类可能需要占用value属性
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
  computed: {
    nowInput: {
      get() {
        return this.defaultText
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style>
</style>
