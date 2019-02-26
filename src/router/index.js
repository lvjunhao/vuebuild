import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/index.vue'
import table from '@/components/tablelist/Table.vue'
import setting from '@/components/formaking/setting.vue'
import formSetting from '@/components/formaking/formsetting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect:'/table',
      children:[
        {
          path:'/table',
          name:'table',
          component:table
        },
        {
          path:'/setting',
          name:'setting',
          component:setting
        },
        {
          path:'/formSetting',
          name:'formSetting',
          component:formSetting
        }
      ]
    }
  ]
})
