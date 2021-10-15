import React from 'react'
// 组件
const Home = React.lazy(() => import('@/pages/home/home')) // 路由懒加载
const About = React.lazy(() => import('@/pages/about/about'))
const Login = React.lazy(() => import('@/pages/login/login'))
const User = React.lazy(() => import('@/pages/user/user'))
const Miss = React.lazy(() => import('@/pages/404/404'))

const routerMap:any[] = [
  {
    path: '/',
    redirect: '/home',
    auth: false,
    footerShow: true
  },
  {
    path: '/home',
    component: Home,
    auth: false,
    footerShow: true
  },
  {
    path: '/about',
    component: About,
    auth: false,
    footerShow: true
  },
  {
    path: '/login',
    component: Login,
    auth: false,
    footerShow: false
  },
  {
    path: '/user',
    component: User,
    auth: true,
    footerShow: false
  },
  {
    path: '/404',
    component: Miss,
    auth: false,
    footerShow: false
  },
]

export default routerMap