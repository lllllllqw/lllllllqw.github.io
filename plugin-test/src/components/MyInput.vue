<template>
  <div>
    <input type="text" v-model="nowInput" @input="handleInput">
  </div>
</template>

<script>
// 简单实现组件input跟父组件数据的双向绑定
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
    }
  }
}
</script>

<style>

</style>
