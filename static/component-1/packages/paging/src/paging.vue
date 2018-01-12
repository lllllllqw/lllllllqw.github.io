<template>
	<div class="dms-paging">
		<button @click="prev">上一页</button>
		<button @click="next">下一页</button>
		<span>第{{pageIndex}}页，共{{pages}}页</span>
	</div>
</template>

<script>
	export default {
		name: "DmsPaging",
		data() {
			return {
				index: this.pageIndex
			}
		},
		//通过props来接受从父组件传递过来的值
		props: {
			//页面中的可见页码，其他的以...替代, 必须是奇数
			perPages: {
				type: Number,
				default: 5
			},
			//当前页码
			pageIndex: {
				type: Number,
				default: 1
			},
			//每页显示条数
			pageSize: {
				type: Number,
				default: 10
			},
			total: {
				type: Number,
				default: 1
			}
		},
		methods: {
			prev() {
				if(this.index > 1) {
					this.go(this.index - 1)
				}
			},
			next() {
				if(this.index < this.pages) {
					this.go(this.index + 1)
				}
			},
			go(index) {
				if(this.index !== index) {
					this.index = index
					//父组件通过change方法来接受当前的页码
					this.$emit('changePage', this.index)
				}
			}
		},
		computed: {
			pages() {
				return Math.ceil(this.total / this.pageSize);
			}
		}
	}
</script>

<style type="text/css">
	.dms-paging button {
		background-color: #ff0000;
	}
</style>