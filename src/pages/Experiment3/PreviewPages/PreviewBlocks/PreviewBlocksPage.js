import React, { useEffect, useState } from 'react'
import { PreviewBlockSettings } from './PreviewBlockSettings'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { createSuprizeBlockParams } from '../../../../helpers/trialManagerHelper'
import { PracticeSurprizeRunner } from '../../../../modules/experiment3/PracticeSurprizeRunner'
import { createMemorandumBlockParams } from '../../../../modules/experiment3/createExp3Params'
import { TrialRunner } from '../../../../modules/experiment3/TrialRunner'

export const pages = {
  SETTINGS: 'SETTINGS',
  IMAGERY: 'IMAGERY',
  MEMORY: 'MEMORY',
}
export const PreviewBlocksPage = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(pages.SETTINGS)
  const [imageryParams, setImageryParams] = useState({})
  const { changeTitle, memoryV2MixedSizes } = useExperiment3Context()

  useEffect(() => {
    setImageryParams(createSuprizeBlockParams())
    console.log(createMemorandumBlockParams('H'))

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
          experiment={imageryParams.slice(0, 2)}
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
          experiment={[
            {
              letter: 'H',
              background: 'L',
              trialParams: {
                stimuli: [
                  {
                    i: 2,
                    j: 4,
                    iconType: 'STIMULUS_0',
                    isOnLetter: true,
                    cellId: 14,
                  },
                  {
                    i: 2,
                    j: 0,
                    iconType: 'STIMULUS_6',
                    isOnLetter: true,
                    cellId: 10,
                  },
                  {
                    i: 2,
                    j: 1,
                    iconType: 'STIMULUS_3',
                    isOnLetter: true,
                    cellId: 11,
                  },
                  {
                    i: 3,
                    j: 0,
                    iconType: 'STIMULUS_4',
                    isOnLetter: true,
                    cellId: 15,
                  },
                ],
                recognition: [
                  {
                    i: 3,
                    j: 0,
                    iconType: 'STIMULUS_5',
                    isOnLetter: true,
                    cellId: 15,
                    taskType: 'CORRECT_ON_LETTER',
                  },
                  {
                    i: 3,
                    j: 0,
                    iconType: 'STIMULUS_7',
                    isOnLetter: true,
                    cellId: 15,
                    taskType: 'CORRECT_ON_LETTER',
                  },
                  {
                    i: 3,
                    j: 0,
                    iconType: 'STIMULUS_1',
                    isOnLetter: true,
                    cellId: 15,
                    taskType: 'CORRECT_ON_LETTER',
                  },
                  {
                    i: 3,
                    j: 0,
                    iconType: 'STIMULUS_2',
                    isOnLetter: true,
                    cellId: 15,
                    taskType: 'CORRECT_ON_LETTER',
                  },
                ],
              },
            },
          ]}
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
