import { recognitionTypes } from '../../consts'
import {
  countStimuli,
  createStimulus,
  iconTypes,
} from '../../helpers/createParams'
import { chooseGridElements } from '../../helpers/letterPicker'
import shuffleArray from '../../helpers/shuffleArray'
import {
  generateRecognition,
  generateSurprizes,
  generateTrials,
} from '../../helpers/trialManagerHelper'
import { exp3StimuliArray } from './exp3StimuliConst'

// create block counterbalances
export const createExp3MixedBlock = (size = 40) => {
  const arr = generateRecognition(size)
  const surprizeArr = generateSurprizes(size)
  let res = surprizeArr.map((value, index) => {
    return {
      stimuliArray: arr.splice(0, 4),
      surprizeInfo: { isOnLetter: value, index: index % 5 },
    }
  })
  const sixthElementArr = generateSurprizes(size)
  const sixthElementSuprizeArr = generateSurprizes(size / 2)
  const sixthElementStimuliArr = generateRecognition(size / 8)
  res = res.map((value, index) => {
    const isSurprize = sixthElementArr[index]
    const sixthElementInfo = { isSurprize }
    if (isSurprize) {
      sixthElementInfo.isOnLetter = sixthElementSuprizeArr.splice(0, 1)[0]
    } else {
      sixthElementInfo.recognitionType = sixthElementStimuliArr.splice(0, 1)[0]
      sixthElementInfo.isOnLetter =
        sixthElementInfo.recognitionType ===
          recognitionTypes.CORRECT_ON_LETTER ||
        sixthElementInfo.recognitionType ===
          recognitionTypes.INCORRECT_ON_LETTER
          ? true
          : false
    }
    return { ...value, sixthElementInfo }
  })
  const trials = [...generateTrials(32), ...generateTrials(16)].splice(0, 40)
  const finalResults = trials.map((trial, index) => {
    const params = res[index]
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: createMixedBlockParams(
        trial[0],
        params.stimuliArray,
        params.surprizeInfo,
        params.sixthElementInfo
      ),
    }
  })
  return finalResults
}

const mock = [
  recognitionTypes.INCORRECT_ON_LETTER,
  recognitionTypes.INCORRECT_ON_LETTER,
  recognitionTypes.INCORRECT_ON_LETTER,
  recognitionTypes.INCORRECT_ON_LETTER,
]

