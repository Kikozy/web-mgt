import { createWebHistory, createRouter } from 'vue-router'

import Index from '@/pages/Index/Index.vue'

export const routes = [
  {
    name: 'index',
    path: '/',
    redirect: '/home',
    meta: { title: '首页', icon: 'icon_mall', name: 'index' },
    children: [
      {
        name: 'pages_index',
        path: 'index',
        component: Index,
        meta: { hidden: false, title: '主页', name: 'index_index' },
      },
    ],
  },
  {
    path: '/mall',
    redirect: '/mall/liswt',
    name: 'mall',
    meta: { title: '商城', icon: 'icon_mall', name: 'mall' },
    children: [
      {
        path: 'home',
        name: 'mall_home',
        component: () => import('@/pages/Mall/MallHome.vue'),
        meta: { hidden: false, title: '主页', name: 'mall_index' },
      },
      {
        path: 'list',
        name: 'mall_list',
        component: () => import('@/pages/Mall/MallList.vue'),
        meta: { hidden: false, title: '列表', name: 'mall_list' },
      },
      {
        path: 'other',
        name: 'mall_other',
        component: () => import('@/pages/Mall/MallOther.vue'),
        meta: { hidden: false, title: '其他', name: 'mall_other' },
        children: [
          {
            path: 'test',
            name: 'mall_other_test',
            component: () => import('@/pages/Mall/MallOtherTest.vue'),
            meta: { hidden: false, title: '测试', name: 'mall_other_test' },
          }
        ]
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
