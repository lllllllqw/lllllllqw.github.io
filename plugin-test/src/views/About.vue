<template>
  <div class="about">
    <input type="text" v-model="city">
    <button @click="fetchWeather">查询</button>
    <p>{{weatherData.city || ''}}</p>
    <p>{{weatherData.week || ''}}</p>
    <p>{{weatherData.weather || ''}}</p>
  </div>
</template>
<script>
import { fetchWeather } from '../api/weather'
export default {
  data() {
    return {
      city: '岳阳',
      weatherData: {}
    }
  },
  methods: {
    fetchWeather() {
      fetchWeather(this.city).then(res => {
        this.weatherData = res.data.result
        console.log(res.data)
      })
    }
  },
  mounted() {
    this.fetchWeather()
  }
}
</script>

