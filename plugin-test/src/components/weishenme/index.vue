<template>
  <div>
    <child :some-data="someData" :change-data-fn="changeDataFn"></child>
  </div>
</template>

<script>
import child from './child'

export default {
  components: {
    child
  },

  data() {
    return {
      someData: {
        text: 'message'
      }
    }
  },

  methods: {
    changeDataFn(message) {
      this.someData.text = message
    }
  },

  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>
</style>
