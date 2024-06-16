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

export const countStimuli = (arr = []) => {
  return arr.reduce(
    (acc, curr) => {
      if (curr) {
        acc.onLettersCount++
      } else {
        acc.offLettersCount++
      }
      return acc
    },
    { onLettersCount: 0, offLettersCount: 0 }
  )
}

export const pickSurprizeBlock = (letter, stimuliArray) => {
  const { onLettersCount, offLettersCount } = countStimuli(stimuliArray)
  const cells = chooseGridElements(letter, onLettersCount, offLettersCount)
  const res = [
    ...cells.onLetters.map((x) => {
      return createStimulus(x, iconTypes.SURPRIZE, true)
    }),
    ...cells.offLetters.map((x) => {
      return createStimulus(x, iconTypes.SURPRIZE, false)
    }),
  ]
  return shuffleArray(res)
}

export const pickNormalBlock = (
  letter,
  stimuliArray,
  isMixedBlock = false,
  isSurprizeOnLetter
) => {
  const { onLettersCount, offLettersCount } = countStimuli(stimuliArray)
  let numOnLetters = isMixedBlock
    ? isSurprizeOnLetter
      ? onLettersCount + 1
      : onLettersCount
    : onLettersCount
  if (onLettersCount === 0) numOnLetters++
  let numOffLetters = isMixedBlock
    ? isSurprizeOnLetter
      ? offLettersCount
      : offLettersCount + 1
    : offLettersCount
  if (offLettersCount === 0) numOffLetters++
  const { offLetters, onLetters } = chooseGridElements(
    letter,
    numOnLetters + 1,
    numOffLetters + 1
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
  const onLetterStimuli =
    !!onLetters &&
    onLetters.splice(0, onLettersCount).map((location) => {
      return createStimulus(location, iconTypes.CIRCLE, true)
    })
  const offLetterStimuli =
    !!onLetters &&
    offLetters.splice(0, offLettersCount).map((location) => {
      return createStimulus(location, iconTypes.CIRCLE, false)
    })
  stimuli = [...onLetterStimuli, ...offLetterStimuli]
  if (isMixedBlock) stimuli.push(surprize)

  // handle recognition
  const correctOnLetter =
    onLettersCount === 0
      ? createStimulus(onLetters.splice(0, 1)[0], iconTypes.QUESTION, true)
      : {
          ...onLetterStimuli[
            Math.floor(Math.random() * onLetterStimuli.length)
          ],
        }
  correctOnLetter.iconType = iconTypes.QUESTION
  correctOnLetter.taskType =
    onLettersCount > 0
      ? recognitionTypes.CORRECT_ON_LETTER
      : recognitionTypes.INCORRECT_ON_LETTER
  const correctOffLetter =
    offLettersCount === 0
      ? createStimulus(offLetters.splice(0, 1)[0], iconTypes.QUESTION, false)
      : {
          ...offLetterStimuli[
            Math.floor(Math.random() * offLetterStimuli.length)
          ],
        }
  correctOffLetter.iconType = iconTypes.QUESTION
  correctOffLetter.taskType =
    offLettersCount > 0
      ? recognitionTypes.CORRECT_OFF_LETTER
      : recognitionTypes.INCORRECT_OFF_LETTER
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
