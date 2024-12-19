import React, { useEffect, useState } from 'react'
import { PreviewBlockSettings } from './PreviewBlockSettings'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { createSuprizeBlockParams } from '../../../../helpers/trialManagerHelper'
import { PracticeSurprizeRunner } from '../../../../modules/experiment3/PracticeSurprizeRunner'

export const pages = {
  SETTINGS: 'SETTINGS',
  IMAGERY: 'IMAGERY',
}
export const PreviewBlocksPage = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(pages.SETTINGS)
  const [imageryParams, setImageryParams] = useState({})
  const { changeTitle, memoryV2MixedSizes } = useExperiment3Context()

  useEffect(() => {
    setImageryParams(createSuprizeBlockParams())
    // console.log()

    // changeTitle('Trial Blocks Settings')
  }, [changeTitle, memoryV2MixedSizes])

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
        <PreviewBlockSettings onBack={onBack} onStartPreview={onStartPreview} />
      )
    }
    case pages.IMAGERY: {
      return (
        <PracticeSurprizeRunner
          experiment={imageryParams.slice(0, 2)}
          onFinishExperiment={() => {
            changeTitle('Preview Trial Blocks')
            return setCurrentPage(pages.SETTINGS)
          }}
        />
      )
    }
    default:
      return (
        <PreviewBlockSettings onBack={onBack} onStartPreview={onStartPreview} />
      )
  }
}
