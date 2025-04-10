import React, { useState } from 'react'
import { PreviewTutorialsSettings } from './PreviewTutorialsSettings'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import ImageryBlockTutorials from '../../../../modules/experiment3/tutorials/imagery'
import MemoryTutorial from '../../../../modules/experiment3/tutorials/memory'
import MixedTutorial from '../../../../modules/experiment3/tutorials/mixed'

export const pages = {
  SETTINGS: 'SETTINGS',
  IMAGERY: 'IMAGERY',
  MEMORY: 'MEMORY',
  MIXED: 'MIXED',
}
export const PreviewTutorialsPage = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(pages.SETTINGS)

  const { changeTitle } = useExperiment3Context()

  const onStartPreview = (page = pages.SETTINGS) => {
    setTimeout(() => {
      changeTitle('')
      setCurrentPage(page)
      return clearTimeout()
    }, 200)
  }

  switch (currentPage) {
    case pages.SETTINGS: {
      return (
        <PreviewTutorialsSettings
          onBack={onBack}
          onStartPreview={onStartPreview}
        />
      )
    }
    case pages.IMAGERY: {
      return (
        <ImageryBlockTutorials
          onNext={() => {
            return setCurrentPage(pages.SETTINGS)
          }}
        />
      )
    }
    case pages.MEMORY: {
      return (
        <MemoryTutorial
          onNext={() => {
            return setCurrentPage(pages.SETTINGS)
          }}
        />
      )
    }
    case pages.MIXED: {
      return (
        <MixedTutorial
          onNext={() => {
            return setCurrentPage(pages.SETTINGS)
          }}
        />
      )
    }

    default:
      return (
        <PreviewTutorialsSettings
          onBack={onBack}
          onStartPreview={onStartPreview}
        />
      )
  }
}
