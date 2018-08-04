<template>
  <div class="el-select-popover">
    <el-select v-model="selected">
      <el-option
        v-for="option of selectList"
        :key="defaultSelectProps.value ? option[defaultSelectProps.value] : option"
        :label="defaultSelectProps.label ? option[defaultSelectProps.label] : option"
        :value="defaultSelectProps.value ? option[defaultSelectProps.value] : option"
        @click.native="handleOptionClick(option)"
      >
      </el-option>
    </el-select>
    <el-popover
      ref="popover"
      placement="bottom"
      width="600"
      trigger="click">
      <slot></slot>
    </el-popover>
    <el-button ref="popoverButton" v-popover:popover>click 激活</el-button>
  </div>
</template>

<script>
export default {
  props: {
    selectList: {
      type: Array,
      default: () => [
        'xxx',
        'ccc'
      ]
    },
    defaultSelectProps: {
      type: Object,
      default: () => ({
        label: false,
        value: false
      })
    }
  },

  data() {
    return {
      selected: ''
    }
  },

  methods: {
    handleOptionClick(option) {
      this.$emit('option-click', option)
      this.openPopover()
    },
    openPopover() {
      this.$nextTick(() => {
        this.$refs.popover.doShow()
        // this.$refs.popoverButton.$el.focus()
        // this.$refs.popoverButton.$el.click()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-select-popover {
    position: relative;
    display: inline-block;

    .el-button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }
</style>
