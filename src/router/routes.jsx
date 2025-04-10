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
        key: 'experiment1',
        path: '/experiment1',
        children: [
          {
            key: 'setting',
            path: '/setting',
          },
          {
            key: 'tutorial',
            path: '/tutorial',
          },
        ],
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
      {
        key: 'experiment3',
        path: '/experiment3',
        children: [
          {
            key: 'preview',
            path: '/preview',
            children: [
              {
                key: 'grid',
                path: '/grid',
              },
              {
                key: 'settings',
                path: '/settings',
              },
              {
                key: 'blocks',
                path: '/blocks',
              },
              {
                key: 'tutorials',
                path: '/tutorials',
              },
            ],
          },
          {
            key: 'trial',
            path: '/trial',
          },
        ],
      },
    ],
  },
])
