import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fetch from './api/fetch'

class NewVue extends Vue {
  constructor(options) {
    super(options)
    this.name = 'new vue'
  }
  $$fetch() {
    return fetch
  }
  $myName () {
    return console.log(this.name)
  }
  static myName () {
    return console.log(this)
  } 
}

NewVue.myName()

Vue.prototype.$fetch = fetch

Vue.config.productionTip = false

const vm = new NewVue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

vm.$myName()