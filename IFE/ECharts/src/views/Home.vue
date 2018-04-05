<template>
  <div class="home-container">
    <div class="home-block" v-for="view of views" :key="view" @click="$router.push(`/${view}`)">
      {{view}}
    </div>
  </div>
</template>

<script>
import { views } from './viewsList.js'
export default {
  data() {
    return {
      views
    }
  }
}
</script>
