<template>
  <div>
    <input ref="input" type="text" @input="onPasswordChange" @dragend="() => false">
    <p>记录的密码: {{password}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ''
    }
  },
  methods: {
    onPasswordChange(e) {
      const val = e.target.value
      if (val.length < this.password.length) {
        this.password = this.password.split('').splice(0, val.length).join('')
      } else if (val.length - this.password.length === 1) {
        this.password += val[val.length - 1]
      } else {
        this.password += val.split('').splice(this.password.length, val.length - this.password.length).join('')
      }
      e.target.value = val.split('').map(() => '*').join('')
    },
    onPause() {
      console.log('粘贴')
    }
  },
  mounted() {
    this.$refs.input.onpaste = () => {
      console.log('粘贴')
    }
  }
}
</script>

<style>

</style>
