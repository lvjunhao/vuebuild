import Vue from 'vue'
import '@styles/vueAnimate.css'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@styles/reset.css' // 包含部分重置Element-ui的样式,必须在element-ui css文件后引入
import * as datasmethod  from '@/filter/dataprocess/index.js'; // 数据加工过滤器
import App from './App'
import store from './store/index'

Vue.use(ElementUI);

Vue.config.productionTip = false

// 注册全局过滤器
for (var key in datasmethod) {
    Vue.filter(key,datasmethod[key]);
}
new Vue({
  el: '#app',
  router, // 注入路由
  store, // 注入store(vuex)
  render: h => h(App)
})
