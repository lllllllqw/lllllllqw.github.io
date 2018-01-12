import DmsUpload from './package/dms-upload/index.js'
import DmsPhoto from './package/dms-photo/index.js'

let version = '1.0.0'

const components = [DmsUpload,DmsPhoto]

const install = function (Vue) {
    components.map(function (component) {
        Vue.component(component.name, component)
    })
}

export {
    version,
    DmsUpload,
    DmsPhoto
}

export default {
    version,
    install,
    DmsUpload,
    DmsPhoto
}