export const createMixedBlockParams = (
  letter,
  stimuliArray = mock,
  surprizeInfo = { isOnLetter: true, index: 0 },
  sixthElementInfo = {
    isSurprize: false,
    isOnLetter: true,
    recognitionType: recognitionTypes.INCORRECT_ON_LETTER,
  }
  // runTest = false
) => {
  if (!stimuliArray.length) return null
  const shuffledStimuli = shuffleArray(exp3StimuliArray)
  const countsArray = countStimuli(stimuliArray)
  const temp = sixthElementInfo.isSurprize
    ? 0
    : sixthElementInfo.recognitionType ===
        recognitionTypes.INCORRECT_ON_LETTER ||
      sixthElementInfo.recognitionType === recognitionTypes.INCORRECT_OFF_LETTER
    ? 1
    : 0
  const isExtremeCase =
    countsArray[recognitionTypes.INCORRECT_ON_LETTER] +
      countsArray[recognitionTypes.INCORRECT_OFF_LETTER] +
      temp >=
    4

  let numOnLetters =
    countsArray[recognitionTypes.CORRECT_ON_LETTER] +
    countsArray[recognitionTypes.INCORRECT_ON_LETTER]
  let numOffLetters =
    countsArray[recognitionTypes.CORRECT_OFF_LETTER] +
    countsArray[recognitionTypes.INCORRECT_OFF_LETTER]
  let numOffLettersToPick = numOffLetters
  let numOnLettersToPick = numOnLetters

  if (surprizeInfo.isOnLetter) {
    numOnLettersToPick++
  } else {
    numOffLettersToPick++
  }
  if (sixthElementInfo.isOnLetter) {
    numOnLettersToPick++
  } else {
    numOffLettersToPick++
  }
  const { offLetters, onLetters } = chooseGridElements(
    letter,
    numOnLettersToPick,
    numOffLettersToPick
  )

  //generate main surprize
  const mainSuprizeStimulus = createStimulus(
    surprizeInfo.isOnLetter
      ? onLetters.splice(0, 1)[0]
      : offLetters.splice(0, 1)[0],
    iconTypes.SURPRIZE,
    surprizeInfo.isOnLetter
  )

  // generating presentation step stimuli array
  let presentationArray = []
  let onletterStimuliArray = []
  let offletterStimuliArray = []
  for (let index = 0; index < numOffLetters; index++) {
    const location = offLetters.splice(0, 1)[0]
    const orientation = shuffledStimuli.splice(0, 1)[0]
    const generatedStimulus = createStimulus(location, orientation, false)
    presentationArray.push(generatedStimulus)
    offletterStimuliArray.push(generatedStimulus)
  }
  for (let index = 0; index < numOnLetters; index++) {
    const location = onLetters.splice(0, 1)[0]
    const orientation = shuffledStimuli.splice(0, 1)[0]
    const generatedStimulus = createStimulus(location, orientation, true)
    presentationArray.push(generatedStimulus)
    onletterStimuliArray.push(generatedStimulus)
  }
  presentationArray = shuffleArray(presentationArray)

  //add sixth element
  let sixthElement = {}
  if (sixthElementInfo.isSurprize) {
    sixthElement = createStimulus(
      sixthElementInfo.isOnLetter
        ? onLetters.splice(0, 1)[0]
        : offLetters.splice(0, 1)[0],
      iconTypes.SURPRIZE,
      sixthElementInfo.isOnLetter
    )
  } else {
    let orientation
    if (isExtremeCase) {
      orientation =
        presentationArray[Math.floor(Math.random() * presentationArray.length)]
          .iconType
    } else {
      orientation = shuffledStimuli.splice(0, 1)[0]
    }
    sixthElement = createStimulus(
      sixthElementInfo.isOnLetter
        ? onLetters.splice(0, 1)[0]
        : offLetters.splice(0, 1)[0],
      orientation,
      sixthElementInfo.isOnLetter
    )
    // save location

    if (sixthElementInfo.isOnLetter) {
      onletterStimuliArray.push(sixthElement)
    } else {
      offletterStimuliArray.push(sixthElement)
    }
  }
  const onLetterLocations = shuffleArray(onletterStimuliArray)
  const offLetterLocations = shuffleArray(offletterStimuliArray)

  presentationArray.splice(surprizeInfo.index, 0, mainSuprizeStimulus)
  presentationArray.push(sixthElement)

  //add main surprize

  // console.log(
  //   presentationArray,
  //   randomLocationPick,
  //   recognitonI,
  //   recogintionJ,
  //   recognitionCellId
  // )

  const recognitionStimuliArray = []
  if (countsArray[recognitionTypes.CORRECT_ON_LETTER]) {
    const items = onLetterLocations.splice(
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
    const items = offLetterLocations.splice(
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
    const items = onLetterLocations.splice(
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
    const items = offLetterLocations.splice(
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

  //inject 6th element recognition
  if (!sixthElementInfo.isSurprize) {
    const sixthElementRecognitionLocation = sixthElementInfo.isOnLetter
      ? onLetterLocations.splice(0, 1)[0].cellId
      : offLetterLocations.splice(0, 1)[0].cellId
    if (isExtremeCase) {
      if (
        sixthElementInfo.recognitionType ===
          recognitionTypes.CORRECT_OFF_LETTER ||
        sixthElementInfo.recognitionType === recognitionTypes.CORRECT_ON_LETTER
      ) {
        recognitionStimuliArray.push(
          createStimulus(
            sixthElementRecognitionLocation,
            sixthElement.iconType,
            sixthElementInfo.isOnLetter,
            sixthElementInfo.recognitionType
          )
        )
      } else {
        recognitionStimuliArray.push(
          createStimulus(
            sixthElementRecognitionLocation,
            recognitionStimuliArray[
              Math.floor(Math.random() * recognitionStimuliArray.length)
            ].iconType,
            sixthElementInfo.isOnLetter,
            sixthElementInfo.recognitionType
          )
        )
      }
    } else {
      if (
        sixthElementInfo.recognitionType ===
          recognitionTypes.CORRECT_OFF_LETTER ||
        sixthElementInfo.recognitionType === recognitionTypes.CORRECT_ON_LETTER
      ) {
        recognitionStimuliArray.push(
          createStimulus(
            sixthElementRecognitionLocation,
            sixthElement.iconType,
            sixthElementInfo.isOnLetter,
            sixthElementInfo.recognitionType
          )
        )
      } else {
        recognitionStimuliArray.push(
          createStimulus(
            sixthElementRecognitionLocation,
            shuffledStimuli.splice(0, 1)[0],
            sixthElementInfo.isOnLetter,
            sixthElementInfo.recognitionType
          )
        )
      }
    }
  }
  // console.log('recognition ', recognitionStimuliArray)

  // console.log(recognitionStimuliArray)
  // if (!runTest)
  return {
    recognitionTypeArray: stimuliArray,
    surprizeInfo,
    sixthElementInfo,
    stimuli: presentationArray,
    recognition: shuffleArray(recognitionStimuliArray),
    isExtremeCase,
  }
}
