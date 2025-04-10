import React, { useEffect, useState } from 'react'
import { PreviewTutorialsSettings } from './PreviewTutorialsSettings'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { createSuprizeBlockParams } from '../../../../helpers/trialManagerHelper'
import { PracticeSurprizeRunner } from '../../../../modules/experiment3/PracticeSurprizeRunner'
import {
  createExp3MemoryBlock,
  // runTest,
} from '../../../../modules/experiment3/createExp3Params'
import { TrialRunner } from '../../../../modules/experiment3/TrialRunner'
import { createExp3MixedBlock } from '../../../../modules/experiment3/createExp3MixedParams'
import { downloadQuizDataAsJson } from '../../../../helpers/donwloadJson'
import ImageryBlockTutorials from '../../../../modules/experiment3/tutorials/imagery'

export const pages = {
  SETTINGS: 'SETTINGS',
  IMAGERY: 'IMAGERY',
  MEMORY: 'MEMORY',
  MIXED: 'MIXED',
}
export const PreviewTutorialsPage = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(pages.SETTINGS)
  const [imageryParams, setImageryParams] = useState([])
  const [memoryParams, setMemoryParams] = useState([])
  const [mixedParams, setMixedParams] = useState([])

  const { changeTitle, memoryV2MixedSizes } = useExperiment3Context()

  useEffect(() => {
    setImageryParams(createSuprizeBlockParams())
    setMemoryParams(createExp3MemoryBlock())
    setMixedParams(createExp3MixedBlock())
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
        <TrialRunner
          experiment={memoryParams}
          onFinishExperiment={(resp) => {
            changeTitle('Preview Trial Blocks')
            downloadQuizDataAsJson(resp, 123456, 'MEMORY')
            return setCurrentPage(pages.SETTINGS)
          }}
        />
      )
    }
    case pages.MIXED: {
      return (
        <TrialRunner
          experiment={mixedParams}
          isMixed
          onFinishExperiment={(resp) => {
            console.log(resp)
            downloadQuizDataAsJson(resp, 123456, 'MIXED')
            changeTitle('Preview Trial Blocks')
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
