import { recognitionTypes } from '../../consts'
import { countStimuli, createStimulus } from '../../helpers/createParams'
import { chooseGridElements } from '../../helpers/letterPicker'
import shuffleArray from '../../helpers/shuffleArray'
import { exp3StimuliArray } from './exp3StimuliConst'

export const createExp3Params = () => {
  return
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
  const randomLocationPick =
    presentationArray[Math.floor(Math.random() * presentationArray.length)]
  // if (!randomLocationPick) console.log('err',stimuliArray, presentationArray)

  const {
    // i: recognitonI,
    // j: recogintionJ,
    cellId: recognitionCellId,
  } = randomLocationPick
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
        recognitionCellId,
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
        recognitionCellId,
        item.iconType,
        false,
        recognitionTypes.CORRECT_OFF_LETTER
      )
      recognitionStimuliArray.push(generatedStimulus)
    })
  }
  if (countsArray[recognitionTypes.INCORRECT_ON_LETTER]) {
    for (
      let i = 0;
      i < countsArray[recognitionTypes.INCORRECT_ON_LETTER];
      i++
    ) {
      const orientation = shuffledStimuli.splice(0, 1)[0]
      const generatedStimulus = createStimulus(
        recognitionCellId,
        orientation,
        true,
        recognitionTypes.INCORRECT_ON_LETTER
      )
      recognitionStimuliArray.push(generatedStimulus)
    }
  }
  if (countsArray[recognitionTypes.INCORRECT_OFF_LETTER]) {
    for (
      let i = 0;
      i < countsArray[recognitionTypes.INCORRECT_OFF_LETTER];
      i++
    ) {
      const orientation = shuffledStimuli.splice(0, 1)[0]
      const generatedStimulus = createStimulus(
        recognitionCellId,
        orientation,
        false,
        recognitionTypes.INCORRECT_OFF_LETTER
      )
      recognitionStimuliArray.push(generatedStimulus)
    }
  }
  // console.log(recognitionStimuliArray)
  // if (!runTest)
  return {
    stimuli: shuffleArray(presentationArray),
    recognition: shuffleArray(recognitionStimuliArray),
  }
}
