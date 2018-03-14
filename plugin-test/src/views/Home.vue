<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios'
  export default {
    name: 'home',
    components: {},
    mounted() {
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