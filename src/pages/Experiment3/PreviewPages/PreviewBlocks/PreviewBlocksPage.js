import React, { useEffect, useState } from 'react'
import { PreviewBlockSettings } from './PreviewBlockSettings'
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

export const pages = {
  SETTINGS: 'SETTINGS',
  IMAGERY: 'IMAGERY',
  MEMORY: 'MEMORY',
  MIXED: 'MIXED',
}
export const PreviewBlocksPage = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(pages.SETTINGS)
  const [imageryParams, setImageryParams] = useState([])
  const [memoryParams, setMemoryParams] = useState([])
  const [mixedParams, setMixedParams] = useState([])

  const { changeTitle, memoryV2MixedSizes } = useExperiment3Context()

  useEffect(() => {
    setImageryParams(createSuprizeBlockParams())
    setMemoryParams(createExp3MemoryBlock())
    setMixedParams(createExp3MixedBlock())

    // runTest(50000)
    // mockArray.map((value) => {
    //   return createMemorandumBlockParams(value.letter, value.stimuliArray)
    // })

    // changeTitle('Trial Blocks Settings')
    const test = createExp3MixedBlock()
    console.log('Mixed Block => ', test)
    let errorRate = 0
    let extremeCases = 0
    test.map((trial, index) => {
      if (trial.trialParams.isExtremeCase) {
        extremeCases += 1
        console.log('extremeCase @ inedex: ', index)
      }
      const recogintion = trial.trialParams.recognition
      if (recogintion.length === 5) {
        recogintion.map((rec) => {
          if (!rec.iconType) {
            errorRate += 1
            console.log('error @ inedex: ', index)
          }
          return true
        })
      }
      return true
    })
    console.log('errorRate => ', errorRate)
    console.log('extremeCases => ', extremeCases)
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
          onFinishExperiment={(resp) => {
            changeTitle('Preview Trial Blocks')
            downloadQuizDataAsJson(resp, 123456, 'IMAGERY')
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
        <PreviewBlockSettings onBack={onBack} onStartPreview={onStartPreview} />
      )
  }
}
