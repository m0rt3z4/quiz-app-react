import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/'
import { TrialLayout } from '../layouts/TrialLayout/TestLayout'
import { MainProvider } from '../layouts/MainLayout/provider'
import { TrialProvider } from '../layouts/TrialLayout/provider'
import { hierarchy } from './routes'
import MainPage from '../pages/main'
import SettingPage from '../pages/setting'
import TutorialPage from '../pages/tutorial'
import Experiment2Page from '../pages/Experiment2'
import Experiment2PreviewPage from '../pages/Experiment2/Preview/'
import {
  Exp2PersistedProvider,
  Exp2PersistedLayout,
} from '../layouts/Exp2PersistedLayout'
import Experiment1Page from '../pages/main/Experiment1Page'
import Experiment3MainPage from '../pages/Experiment3/Experiment3MainPage'
import { Experiment3Provider } from '../layouts/Experiment3Layout/provider'
import { Experiment3Layout } from '../layouts/Experiment3Layout'
import Experiment3PreviewPage from '../pages/Experiment3/Experiment3PreviewPage'
import {
  PreviewBlocksPage,
  PreviewGridPage,
  TrialSettingsPage,
} from '../pages/Experiment3/PreviewPages'
import MemoryTaskPage from '../pages/Experiment2/MemoryTaskPage'
import { PreviewTutorialsPage } from '../pages/Experiment3/PreviewPages/PreviewTutorials/PreviewTutorialsPage'
import Experiment4Page from '../pages/Experiment4'

export const router = createBrowserRouter([
  {
    element: (
      <TrialProvider>
        <TrialLayout />
      </TrialProvider>
    ),
    children: [
      {
        id: 'setting-page',
        path: hierarchy.main.experiment1.setting.path,
        element: <SettingPage />,
      },
      {
        id: 'tutorial-page',
        path: hierarchy.main.experiment1.tutorial.path,
        element: <TutorialPage />,
      },
      {
        id: 'exp4-setting-page',
        path: hierarchy.main.experiment4.setting.path,
        element: <SettingPage darkTheme={true} />,
      },
      {
        id: 'exp4-tutorial-page',
        path: hierarchy.main.experiment4.tutorial.path,
        element: <Experiment4Page darkTheme={true} />,
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
      {
        id: 'main-experiment1-page',
        path: hierarchy.main.experiment1.path,
        element: <Experiment1Page />,
      },
      {
        id: 'main-page',
        path: hierarchy.main.path,
        element: <MainPage />,
      },
      {
        id: 'main-experiment3-page',
        path: hierarchy.main.experiment3.path,
        element: <Experiment3MainPage />,
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
        id: 'preview-experiment2-page',
        path: hierarchy.main.experiment2.preview.path,
        element: <Experiment2PreviewPage />,
      },
      {
        id: 'trial-experiment2-page',
        path: hierarchy.main.experiment2.trial.path,
        element: <MemoryTaskPage isMainTrial />,
      },
    ],
  },
  {
    element: (
      <Experiment3Provider>
        <Experiment3Layout />
      </Experiment3Provider>
    ),
    children: [
      {
        id: 'trial-exp3-page',
        path: hierarchy.main.experiment3.preview.path,
        element: <Experiment3PreviewPage />,
      },
      {
        id: 'preview-grid-exp3-page',
        path: hierarchy.main.experiment3.preview.grid.path,
        element: <PreviewGridPage />,
      },
      {
        id: 'preview-settings-exp3-page',
        path: hierarchy.main.experiment3.preview.settings.path,
        element: <TrialSettingsPage />,
      },
      {
        id: 'preview-blocks-exp3-page',
        path: hierarchy.main.experiment3.preview.blocks.path,
        element: <PreviewBlocksPage />,
      },
      {
        id: 'preview-tutorials-exp3-page',
        path: hierarchy.main.experiment3.preview.tutorials.path,
        element: <PreviewTutorialsPage />,
      },
      // {
      //   id: 'preview-exp3-page',
      //   path: hierarchy.main.exp2.trial.path,
      //   element: <Experiment2Page />,
      // },
    ],
  },
])
