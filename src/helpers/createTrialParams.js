import { pickElement, pickRandomDirection, pickSurprize } from './letterHelper'
import { recognitionTypes } from '../consts'
import shuffleArray from './shuffleArray'

const createTrialParams = (letter) => {
  // choose random location for surprize
  const surprizeInfo = pickSurprize(letter)
  // choose random directions
  const randomDirections = pickRandomDirection(6)
  // create onLetter Stimuli
  const onLetterLocations = pickElement(letter, true, 2)
  const onLetters = onLetterLocations.map((loc, index) => {
    return {
      i: loc[0],
      j: loc[1],
      iconType: `STIMULUS_${randomDirections[index]}`,
    }
  })
  // create offLetter Stimuli
  const offLetterLocations = pickElement(letter, false, 2)
  const offLetters = offLetterLocations.map((loc, index) => {
    return {
      i: loc[0],
      j: loc[1],
      iconType: `STIMULUS_${randomDirections[index + 2]}`,
    }
  })

  // Recognition Task:
  // choose randomly from previesly shown stimuli
  const correctOnLetter = {
    ...onLetters[Math.floor(Math.random() * 2)],
    taskType: recognitionTypes.CORRECT_ON_LETTER,
  }
  const correctOffLetter = {
    ...offLetters[Math.floor(Math.random() * 2)],
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
    iconType: `STIMULUS_${randomDirections[4]}`,
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
    iconType: `STIMULUS_${randomDirections[5]}`,
    taskType: recognitionTypes.INCORRECT_OFF_LETTER,
  }

  let result = {
    surpize: {
      i: surprizeInfo.i,
      j: surprizeInfo.j,
      iconType: 'SURPRIZE',
      isOnLetter: surprizeInfo.isOnLetter,
    },
    stimuli: shuffleArray([
      ...onLetters,
      ...offLetters,
      {
        i: surprizeInfo.i,
        j: surprizeInfo.j,
        iconType: 'SURPRIZE',
        isOnLetter: surprizeInfo.isOnLetter,
      },
    ]),
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
