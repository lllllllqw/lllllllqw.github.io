import Vue from 'vue'
import Router from 'vue-router'
import { views } from '../views/viewsList.js'

Vue.use(Router)

const _import = file => () => import(`@/views/${file}.vue`)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: _import('Home')
  }
]

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
