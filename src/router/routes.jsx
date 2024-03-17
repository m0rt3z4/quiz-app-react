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
    ],
  },
])
