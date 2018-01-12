//导入paging组件
import Paging from "./src/paging"

//Vue.use(Paging)时自动调用install，内部写的Vue注册组件方法，此处遍单独注册Paging
Paging.install = function(Vue) {
	Vue.component(Paging.name,Paging)
}

//默认导出Paging
export default Paging