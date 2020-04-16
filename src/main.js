import Vue from 'vue'
import App from './App.vue'

// 引入router
import router from '@/router'

// 引入axios
import axios from '@/api'

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

// 跟实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
