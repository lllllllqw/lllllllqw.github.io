<template>
  <div>
    {{msg}}
    <img :src="msg" @click="test">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '123'
    }
  },
  methods: {
    test() {
      this.$emit('click')
      console.log('点了')
    }
  }
}
</script>

<style>

</style>
