import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/views/index.vue'
import table from '@/views/test/Table.vue'
import setting1 from '@/views/test/setting1.vue'
import layout from '@/views/test/layout.vue'
import render from '@/views/test/render.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
    //   redirect:'/test/table',
      children:[
          // 测试页面
        {
            path:'test/table',
            name:'table',
            component:table
        },
        {
            path:'test/setting1',
            name:'setting1',
            component:setting1
        },
        {
            path:'test/layout',
            name:'layout',
            component:layout
        },
        {
            path:'test/render',
            name:'render',
            component:render
        }
      ]
    }
  ]
})
