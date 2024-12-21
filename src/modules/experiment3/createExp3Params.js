import { recognitionTypes } from '../../consts'
import { countStimuli, createStimulus } from '../../helpers/createParams'
import { chooseGridElements } from '../../helpers/letterPicker'
import shuffleArray from '../../helpers/shuffleArray'
import {
  generateRecognition,
  generateTrials,
} from '../../helpers/trialManagerHelper'
import { exp3StimuliArray } from './exp3StimuliConst'

export const createExp3MemoryBlock = () => {
  const trialsArray = generateTrials(32)
  const recognitionList = generateRecognition(trialsArray.length)
  return trialsArray.map((trial, index) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: createMemorandumBlockParams(
        trial[0],
        recognitionList.splice(0, 4)
      ),
    }
  })
}

export const runTest = (testSize = 1) => {
  const extremeCases = []
  for (let index = 0; index < testSize; index++) {
    let count = 0
    const blockList = createExp3MemoryBlock()
    blockList.forEach((block) => {
      const countsArray = countStimuli(
        block.trialParams.recognition.map((value) => {
          return value.taskType
        })
      )
      const extremeCheck =
        countsArray[recognitionTypes.INCORRECT_ON_LETTER] +
          countsArray[recognitionTypes.INCORRECT_OFF_LETTER] ===
        4
      if (extremeCheck) count++
    })
    extremeCases.push(count)
  }
  // console.log(extremeCases)
  const total = extremeCases.reduce((prev, curr) => {
    return prev + curr
  }, 0)
  console.log('total extreme cases', total, 'average => ', total / testSize)
}

const mock = [
  recognitionTypes.INCORRECT_ON_LETTER,
  recognitionTypes.INCORRECT_ON_LETTER,
  recognitionTypes.INCORRECT_ON_LETTER,
  recognitionTypes.INCORRECT_ON_LETTER,
]

export const createMemorandumBlockParams = (
  letter,
  stimuliArray = mock
  // runTest = false
) => {
  if (!stimuliArray.length) return null
  const shuffledStimuli = shuffleArray(exp3StimuliArray)
  const countsArray = countStimuli(stimuliArray)

  let numOnLetters =
    countsArray[recognitionTypes.CORRECT_ON_LETTER] +
    countsArray[recognitionTypes.INCORRECT_ON_LETTER]
  let numOffLetters =
    countsArray[recognitionTypes.CORRECT_OFF_LETTER] +
    countsArray[recognitionTypes.INCORRECT_OFF_LETTER]
  const { offLetters, onLetters } = chooseGridElements(
    letter,
    numOnLetters,
    numOffLetters
  )

  // generating presentation step stimuli array
  const presentationArray = []
  const onletterStimuliArray = []
  const offletterStimuliArray = []
  offLetters.forEach((location) => {
    const orientation = shuffledStimuli.splice(0, 1)[0]
    const generatedStimulus = createStimulus(location, orientation, false)
    presentationArray.push(generatedStimulus)
    offletterStimuliArray.push(generatedStimulus)
  })
  onLetters.forEach((location) => {
    const orientation = shuffledStimuli.splice(0, 1)[0]
    const generatedStimulus = createStimulus(location, orientation, true)
    presentationArray.push(generatedStimulus)
    onletterStimuliArray.push(generatedStimulus)
  })

  // console.log(
  //   presentationArray,
  //   randomLocationPick,
  //   recognitonI,
  //   recogintionJ,
  //   recognitionCellId
  // )

  const recognitionStimuliArray = []
  if (countsArray[recognitionTypes.CORRECT_ON_LETTER]) {
    const items = onletterStimuliArray.splice(
      0,
      countsArray[recognitionTypes.CORRECT_ON_LETTER]
    )
    items.forEach((item) => {
      const generatedStimulus = createStimulus(
        item.cellId,
        item.iconType,
        true,
        recognitionTypes.CORRECT_ON_LETTER
      )
      recognitionStimuliArray.push(generatedStimulus)
    })
  }
  if (countsArray[recognitionTypes.CORRECT_OFF_LETTER]) {
    const items = offletterStimuliArray.splice(
      0,
      countsArray[recognitionTypes.CORRECT_OFF_LETTER]
    )
    items.forEach((item) => {
      const generatedStimulus = createStimulus(
        item.cellId,
        item.iconType,
        false,
        recognitionTypes.CORRECT_OFF_LETTER
      )
      recognitionStimuliArray.push(generatedStimulus)
    })
  }
  if (countsArray[recognitionTypes.INCORRECT_ON_LETTER]) {
    const items = onletterStimuliArray.splice(
      0,
      countsArray[recognitionTypes.INCORRECT_ON_LETTER]
    )
    items.forEach((item) => {
      const orientation = shuffledStimuli.splice(0, 1)[0]
      const generatedStimulus = createStimulus(
        item.cellId,
        orientation,
        true,
        recognitionTypes.INCORRECT_ON_LETTER
      )
      recognitionStimuliArray.push(generatedStimulus)
    })
  }
  if (countsArray[recognitionTypes.INCORRECT_OFF_LETTER]) {
    const items = offletterStimuliArray.splice(
      0,
      countsArray[recognitionTypes.INCORRECT_OFF_LETTER]
    )
    items.forEach((item) => {
      const orientation = shuffledStimuli.splice(0, 1)[0]
      const generatedStimulus = createStimulus(
        item.cellId,
        orientation,
        false,
        recognitionTypes.INCORRECT_OFF_LETTER
      )
      recognitionStimuliArray.push(generatedStimulus)
    })
  }

  // console.log(recognitionStimuliArray)
  // if (!runTest)
  return {
    stimuli: shuffleArray(presentationArray),
    recognition: shuffleArray(recognitionStimuliArray),
  }
}
