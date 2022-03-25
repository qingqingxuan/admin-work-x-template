import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login/index.vue'

import { Layout } from '@/layouts'

export const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)*',
        component: (): any => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: Login,
  },
  {
    path: '/personal',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '',
        name: 'Personal',
        component: (): any => import('@/views/personal/index.vue'),
        meta: {
          title: '个人中心',
        },
      },
    ],
  },
  {
    path: '/',
    redirect: '/index/work-place',
    hidden: true,
  },
  {
    path: '/index',
    name: 'root',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: 'HouseIcon',
    },
    children: [
      {
        path: 'work-place',
        name: 'WorkPlace',
        component: (): any => import('@/views/index/work-place.vue'),
        meta: {
          title: '工作台',
          affix: true,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
