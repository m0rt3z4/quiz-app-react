// import createTrialParams from './createTrialParams'
import { pickSurprizeBlock, pickNormalBlock } from './createParams'
// import { pickMultipleSurprizes } from './letterHelper'
import shuffleArray from './shuffleArray'

export const createNewExperiment = () => {
  const trials = [
    ...generateTrials(32),
    ...generateTrials(16),
    ...generateTrials(16),
  ]
  return populateBlock(trials, 'mixedBlocks')
}

// const blockTypes = {
//   surprizeBlock: 'surprizeBlock',
//   stimuliBlock: 'stimuliBlock',
//   mixedBlocks: 'mixedBlocks',
// }
export const createPracticeParams = () => {
  return {
    surprizeBlock1: populateBlock(pick8TrialBlock(), 'surprizeBlock'),
    stimuliBlock1: populateBlock(pick8TrialBlock(), 'stimuliBlock'),
    mixedBlock: populateBlock(pick8TrialBlock(), 'mixedBlocks'),
    surprizeBlock2: populateBlock(pick8TrialBlock(), 'surprizeBlock'),
    stimuliBlock2: populateBlock(pick8TrialBlock(), 'stimuliBlock'),
  }
}

// generating blocks of 8 for the practice blocks
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

const generateSurprizes = (size) => {
  const halfSize = size / 2
  const array = Array(halfSize).fill(true).concat(Array(halfSize).fill(false))
  return shuffleArray(array)
}
const generateStimuli = (size) => {
  const array = Array(size * 2)
    .fill(true)
    .concat(Array(size * 2).fill(false))
  return shuffleArray(array)
}
//populating the generated blocks, blockTypes => ['surprizeBlock', 'stimuliBlock', 'mixedBlocks']
const populateBlock = (trialsArray = [], blockType) => {
  const params = {
    surprizeBlock: (letter, stimuliArray) => {
      return pickSurprizeBlock(letter, stimuliArray)
    },
    stimuliBlock: (letter, stimuliArray) => {
      console.log(stimuliArray)
      return pickNormalBlock(letter, stimuliArray, false)
    },
    mixedBlocks: (letter, stimuliArray, isOnLetter) => {
      console.log(stimuliArray)
      return pickNormalBlock(letter, stimuliArray, true, isOnLetter)
    },
  }
  const surprizeList = generateSurprizes(trialsArray.length)
  const stimuliList = generateStimuli(trialsArray.length)
  return trialsArray.map((trial, index) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: params[blockType](
        trial[0],
        stimuliList.splice(0, 4),
        surprizeList[index]
      ),
    }
  })
}

// generating main trials' 64 blocks
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
