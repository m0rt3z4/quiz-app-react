import { defineRoutes } from "../lib/defineRoutes";


export const { collection, hierarchy } = defineRoutes([
  {
    key: 'main',
    path: '/quiz-app-react/',
    children: [
      {
        key: 'trial',
        path: '/quiz-app-react/trial',
      },
      {
        key: 'tutorial',
        path: '/quiz-app-react/tutorial',
      },
    ]
  },
  
] )
