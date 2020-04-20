import VueRouter from 'vue-router'
import Vue from 'vue'
// 登陆页面
import Login from '@/views/login'
// 首页
import Home from '@/views/home'
// 首页的2级页面欢迎页面
import Welcome from '@/views/welcome'
// 404
import NotFount from '@/views/404'

import local from '@/utils/local'
// 内容管理页
import Article from '@/utils/article'

Vue.use(VueRouter)

const router = new VueRouter({
  // 配置路由规则
  // routes是配置路由规则
  routes: [
    // 登陆
    { path: '/login', component: Login },
    // 首页
    {
      path: '/',
      component: Home,
      children: [
        // 欢迎页面
        {
          path: '/',
          component: Welcome
        }
      ]
    },
    // 404
    {
      path: '*',
      component: NotFount
    },
    // 内容管理
    {
      path: '/article',
      component: Article
    }
  ]
})

// 路由前置导航守卫
router.beforeEach((to, from, next) => {
  // to   要跳转到哪里的路由对象
  // from 从哪里来的路由对象
  // next 放行 next("/login")拦截到哪里
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router
