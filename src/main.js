// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@styles/reset.css'
import '@styles/vueAnimate.css'
import router from './router'
import 'lib-flexible/flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as datasmethod  from '@/filter/dataprocess/index.js'; // 数据加工过滤器
import App from './App'

Vue.use(ElementUI);

Vue.config.productionTip = false

// 注册全局过滤器
for (var key in datasmethod) {
    Vue.filter(key,datasmethod[key]);
}
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
