<template>
  <!-- 要求在一个图表中展示柱状图跟折线图 -->
  <div ref="barAndLine" class="e-charts"></div>
</template>
<script>
import { codeSubmission, bugResolve } from '../../static/e-charts-data'
export default {
  data() {
    return {
      charts: null
    }
  },
  methods: {
    initEcharts() {
      this.charts = this.$echarts.init(this.$refs.barAndLine)
      this.charts.setOption({
        title: {
          text: '柱状图,折线图一起绘制'
        },
        tooltip: {},
        xAxis: {
          data: bugResolve.map(val => val.date)
        },
        yAxis: {},
        series: [{
          name: 'Bug解决数量',
          type: 'bar',
          data: bugResolve.map(val => val.val)
        }, {
          name: '代码提交行数',
          type: 'line',
          data: codeSubmission.map(val => val.val)
        }]
      })
    }
  },
  mounted() {
    this.initEcharts()
  }
}

</script>
