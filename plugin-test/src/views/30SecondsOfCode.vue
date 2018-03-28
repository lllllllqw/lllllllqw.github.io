<template>
  <div @contextmenu.prevent="look30S">
    <button @click.exact="look30S">点我</button>
    <input type="text" v-model="value" @input="look30S">
  </div>
</template>

<script>
  import _30S from '30-seconds-of-code'
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      look30S(e) {
        console.log(this.value)
        console.log(e.target.tagName,e.target.parentNode.tagName?e.target.parentNode.tagName:'没有父级')
      }
    },
    mounted() {
      console.log(_30S)
    }
  }
</script>