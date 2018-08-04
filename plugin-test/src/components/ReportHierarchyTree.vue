<template>
  <div class="report-tree__container">

    <div class="report-tree__left">
      <el-select v-model="selectedTree">
        <el-option
          label="报表层级树1"
          value="tree1"
        />
      </el-select>

      <el-input placeholder="Report Hierarchy" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <el-tree
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        :data="treeData"
        :props="defaultProps"
        @check-change="handleCheckChange"
      >
      </el-tree>
    </div>

    <div class="report-tree__right">
      <div>
        <b>
          已选
        </b>
        <div v-for="node of checkedNodes" :key="node[treeNodeId]">
          {{node[defaultProps.label]}}
        </div>
      </div>
      <el-button
        class="report-tree__confirm"
        type="primary"
        @click="confirm"
      >
        确认
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultProps: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'label'
      })
    },
    treeNodeId: {
      type: String,
      default: () => 'id'
    }
  },

  data() {
    return {
      selectedTree: 'tree1',
      checkedNodes: [],
      treeData: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }]
    }
  },

  methods: {
    confirm() {
      this.$emit('confirm')
      this.closePopover()
    },
    // 关闭父级的 popover
    closePopover() {
      const parent = this.$parent
      if (parent.$options._componentTag === 'el-popover') {
        this.$parent.doClose()
      }
    },
    // 将父节点设为禁用
    checkDisabled(treeData) {
      treeData.forEach(node => {
        if (node.children && node.children.length) {
          this.checkDisabled(node.children)
          this.$set(node, 'disabled', true)
        }
      })
    },
    handleCheckChange(node, isSelect) {
      if (isSelect) {
        this.checkedNodes.push(node)
        // this.$_removeRepetition(this.checkedNodes, 'id')
      } else {
        const i = this.checkedNodes.findIndex(checkedNode => node[this.treeNodeId] === checkedNode[this.treeNodeId])
        i !== -1 && this.checkedNodes.splice(i, 1)
      }
      this.checkedNodes = this.checkedNodes.filter(node => !node.children || !node.children.length)
      console.log('当前选中', this.checkedNodes)
    }
  },

  created() {
    this.checkDisabled(this.treeData)
  }
}
</script>

<style lang="scss" scoped>
  .report-tree__container {
    display: flex;

    .report-tree__left {
      flex: 1;
    }

    .report-tree__right {
      position: relative;
      flex: none;
      width: 200px;

      .report-tree__confirm {
        position: absolute;
        right: 10px;
        bottom: 20px;
      }
    }
  }
</style>
