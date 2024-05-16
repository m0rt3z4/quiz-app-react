import { pickElement } from './letterHelper'
import { recognitionTypes } from '../consts'
import shuffleArray from './shuffleArray'

const createTrialParams = (letter, surprizeOnLetter) => {
  // choose random location for surprize
  const surprizeInfo = pickElement(letter, surprizeOnLetter.isOnLetter)
  // create onLetter Stimuli
  const onLetterLocations = pickElement(
    letter,
    true,
    2,
    !!surprizeOnLetter ? [surprizeInfo.cellId] : []
  )
  const onLetters = onLetterLocations.map((loc) => {
    return {
      ...loc,
      iconType: 'CIRCLE',
    }
  })
  // create offLetter Stimuli
  const offLetterLocations = pickElement(
    letter,
    false,
    2,
    !surprizeInfo.isOnLetter ? [surprizeInfo.cellId] : []
  )
  const offLetters = offLetterLocations.map((loc) => {
    return {
      ...loc,
      iconType: 'CIRCLE',
    }
  })

  // Recognition Task:
  // choose randomly from previesly shown stimuli
  const randomCorrectOnLetter = onLetters[Math.floor(Math.random() * 2)]
  const correctOnLetter = {
    i: randomCorrectOnLetter.i,
    j: randomCorrectOnLetter.j,
    iconType: 'QUESTION',
    taskType: recognitionTypes.CORRECT_ON_LETTER,
  }
  const randomCorrectOffLetter = offLetters[Math.floor(Math.random() * 2)]
  const correctOffLetter = {
    i: randomCorrectOffLetter.i,
    j: randomCorrectOffLetter.j,
    iconType: 'QUESTION',
    taskType: recognitionTypes.CORRECT_OFF_LETTER,
  }

  // randomly create stimuli not shown befor
  const incorrectOnLetterLocation = pickElement(
    letter,
    true,
    1,
    onLetterLocations
  )
  const incorrectOnLetter = {
    i: incorrectOnLetterLocation[0][0],
    j: incorrectOnLetterLocation[0][1],
    iconType: 'QUESTION',
    taskType: recognitionTypes.INCORRECT_ON_LETTER,
  }
  const incorrectOffLetterLocation = pickElement(
    letter,
    true,
    1,
    offLetterLocations
  )
  const incorrectOffLetter = {
    i: incorrectOffLetterLocation[0][0],
    j: incorrectOffLetterLocation[0][1],
    iconType: 'QUESTION',
    taskType: recognitionTypes.INCORRECT_OFF_LETTER,
  }
  const stimuli = [...onLetters, ...offLetters]
  if (!!surprizeInfo) {
    const surpize = {
      i: surprizeInfo.i,
      j: surprizeInfo.j,
      iconType: 'SURPRIZE',
      isOnLetter: surprizeInfo.isOnLetter,
    }
    stimuli.push(surpize)
  }
  let result = {
    stimuli: shuffleArray(stimuli),
    recognition: shuffleArray([
      correctOnLetter,
      correctOffLetter,
      incorrectOnLetter,
      incorrectOffLetter,
    ]),
  }
  // if (!noSurprize) result = { ...result, surpize }
  return result
}

export default createTrialParams
