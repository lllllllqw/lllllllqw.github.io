<template>
  <div>
    {{total}}
    <button @click="onIncrease"> + </button>
    <button @click="onDecrease"> - </button>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    onIncrease: {
      type: Function,
      default: () => {}
    },
    onDecrease: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {
    console.log('容器组件已挂载')
  }
}
</script>

<style>

</style>
