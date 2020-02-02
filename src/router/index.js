import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Donate from '@/pages/home/components/Donate'
import Trans from '@/pages/home/components/Trans'
import Live from '@/pages/home/components/Live'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/donate',
          name: 'donate',
          component: Donate
        },
        {
          path: '/trans',
          name: 'trans',
          component: Trans
        },
        {
          path: '/live',
          name: 'live',
          component: Live
        }
      ]
    }
  ]
})
