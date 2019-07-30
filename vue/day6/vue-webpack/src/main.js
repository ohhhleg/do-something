import Vue from 'vue'
import App from './App.vue'
// wechat ui
import 'weui'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
