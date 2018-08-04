<template>
  <div>
    {{someData.text}}
    <button @click="changeParentData">changeData</button>
  </div>
</template>

<script>
export default {
  props: {
    someData: {
      type: Object,
      default: () => ({})
    },
    changeDataFn: {
      type: Function,
      default: () => () => {}
    }
  },

  methods: {
    changeParentData() {
      this.changeDataFn('some other data')
      console.log(this.someData.text)
    }
  }
}
</script>

<style scoped>
.component {
  padding-left: 20px;
}
</style>
