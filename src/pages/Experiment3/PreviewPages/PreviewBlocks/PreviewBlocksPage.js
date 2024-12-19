import React, { useEffect, useState } from 'react'
import { PreviewBlockSettings } from './PreviewBlockSettings'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { createSuprizeBlockParams } from '../../../../helpers/trialManagerHelper'
import { PracticeSurprizeRunner } from '../../../../modules/experiment3/PracticeSurprizeRunner'
import { createExp3MemoryBlock } from '../../../../modules/experiment3/createExp3Params'
import { TrialRunner } from '../../../../modules/experiment3/TrialRunner'

export const pages = {
  SETTINGS: 'SETTINGS',
  IMAGERY: 'IMAGERY',
  MEMORY: 'MEMORY',
}
export const PreviewBlocksPage = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(pages.SETTINGS)
  const [imageryParams, setImageryParams] = useState([])
  const [memoryParams, setMemoryParams] = useState([])

  const { changeTitle, memoryV2MixedSizes } = useExperiment3Context()

  useEffect(() => {
    setImageryParams(createSuprizeBlockParams())
    setMemoryParams(createExp3MemoryBlock())

    // mockArray.map((value) => {
    //   return createMemorandumBlockParams(value.letter, value.stimuliArray)
    // })

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
          experiment={imageryParams}
          onFinishExperiment={() => {
            changeTitle('Preview Trial Blocks')
            return setCurrentPage(pages.SETTINGS)
          }}
        />
      )
    }
    case pages.MEMORY: {
      return (
        <TrialRunner
          experiment={memoryParams}
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
