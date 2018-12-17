import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Style from '@/components/Style'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/style',
      name: 'Style',
      component: resolve => require(['@/components/Style'],resolve)
    }
  ]
})
