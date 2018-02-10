import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    layout
  }
})

export default store
