import createTrialParams from './createTrialParams'
import { pickRandomFromArray, pickMultipleSurprizes } from './letterHelper'

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

export const createPracticeParams = () => {
  const trials = [...generateTrials(16)]
  const surprizeBlocks = pickRandom8TrialsFrom16(trials).map((trial) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: pickMultipleSurprizes(trial[0]),
    }
  })
  const stimuliBlocks = pickRandom8TrialsFrom16(trials).map((trial) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: createTrialParams(trial[0], true),
    }
  })
  return {
    surprizeBlocks,
    stimuliBlocks,
    fullBlocks: trials.map((trial) => {
      return {
        background: trial[1],
        letter: trial[0],
        trialParams: createTrialParams(trial[0]),
      }
    }),
  }
}

const pickRandom8TrialsFrom16 = (trials) => {
  let res = []
  for (var i = 0; i < trials.length; i += 4) {
    const subGroup = trials.slice(i, i + 4)
    res.push(...pickRandomFromArray(subGroup, 2))
  }
  return res
}

const createSurprizePractice = () => {}
