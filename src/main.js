import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vant 组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 全局样式
import './styles/index.less'

Vue.use(Vant) // 注册使用vant
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
