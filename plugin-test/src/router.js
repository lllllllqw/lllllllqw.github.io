import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import _import from './utils/_import'

Vue.use(Router)

const nameList = [ 'About']

const lazyRoutes = nameList.map(val => {
  return {
    path: ('/' + val),
    name: val,
    component: _import(val)
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Home
    },
    ...lazyRoutes
  ]
})
