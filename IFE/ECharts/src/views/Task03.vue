<template>
  <!-- 要求展示地图 -->
  <div ref="e-charts" class="e-charts"></div>
</template>

<script>
import { TheEarth } from '../assets/ne_110m_admin_0_countries'
export default {
  data() {
    return {
      charts: null
    }
  },
  methods: {
    initEcharts() {
      this.$echarts.registerMap('earth', TheEarth)
      this.charts = this.$echarts.init(this.$refs['e-charts'])
      this.charts.setOption({
        geo: {
          map: 'earth',
          roam: true,
          selectedMode: 'single'
        }
      })
    }
  },
  mounted() {
    this.initEcharts()
  }
}
</script>

