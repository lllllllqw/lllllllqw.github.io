<template>
  <div>
    <input type="text" v-model="inputValue" @input="handleInput">
  </div>
</template>

<script>
// 简单实现组件input跟父组件数据的双向绑定
export default {
  props: {
    defaultText: {
      type: String,
      default: ''
    }
  },
  watch: {
    defaultText(val) {
      this.inputValue = this.defaultText
    }
  },
  data() {
    return {
      inputValue: this.defaultText
    }
  },
  methods: {
    handleInput() {
      this.$emit('update:defaultText', this.inputValue)
    }
  }
}
</script>

<style>

</style>
