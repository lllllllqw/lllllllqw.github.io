<template>
  <div class="about">
    <!-- <input type="text" v-model="city">
    <button @click="fetchWeather">查询</button>
    <p>{{weatherData.city || ''}}</p>
    <p>{{weatherData.week || ''}}</p>
    <p>{{weatherData.weather || ''}}</p> -->
    <div v-for="person in data" :key="person.dataId">{{`${person.name} - ${person.dataId}`}}</div>
    <el-button @click="changeDataId">id++</el-button>
  </div>
</template>
<script>
import { fetchWeather } from '../api/weather'

/**
 * @param  {[]} oldArr 传入旧的数组
 * @param  {[] || string} newVal 传入新的数组或者某一项的新值
 * @param  {number} index 如果传入第二项是新值则补上改变的index
 */
const beforeArrayChange = (oldArr, newVal, index) => {
  if (newVal instanceof Array) {
    
  } else {
    
  }
}

export default {
  data() {
    return {
      city: '岳阳',
      weatherData: {},
      data: [
        {
          name: 'John Brown',
          dataId: 11,
          data: 0
        }
      ],
      dataFromStore: [
        {
          dataId: 11,
          data: 100
        },
        {
          dataId: 22,
          data: 200
        },
        {
          dataId: 33,
          data: 300
        },
        {
          dataId: 44,
          data: 400
        }
      ]
    }
  },

  watch: {
    data: {
      handler(oldVal, newVal) {
        console.log(oldVal, newVal)
      },
      deep: true
    }
  },

  methods: {
    changeDataId() {
      // 改变一个值的情况
      // beforeArrayChange(this.data, this.data[0].data + 1, 0)
      // this.$set(this.data[0], 'data', this.data[0].data + 1)

      // 改变数组,长度不变
      // const newData = [
      //   {
      //     name: 'John Brown',
      //     data: 13,
      //     dataId: 11,
      //   }
      // ]
      // beforeArrayChange(this.data, newData)
      // this.data = newData

      // 改变数组,长度增加

      // 改变数组,长度减小
    },
    fetchWeather() {
      console.log(this.city)
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

