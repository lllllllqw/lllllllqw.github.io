<script>
export default {
  data() {
    return {
      text: '123'
    }
  },

  render(h) {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
    // return h('div', [this.$scopedSlots.default({
    //   text: this.text
    // })])
    return h('div', 111)
  }
}
</script>

<style>

</style>
