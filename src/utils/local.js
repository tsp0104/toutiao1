// 导出一个存储本地信息的模块 (设置用户 获取用户 清除用户)
const KEY = 'toutiao-user-key'
const local = {
  // 设置用户信息
  setUser (user) {
    // 存储 setItem(key, value) key将来获取时还会用 所以定义变量 value json的字符串
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  // 获取用户信息
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    // 转换成JSON对象
    return JSON.parse(jsonStr)
  },
  // 清除用户信息
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}

export default local
