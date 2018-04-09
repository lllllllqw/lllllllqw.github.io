import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import _import from './utils/_import'

Vue.use(Router)

const nameList = ['About', '30SecondsOfCode', 'AboutElement', 'Calender', 'imageLazyLoad']

const lazyRoutes = nameList.map(val => {
  return {
    path: ('/' + val.replace(/-/g, '')),
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
    {
      path: '/404',
      name: '404',
      component: _import('404')
    },
    ...lazyRoutes,
    {
      path: '*',
      redirect: '/404'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
