<template>
  <div ref="e-charts" class="e-charts"></div>
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
      this.charts = this.$echarts.init(this.$refs['e-charts'])
      this.charts.setOption({
        title: {
          text: '实现自定义的统计图表'
        },
        tooltip: {},
        xAxis: {
          name: '日期',
          position: 'top',
          data: bugResolve.map(val => val.date),
          nameTextStyle: {
            color: 'red',
            fontSize: '18'
          },
          axisLine: {
            lineStyle: {
              color: 'red'
            }
          }
        },
        yAxis: {
          inverse: true
        },
        series: [{
          name: 'Bug解决数量',
          type: 'bar',
          data: bugResolve.map(val => val.val),
          label: {
            show: true,
            formatter: function(item) {
              return item.data > 3 ? '多' : '少'
            }
          }
        }, {
          name: '代码提交次数',
          type: 'bar',
          data: codeSubmission.map(val => val.val)
        }]
      })
      console.log(this.charts)
    }
  },
  mounted() {
    this.initEcharts()
  }
}
</script>
