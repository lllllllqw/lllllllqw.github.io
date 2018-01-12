import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Main from '@/pages/main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/main',
    name: 'Layout',
    component: Layout,
    children: [{
      path: '/main',
      name: 'Main',
      component: Main
    }]
  }]
})
