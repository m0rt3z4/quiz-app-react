import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/'
import { TrialLayout } from '../layouts/TrialLayout/TestLayout'
import { MainProvider } from '../layouts/MainLayout/provider'
import { TrialProvider } from '../layouts/TrialLayout/provider'
import { hierarchy } from './routes'
import TrialPage from '../pages/Trial'
import MainPage from '../pages/main'
import TutorialPage from '../pages/tutorial'
export const router = createBrowserRouter([
  {
    element: (
      <TrialProvider>
        <TrialLayout />
      </TrialProvider>
    ),
    children: [
      {
        id: 'trial-page',
        path: hierarchy.main.trial.path,
        element: <TrialPage />,
      },
      // {
      //   id: 'main-page',
      //   path: hierarchy.main.path,
      //   element: <MainPage />,
      // },
      {
        id: 'tutorial-page',
        path: hierarchy.main.tutorial.path,
        element: <TutorialPage />,
      },
    ],
  },
  {
    element: (
      <MainProvider>
        <MainLayout />
      </MainProvider>
    ),
    children: [
      // {
      //   id: 'trial-page',
      //   path: hierarchy.main.trial.path,
      //   element: <TrialPage />,
      // },
      {
        id: 'main-page',
        path: hierarchy.main.path,
        element: <MainPage />,
      },
    ],
  },
])
