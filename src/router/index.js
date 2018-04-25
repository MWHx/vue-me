import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home1 from '@/components/next/Home1'


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
      path: '/home1',
      name: 'Home1',
      component: Home1
    },

  ]
})
