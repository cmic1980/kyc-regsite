// import 依赖类库
import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import 路由表
import routes from './routes';

import store from './store'

// import APP 初始页
import App from './App.vue'


Vue.use(ElementUI)
Vue.use(VueRouter);


// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


