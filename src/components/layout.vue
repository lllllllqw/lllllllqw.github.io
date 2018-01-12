<template>
  <div>
    <main-header></main-header>
    <div class="layout-page"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from './mainHeader'

export default {
  components: {
    mainHeader
  }
}
</script>

<style lang="scss">
  .layout-page {
    height: 100px;
  }
</style>


