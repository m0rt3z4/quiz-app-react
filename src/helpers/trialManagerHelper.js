import createTrialParams from './createTrialParams'
import { pickMultipleSurprizes } from './letterHelper'

const HL = ['HL', 'HD', 'IL', 'ID', 'IL', 'ID', 'HL', 'HD']
const HD = ['HD', 'HL', 'ID', 'IL', 'ID', 'IL', 'HD', 'HL']
const IL = ['IL', 'ID', 'HL', 'HD', 'HL', 'HD', 'IL', 'ID']
const ID = ['ID', 'IL', 'HD', 'HL', 'HD', 'HL', 'ID', 'IL']

const randomBlocks = (isLightFirst) => {
  const randomLightFirst = [HL, IL][Math.floor(Math.random() * 2)]
  const randomDarkFirst = [HD, ID][Math.floor(Math.random() * 2)]
  return isLightFirst
    ? [...randomLightFirst, ...randomDarkFirst]
    : [...randomDarkFirst, ...randomLightFirst]
}

export const generateTrials = (n = 16) => {
  const isLightFirst =
    ['L', 'D'][Math.floor(Math.random() * 2)] === 'L' ? true : false
  const trials = randomBlocks(isLightFirst)
  if (n === 16) {
    return trials
  } else if (n === 32) {
    const trials2 = randomBlocks(!isLightFirst)
    return [...trials, ...trials2]
  }
}

export const createNewExperiment = () => {
  const trials = [
    ...generateTrials(32),
    ...generateTrials(16),
    ...generateTrials(16),
  ]
  return trials.map((trial) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: createTrialParams(trial[0]),
    }
  })
}

const populateBlock = (trialsArray = [], blockType) => {
  const params = {
    surprizeBlock: (letter) => {
      return pickMultipleSurprizes(letter)
    },
    stimuliBlock: (letter) => {
      return createTrialParams(letter, true)
    },
    mixedBlocks: (letter) => {
      return createTrialParams(letter)
    },
  }

  return trialsArray.map((trial) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: params[blockType](trial[0]),
    }
  })
}
export const createPracticeParams = () => {
  return {
    surprizeBlock1: populateBlock(pick8TrialBlock(), 'surprizeBlock'),
    stimuliBlock1: populateBlock(pick8TrialBlock(), 'stimuliBlock'),
    mixedBlock: populateBlock(pick8TrialBlock(), 'mixedBlocks'),
    surprizeBlock2: populateBlock(pick8TrialBlock(), 'surprizeBlock'),
    stimuliBlock2: populateBlock(pick8TrialBlock(), 'stimuliBlock'),
  }
}

// const pickRandom8TrialsFrom16 = (trials) => {
//   let res = []
//   for (var i = 0; i < trials.length; i += 4) {
//     const subGroup = trials.slice(i, i + 4)
//     res.push(...pickRandomFromArray(subGroup, 2))
//   }
//   return res
// }

const HL2 = ['HL', 'HD', 'IL', 'ID']
const HD2 = ['HD', 'HL', 'ID', 'IL']
const IL2 = ['IL', 'ID', 'HL', 'HD']
const ID2 = ['ID', 'IL', 'HD', 'HL']

const pick8TrialBlock = () => {
  const isLightFirst =
    ['L', 'D'][Math.floor(Math.random() * 2)] === 'L' ? true : false
  let batch1 = isLightFirst ? [HL2, IL2] : [HD2, ID2]
  let batch2 = isLightFirst ? [HD2, ID2] : [HL2, IL2]
  let arr = []
  arr.push(...batch1[Math.floor(Math.random() * 2)])
  arr.push(...batch2[Math.floor(Math.random() * 2)])
  return arr
}
