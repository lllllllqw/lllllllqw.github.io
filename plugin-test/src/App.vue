<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/30SecondsOfCode">30SecondsOfCode</router-link>
      <router-link to="/AboutElement">AboutElement</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
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


<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 120vh;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>