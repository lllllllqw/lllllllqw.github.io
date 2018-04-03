<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div>父组件</div>
    <input type="text" v-model="defaultText">
    <div>子组件</div>
    <my-input v-model="defaultText"></my-input>
  </div>
</template>

<script>
  // import MyInput from '../components/MyInput'
  // import MyInput from '../components/MyInputOther.vue'
  import MyInput from '../components/MyInputOtherTwo.vue'
  export default {
    name: 'home',
    // 向所有的子孙后代注入这个值,通过inject接收
    provide: {
      pName: '提供的名字'
    },
    components: {
      MyInput
    },
    watch: {
    },
    data() {
      return {
        defaultText: "1"
      }
    },
    methods: {},
    mounted() {}
  }
</script>