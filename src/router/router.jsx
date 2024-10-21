import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/'
import { TrialLayout } from '../layouts/TrialLayout/TestLayout'
// import { Experiment2Layout } from '../layouts/Experiment2Layout/'
import { MainProvider } from '../layouts/MainLayout/provider'
import { TrialProvider } from '../layouts/TrialLayout/provider'
// import { Experiment2Provider } from '../layouts/Experiment2Layout/provider'
import { hierarchy } from './routes'
import TrialPage from '../pages/Trial'
import MainPage from '../pages/main'
import SettingPage from '../pages/setting'
import TutorialPage from '../pages/tutorial'
import Experiment2Page from '../pages/Experiment2'
import Experiment2PreviewPage from '../pages/Experiment2/Preview/'
import {
  Exp2PersistedProvider,
  Exp2PersistedLayout,
} from '../layouts/Exp2PersistedLayout'

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
      {
        id: 'setting-page',
        path: hierarchy.main.setting.path,
        element: <SettingPage />,
      },
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
  {
    element: (
      <Exp2PersistedProvider>
        <Exp2PersistedLayout />
      </Exp2PersistedProvider>
    ),
    children: [
      {
        id: 'main-experiment2-page',
        path: hierarchy.main.experiment2.path,
        element: <Experiment2Page />,
      },
      {
        id: 'trial-experiment2-page',
        path: hierarchy.main.experiment2.preview.path,
        element: <Experiment2PreviewPage />,
      },
      {
        id: 'preview-experiment2-page',
        path: hierarchy.main.experiment2.trial.path,
        element: <Experiment2Page />,
      },
    ],
  },
  // {
  //   element: (
  //     <Exp2PersistedProvider>
  //       <Exp2PersistedLayout />
  //     </Exp2PersistedProvider>
  //   ),
  //   children: [
  //     {
  //       id: 'main-exp2-page',
  //       path: hierarchy.main.exp2.path,
  //       element: <Experiment2Page />,
  //     },
  //     {
  //       id: 'trial-exp2-page',
  //       path: hierarchy.main.exp2.preview.path,
  //       element: <Experiment2PreviewPage />,
  //     },
  //     {
  //       id: 'preview-exp2-page',
  //       path: hierarchy.main.exp2.trial.path,
  //       element: <Experiment2Page />,
  //     },
  //   ],
  // },
])
