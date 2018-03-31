<template>
  <div class="calender-wrapper">
    <div class="calender-tool">
      <select v-model="toolOptions.year">
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
      </select>
    </div>
    <div class="calender-content" v-if="monthDaysArr[0]">
      <div class="month-wrapper" v-for="(month, monthIndex) of monthDaysArr" :key="monthIndex">
        <h3 class="month-name">{{MONTH_NAMES[monthIndex]}}</h3>
        <div class="month-header">
          <div class="date-box" v-for="(dayName, dayNameIndex) of DAY_NAMES" :key="dayName" @click="handleDayNameClick(monthIndex, dayNameIndex)">{{dayName}}</div>
        </div>
        <div class="month-body">
          <div class="date-box" v-for="index of month[0].day" :key="index"></div>
          <div class="date-box" :style="{color: day.isSelected ? 'red' : ''}" v-for="(day, dateIndex) of month" :key="day.timestamp"
            @click="handleDateBoxClick(monthIndex, dateIndex)" @mousedown="handleDateBoxMouseDown(monthIndex, dateIndex)" @mouseup="handleDateBoxMouseUp(monthIndex, dateIndex)">{{day.date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    isLeapYear,
    generateDateModel
  } from '../utils/util.js'
  import {
    MONTH_NAMES,
    DAY_NAMES
  } from '../utils/constant.js'

  export default {
    data() {
      return {
        MONTH_NAMES,
        DAY_NAMES,
        toolOptions: {
          year: 2018,
        },
        isPressMove: false,
        monthDaysArr: [],
        pressStart: {
          monthIndex: 0,
          dateIndex: 0
        }
      }
    },
    computed: {

    },
    watch: {
      'toolOptions.year' (val) {
        this.updateMonthDaysArr(val)
      }
    },
    methods: {
      getMonthDaysArr() {
        // 生成每月天数的数组
        let arr = new Array(31, 28 + isLeapYear(this.toolOptions.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
        let resArr = []
        // 生成一年的所有日期
        arr.forEach((val, index) => {
          let month = []
          for (let i = 1; i <= val; i++) {
            month.push(generateDateModel(this.toolOptions.year, index, i, {
              'isSelected': false
            }))
          }
          resArr.push(month)
        })
        return resArr
      },
      handleDateBoxClick(monthIndex, dateIndex) {
        this.changeDateSelection(monthIndex, dateIndex)
      },
      upEvent() {
        console.log('window关闭')
        this.isPressMove = false
      },
      handleDateBoxMouseDown(monthIndex, dateIndex) {
        this.isPressMove = true
        this.pressStart.monthIndex = monthIndex
        this.pressStart.dateIndex = dateIndex
      },
      handleDateBoxMouseUp(monthIndex, dateIndex) {
        if (this.isPressMove) {
          let {pressStart, monthDaysArr} = this
          // 如果往前选,交换index
          if(monthIndex < pressStart.monthIndex) {
            // 如果是前月
            [monthIndex, pressStart.monthIndex] = [pressStart.monthIndex, monthIndex];
            [dateIndex, pressStart.dateIndex] = [pressStart.dateIndex, dateIndex];
          }else if(monthIndex === pressStart.monthIndex) {
            // 如果是同月
            if(dateIndex < pressStart.dateIndex) {
              [dateIndex, pressStart.dateIndex] = [pressStart.dateIndex, dateIndex]
            }
          }
          // 将开始月选择的(按下日期以及之后)置反
          for(let i = dateIndex; i < monthDaysArr[dateIndex].length; i++) {

          }
          // 将结束月选择的(松开日期以及之前)置反

          // 将开始结束之间选择的置反
        }
      },
      handleDayNameClick(monthIndex, dayNameIndex) {
        this.monthDaysArr[monthIndex]
          .forEach(date => {
            if (date.day === dayNameIndex) {
              date.isSelected = !date.isSelected
            }
          })
      },
      changeDateSelection(monthIndex, dateIndex) {
        this.$set(this.monthDaysArr[monthIndex][dateIndex], 'isSelected', !this.monthDaysArr[monthIndex][dateIndex].isSelected)
      },
      updateMonthDaysArr(year) {
        this.monthDaysArr = this.getMonthDaysArr(year)
      }
    },
    mounted() {
      window.addEventListener('mouseup', this.upEvent)
      this.monthDaysArr = this.getMonthDaysArr(this.toolOptions.year)
    },
    destroyed() {
      window.removeEventListener('mouseup', this.upEvent)
    }
  }
</script>

<style scoped src="../assets/css/Calendar.css"></style>