import Vue from 'vue';
//自定义
import App from './App.vue';

import axios from 'axios';
//Vue继承axios
Vue.prototype.$axios=axios
//引入vant的组件
import Vant from './vant/index'
Vant()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
