// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import DmsPaging from 'dms-paging'
import epcComps from './assets/epcComps'
import ElemetUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElemetUI)
Vue.use(epcComps)

// Vue.use(DmsPaging)
// Vue.component("dms-paging", DmsPaging)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
