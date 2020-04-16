import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  // 配置路由规则
  // routes是配置路由规则
  routes: [
    { path: '/login', component: login }
  ]
})

export default router
