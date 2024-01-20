import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { TrialLayout } from '../layouts/TrialLayout/TestLayout'
import { hierarchy } from './routes'
import TrialPage from '../pages/Trial'
import { TrialProvider } from '../layouts/TrialLayout/provider'
import MainTest from '../Components/MainTest'
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
        element: <MainTest />,
      },
    ],
  },
])
