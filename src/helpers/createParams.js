import { recognitionTypes } from '../consts'
import { chooseGridElements } from './letterPicker'
import shuffleArray from './shuffleArray'

const iconTypes = {
  SURPRIZE: 'SURPRIZE',
  CIRCLE: 'CIRCLE',
  QUESTION: 'QUESTION',
}

const createStimulus = (location, iconType, isOnLetter) => {
  return { i: Math.floor(location / 5), j: location % 5, iconType, isOnLetter }
}

export const pickSurprizeBlock = (letter, n = 4) => {
  const cells = chooseGridElements(letter, 2, 2)
  const res = [
    ...cells.onLetters.map((x) => {
      return createStimulus(x, iconTypes.SURPRIZE, true)
    }),
    ...cells.offLetters.map((x) => {
      return createStimulus(x, iconTypes.SURPRIZE, false)
    }),
  ]
  return res
}

export const pickNormalBlock = (
  letter,
  isMixedBlock = false,
  isSurprizeOnLetter
) => {
  const numOnLetters = isMixedBlock ? (isSurprizeOnLetter ? 4 : 3) : 3
  const numOffLetters = isMixedBlock ? (isSurprizeOnLetter ? 3 : 4) : 3
  const { offLetters, onLetters } = chooseGridElements(
    letter,
    numOnLetters,
    numOffLetters
  )
  
  // handle surprize in mixed blocks
  let surprize = {}
  if (isMixedBlock) {
    if (isSurprizeOnLetter) {
      surprize = createStimulus(
        onLetters.splice(0, 1)[0],
        iconTypes.SURPRIZE,
        true
      )
    } else {
      surprize = createStimulus(
        offLetters.splice(0, 1)[0],
        iconTypes.SURPRIZE,
        false
      )
    }
  }
  let stimuli = []
  const onLetterStimuli = onLetters.splice(0, 2).map((location) => {
    return createStimulus(location, iconTypes.CIRCLE, true)
  })
  const offLetterStimuli = offLetters.splice(0, 2).map((location) => {
    return createStimulus(location, iconTypes.CIRCLE, false)
  })
  stimuli = [...onLetterStimuli, ...offLetterStimuli]
  if (isMixedBlock) stimuli.push(surprize)

  // handle recognition
  const correctOnLetter = { ...onLetterStimuli[Math.floor(Math.random() * 2)] }
  correctOnLetter.iconType = iconTypes.QUESTION
  correctOnLetter.taskType = recognitionTypes.CORRECT_ON_LETTER
  const correctOffLetter = {
    ...offLetterStimuli[Math.floor(Math.random() * 2)],
  }
  correctOffLetter.iconType = iconTypes.QUESTION
  correctOffLetter.taskType = recognitionTypes.CORRECT_OFF_LETTER
  const incorrectOnLetter = createStimulus(
    onLetters[0],
    iconTypes.QUESTION,
    true
  )
  incorrectOnLetter.taskType = recognitionTypes.INCORRECT_ON_LETTER
  const incorrectOffLetter = createStimulus(
    offLetters[0],
    iconTypes.QUESTION,
    false
  )
  incorrectOffLetter.taskType = recognitionTypes.INCORRECT_OFF_LETTER
  return {
    stimuli: shuffleArray(stimuli),
    recognition: shuffleArray([
      correctOnLetter,
      correctOffLetter,
      incorrectOnLetter,
      incorrectOffLetter,
    ]),
  }
}
