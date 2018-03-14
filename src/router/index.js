import Vue from 'vue'
import Router from 'vue-router'


//引入相关文件
import Home from '@/components/Home';     //主页
import Login from '@/components/Login';  //登录
import Reg from '@/components/Reg';      //注册
import List from '@/components/List';      //歌单


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Reg',
      component: Reg
    },
    {
      path: '/List',
      component: List
    },
  ]
})
