import Vue from 'vue'
import Vuex from 'vuex'
import VuexConnector from '@xunlei/vuex-connector'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  actions: {

  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})

export const connector = new VuexConnector(store)

export default store
