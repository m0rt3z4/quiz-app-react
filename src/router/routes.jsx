import { defineRoutes } from '../lib/defineRoutes'

export const { collection, hierarchy } = defineRoutes([
  {
    key: 'main',
    path: '/',
    children: [
      {
        key: 'trial',
        path: '/trial',
      },
      {
        key: 'tutorial',
        path: '/tutorial',
      },
      {
        key: 'setting',
        path: '/setting',
      },
      {
        key: 'experiment2',
        path: '/experiment2',
        children: [
          {
            key: 'preview',
            path: '/preview',
          },
          {
            key: 'trial',
            path: '/trial',
          },
        ],
      },
      // {
      //   key: 'exp2',
      //   path: '/exp2',
      //   children: [
      //     {
      //       key: 'preview',
      //       path: '/preview',
      //     },
      //     {
      //       key: 'trial',
      //       path: '/trial',
      //     },
      //   ],
      // },
    ],
  },
])
