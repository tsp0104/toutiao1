<template>
  <el-container class="home-container">
    <el-aside :width="isOpen?'200px' : '64px'">
      <!-- logo -->
      <div class="logo" :class="{smallLogo:!isOpen}"></div>
      <!-- 导航菜单 -->
      <el-menu
        default-active="/"
        background-color="#002233"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="!isOpen"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 图标 -->
        <span class="el-icon-s-fold icon" @click="toggleMenu"></span>
        <!-- 文字 -->
        <span class="text">新闻头条</span>
        <!-- 下拉菜单 -->
        <el-dropdown class="dropdown" @command="headelClick">
          <span class="el-dropdown-link">
            <!-- 头像  -->
            <img class="headIcon" :src="photo" alt="#" />
            <!-- 用户名 -->
            <span class="userName">{{name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting" command="setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" command="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import local from '@/utils/local'
export default {
  data () {
    return {
      // 侧边栏显示或隐藏的默认值
      isOpen: true,
      // 头像
      photo: '',
      // 用户名
      name: ''
    }
  },
  created () {
    const user = local.getUser() || {}
    this.photo = user.photo
    this.name = user.name
  },
  methods: {
    toggleMenu () {
      // 切换侧边啦的显示和隐藏
      this.isOpen = !this.isOpen
    },
    // 绑定的click事件无效
    // 给的是element-ui提供的组件绑定的click事件，如果组件不支持click事件，无法触发。
    // 组件不支持，给组件解析后的DOM绑定事件
    // vue提供了事件修饰符功能，prevent once stop --- native 把事件绑定在原生DOM上
    setting () {
      this.$router.push('/setting')
    },
    logout () {
      local.delUser()
      this.$router.push('/login')
    },
    headelClick (command) {
      this[command]()
      // this.setting() === command setting
      // this.logout() === command logout
    }
  }
}
</script>

<style scoped lang='less'>
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/logo_admin.png) no-repeat center /
        140px auto;
      // background-image: url(../../assets/logo_admin.png) no-repeat center;
      // background-color: red;
    }
    .smallLogo {
      background: #002244 url(../../assets/logo_admin_01.png) no-repeat center;
      background-size: 36px auto;
    }
  }
  .el-header {
    border: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 30px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .text {
      vertical-align: middle;
    }
  }
  .dropdown {
    float: right;
    .headIcon {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
    .userName {
      vertical-align: middle;
      font-weight: bold;
      margin-left: 5px;
    }
  }
}
</style>
