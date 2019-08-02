import Vue from 'vue';
//自定义
import App from './App.vue';

import axios from 'axios';

//全局引入
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
//  定义 (路由) 组件。
import Home from './views/Home'
import Detail from './views/Detail'
//  定义路由
const routes = [
  {
     path: '/home', 
     component: Home 
  },
  { 
    path: '/detail/:id/:name', 
    component: Detail 
  },
]
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


//Vue继承axios
Vue.prototype.$axios = axios

//引入vant的组件
import Vant from './vant/index'
Vant();

Vue.config.productionTip = false

new Vue({
  // 容器装载路由组件
  router,
  render: h => h(App),
}).$mount('#app')
