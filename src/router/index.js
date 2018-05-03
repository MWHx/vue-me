import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home1 from '@/components/next/Home1'
import Dome from '@/components/next/Dome'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/next/home1',
      name: 'Home1',
      component: Home1
    },{
      path: '/next/dome',
      name: 'Dome',
      component: Dome
    },

  ]
})
