<template>
  <div @contextmenu.prevent="look30S">
    <button @click.exact="look30S">点我</button>
    <input type="text" v-model="value" @input="look30S">
  </div>
</template>

<script>
import _30S from '30-seconds-of-code'
import {
  requireParameter
} from '../utils/util'
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    look30S(e) {
      console.log(this.value)
      console.log(e.target.tagName, e.target.parentNode.tagName ? e.target.parentNode.tagName : '没有父级')
      console.log(_30S)
      console.log(requireParameter(1))
    }
  },
  mounted() {

  }
}
</script>
