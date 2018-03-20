<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    local,
    cookie
  } from '../utils/store'
  export default {
    name: 'home',
    components: {},
    mounted() {
      cookie.set('user', {
        name: 'lqw',
        job: 'FE'
      }, 1000, '/')
      console.log(cookie.get('user'))
      console.log(cookie.has('user'))
      cookie.clear()
      console.log(cookie.get('user'))
      console.log(cookie.has('user'))
      
      local.set('lqw', {name: 'lqw', job: 'FE'})
      const getUser = () => {
        return this.$fetch.get('/mock')
      }
      const getTimestamp = () => {
        return this.$fetch.get('/mock/timestamp')
      }
      axios.all([getUser(), getTimestamp()])
        .then(axios.spread(function (acct, perms) {
          console.log(acct, perms)
        }))
    }
  }
</script>