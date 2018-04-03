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
    },
    // 接收祖先组件传来的provide
    inject: ['pName'],
    mounted() {
      console.log(this.pName)
    }
  }
</script>