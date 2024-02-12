import { pickElement, pickSurprize } from './letterHelper'
import { recognitionTypes } from '../consts'
import shuffleArray from './shuffleArray'

const createTrialParams = (letter, noSurprize = false) => {
  // choose random location for surprize
  const surprizeInfo = pickSurprize(letter)
  // create onLetter Stimuli
  const onLetterLocations = pickElement(letter, true, 2)
  const onLetters = onLetterLocations.map((loc, index) => {
    return {
      i: loc[0],
      j: loc[1],
      iconType: 'CIRCLE',
    }
  })
  // create offLetter Stimuli
  const offLetterLocations = pickElement(letter, false, 2)
  const offLetters = offLetterLocations.map((loc, index) => {
    return {
      i: loc[0],
      j: loc[1],
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
  const surpize = {
    i: surprizeInfo.i,
    j: surprizeInfo.j,
    iconType: 'SURPRIZE',
    isOnLetter: surprizeInfo.isOnLetter,
  }
  const stimuli = [...onLetters, ...offLetters]
  if (!noSurprize) stimuli.push(surpize)
  let result = {
    surpize,
    stimuli: shuffleArray(stimuli),
    recognition: shuffleArray([
      correctOnLetter,
      correctOffLetter,
      incorrectOnLetter,
      incorrectOffLetter,
    ]),
  }
  return result
}

export default createTrialParams
