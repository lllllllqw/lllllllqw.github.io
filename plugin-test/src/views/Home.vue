<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div>父组件</div>
    <input type="text" v-model="defaultText">
    <div>子组件</div>
    <my-input :defaultText.sync="defaultText"></my-input>
  </div>
</template>

<script>
  import MyInput from '../components/MyInput'
  // import MyInput from '../components/MyInputOther.vue'
  export default {
    name: 'home',
    components: {
      MyInput
    },
    watch: {
    },
    data() {
      return {
        defaultText: ""
      }
    },
    methods: {},
    mounted() {}
  }
</script>