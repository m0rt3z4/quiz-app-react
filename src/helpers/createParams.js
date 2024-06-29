import { recognitionTypes } from '../consts'
import { chooseGridElements, pickExtraSurprize } from './letterPicker'
import shuffleArray from './shuffleArray'

const iconTypes = {
  SURPRIZE: 'SURPRIZE',
  CIRCLE: 'CIRCLE',
  QUESTION: 'QUESTION',
}

const createStimulus = (location, iconType, isOnLetter, taskType) => {
  const obj = {
    i: location === 0 ? 0 : Math.floor(location / 5),
    j: location === 0 ? 0 : location % 5,
    iconType,
    isOnLetter,
  }
  if (!!taskType) obj.taskType = taskType
  return obj
}

export const countStimuli = (arr = []) => {
  return arr.reduce(
    (acc, curr) => {
      switch (curr) {
        case recognitionTypes.CORRECT_ON_LETTER: {
          acc[recognitionTypes.CORRECT_ON_LETTER]++
          return acc
        }
        case recognitionTypes.CORRECT_OFF_LETTER: {
          acc[recognitionTypes.CORRECT_OFF_LETTER]++
          return acc
        }
        case recognitionTypes.INCORRECT_ON_LETTER: {
          acc[recognitionTypes.INCORRECT_ON_LETTER]++
          return acc
        }
        case recognitionTypes.INCORRECT_OFF_LETTER: {
          acc[recognitionTypes.INCORRECT_OFF_LETTER]++
          return acc
        }

        default:
          return acc
      }
    },
    {
      [recognitionTypes.CORRECT_ON_LETTER]: 0,
      [recognitionTypes.CORRECT_OFF_LETTER]: 0,
      [recognitionTypes.INCORRECT_ON_LETTER]: 0,
      [recognitionTypes.INCORRECT_OFF_LETTER]: 0,
    }
  )
}
export const countSurprize = (arr = []) => {
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
  const { onLettersCount, offLettersCount } = countSurprize(stimuliArray)
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
  const countsArray = countStimuli(stimuliArray)
  let numOnLetters =
    countsArray[recognitionTypes.CORRECT_ON_LETTER] +
    countsArray[recognitionTypes.INCORRECT_ON_LETTER] * 2
  let numOffLetters =
    countsArray[recognitionTypes.CORRECT_OFF_LETTER] +
    countsArray[recognitionTypes.INCORRECT_OFF_LETTER] * 2

  if (isMixedBlock) {
    if (isSurprizeOnLetter) {
      if (numOnLetters < 8) numOnLetters++
    } else {
      if (numOffLetters < 8) numOffLetters++
    }
  }
  // console.log({ countsArray })
  // console.log({ isSurprizeOnLetter })
  // console.log({ numOnLetters, numOffLetters })
  const { offLetters, onLetters } = chooseGridElements(
    letter,
    numOnLetters,
    numOffLetters
  )

  let stimuliList = []

  if (isMixedBlock) {
    if (isSurprizeOnLetter) {
      let extraSurprize
      if (numOnLetters === 8) {
        extraSurprize = createStimulus(
          pickExtraSurprize(true),
          iconTypes.SURPRIZE,
          true
        )
      }
      stimuliList.push(
        numOnLetters === 8
          ? extraSurprize
          : createStimulus(onLetters.splice(0, 1)[0], iconTypes.SURPRIZE, true)
      )
    } else {
      let extraSurprize
      if (numOffLetters === 8) {
        extraSurprize = createStimulus(
          pickExtraSurprize(false),
          iconTypes.SURPRIZE,
          false
        )
      }
      stimuliList.push(
        numOffLetters === 8
          ? extraSurprize
          : createStimulus(
              offLetters.splice(0, 1)[0],
              iconTypes.SURPRIZE,
              false
            )
      )
    }
  }
  let recognitionList = []

  if (countsArray[recognitionTypes.CORRECT_ON_LETTER] > 0) {
    const items = onLetters.splice(
      0,
      countsArray[recognitionTypes.CORRECT_ON_LETTER]
    )
    items.map((location) => {
      return recognitionList.push(
        createStimulus(
          location,
          iconTypes.QUESTION,
          true,
          recognitionTypes.CORRECT_ON_LETTER
        )
      )
    })
    items.map((location) => {
      return stimuliList.push(createStimulus(location, iconTypes.CIRCLE, true))
    })
  }

  if (countsArray[recognitionTypes.CORRECT_OFF_LETTER] > 0) {
    const items = offLetters.splice(
      0,
      countsArray[recognitionTypes.CORRECT_OFF_LETTER]
    )
    items.map((location) => {
      return recognitionList.push(
        createStimulus(
          location,
          iconTypes.QUESTION,
          false,
          recognitionTypes.CORRECT_OFF_LETTER
        )
      )
    })
    items.map((location) => {
      return stimuliList.push(createStimulus(location, iconTypes.CIRCLE, false))
    })
  }

  if (countsArray[recognitionTypes.INCORRECT_ON_LETTER] > 0) {
    onLetters
      .splice(0, countsArray[recognitionTypes.INCORRECT_ON_LETTER])
      .map((location) => {
        return recognitionList.push(
          createStimulus(
            location,
            iconTypes.QUESTION,
            true,
            recognitionTypes.INCORRECT_ON_LETTER
          )
        )
      })
    onLetters
      .splice(0, countsArray[recognitionTypes.INCORRECT_ON_LETTER])
      .map((location) => {
        return stimuliList.push(
          createStimulus(location, iconTypes.CIRCLE, true)
        )
      })
  }

  if (countsArray[recognitionTypes.INCORRECT_OFF_LETTER] > 0) {
    offLetters
      .splice(0, countsArray[recognitionTypes.INCORRECT_OFF_LETTER])
      .map((location) => {
        return recognitionList.push(
          createStimulus(
            location,
            iconTypes.QUESTION,
            false,
            recognitionTypes.INCORRECT_OFF_LETTER
          )
        )
      })
    offLetters
      .splice(0, countsArray[recognitionTypes.INCORRECT_OFF_LETTER])
      .map((location) => {
        return stimuliList.push(
          createStimulus(location, iconTypes.CIRCLE, false)
        )
      })
  }
  return {
    stimuli: shuffleArray(stimuliList),
    recognition: shuffleArray(recognitionList),
  }
}
