<template>
  <div>
    <input type="text" v-model="nowInput">
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
      // nowInput: this.defaultText
    }
  },
  computed: {
    nowInput: {
      get() {
        return this.defaultText
      },
      set() {
        this.handleInput()
      }
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
