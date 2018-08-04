<template>
  <div class="home">
    <el-select-popover>
      <report-hierarchy-tree
      />
    </el-select-popover>
  </div>
</template>

<script>
import ElSelectPopover from '../components/ElSelectPopover'
import ReportHierarchyTree from '../components/ReportHierarchyTree'

export default {
  name: 'home',

  // 向所有的子孙后代注入这个值,通过inject接收
  provide: {
    pName: '提供的名字'
  },

  components: {
    ElSelectPopover,
    ReportHierarchyTree
  },

  data() {
    return {
      selected: ''
    }
  },

  methods: {
    openPopover() {
      this.$nextTick(() => {
        console.dir(this.$refs.popoverButton.$el.focus())
        // this.$refs.popoverButton.$el.click()
      })
    }
  },

  mounted() {
    console.log(this)
  }
}
</script>
