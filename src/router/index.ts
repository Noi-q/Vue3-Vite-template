import { createWebHistory, createRouter } from 'vue-router'
import Login from '../views/Login/index.vue'
import Error from '../views/404/index.vue'
import Layout from '../components/Layout/index.vue'
const history = createWebHistory()
const syncRoutes = [
  {
    // 页面逻辑
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name:'404',
    component:Error
  },
  {
    path: '/304',
    name:'404',
    component:Error
  },
  // {
  //   path:``,
  //   redirect:'/404'
  // }
]

const redirectRoutes = [
  {
    path:'/',
    name:'Dashbod',
    component: Layout,
    redirect:'/dashbod',
    meta:{title:'仪表板',icon:'<Location/>'},
    children:[
      {
        path:'dashbod',
        name:'Dashbod',
        component:() => import('../views/Dashbod/index.vue'),
        meta:{title:'仪表板2',icon:'<Location/>'},
        children:[
          {
            path:'123',
            name:'1213',
            component:Layout,
            meta:{title:'123'}
          }
        ]
      },
      {
        path:'login',
        name:'Login',
        component: () => import('../views/Login/index.vue'),
        meta:{title:'登录'}
      }
    ]
  }
]

const asyncRoutes = [
  // {
  //   path:'/read',
  //   name:'Read',
  //   component:Layout
  // },
  // {
  //   path:'/reaad',
  //   name:'Reaad',
  //   component:Layout
  // }
  {
    path:'/cs',
    name:'Ceshi',
    component:Layout,
    meta:{title:'测试',icon:'<Location/>'}
  }
]

// 禁止更换解构位置
const routes = [...syncRoutes,...redirectRoutes,...asyncRoutes]


const router = createRouter({
  history, // 路由模式
  routes
})

export default router