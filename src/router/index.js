import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Function from '@/views/function/index'
import Test from '@/views/function/test'
import Main from '@/views/main/index'

const Search= () =>import('../views/search/index')
const Cadreinfo= () =>import('../views/cadreinfo/index')
const Mainl= () =>import('../views/main/index')



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Function,
      children:[
        {
          path: '/main',
          name: 'main',
          component: Mainl,
        }
      ]
    },{
      path: '/test',
      name: 'test',
      component: Test,
    },{
      path: '/main2',
      name: 'main2',
      component: Main,
      children:[
        {
          path: '/cadreinfo',
          name: 'cadreinfo',
          meta: {
            title: '干部信息',
            viewIndex: 1,
          },
          component: Cadreinfo
        },{
          path: '/search',
          name: 'search',
          meta: {
            title: '干部搜索',
            viewIndex: 1,
          },
          component: Search
        }
      ]
    }
  ]
})
