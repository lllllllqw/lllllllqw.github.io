import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => () => import(`@/views/${file}.vue`)

const routes = []

const views = ['Task01']
views.forEach(val => {
  routes.push({
    name: val,
    path: `/${val}`,
    component: _import(val)
  })
})

export default new Router({
  routes
})
