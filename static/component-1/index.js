//导入组件
import Paging from "./packages/paging/index.js"

//定义版本号
let version = '1.0.0'
//定义组件列表
const components = [Paging]

//全部默认导出后，Vue.use时自动调用install，内部写的Vue注册组件方法，此处遍历组件列表，全部注册
const install = function (Vue) {
    components.map(function (component) {
        Vue.component(component.name, component);
    })
};

//逐个导出组件
export {
    version,
    Paging
}

//默认全部导出组件
export default {
    version,
    install,
    Paging
}