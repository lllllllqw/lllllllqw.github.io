<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
  import axios from 'axios'
  import {session,cookie} from '../utils/store'
  export default {
    name: 'home',
    components: {},
    mounted() {
      cookie.set('user', 'lqw', 9999999)
      setTimeout(() => {
        console.log(cookie.get('user'))
      }, 1000)
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