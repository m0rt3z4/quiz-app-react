// import createTrialParams from './createTrialParams'
import { recognitionTypes } from '../consts'
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
    mixedBlock: createNewExperiment(),
    surprizeBlock2: populateBlock(pick8TrialBlock(), 'surprizeBlock'),
    stimuliBlock2: populateBlock(pick8TrialBlock(), 'stimuliBlock'),
  }
}

export const createSuprizeBlockParams = ()=>{
  const trials = generateTrials(16)
  return populateBlock(trials, 'surprizeBlock')
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

export const generateSurprizes = (size) => {
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
export const generateRecognition = (size) => {
  const array = Array(size)
    .fill(recognitionTypes.CORRECT_OFF_LETTER)
    .concat(Array(size).fill(recognitionTypes.CORRECT_ON_LETTER))
    .concat(Array(size).fill(recognitionTypes.INCORRECT_OFF_LETTER))
    .concat(Array(size).fill(recognitionTypes.INCORRECT_ON_LETTER))
  return shuffleArray(array)
}
//populating the generated blocks, blockTypes => ['surprizeBlock', 'stimuliBlock', 'mixedBlocks']
const populateBlock = (trialsArray = [], blockType) => {
  const params = {
    surprizeBlock: (letter, stimuliArray, noUse, stimuliArray2) => {
      return pickSurprizeBlock(letter, stimuliArray2)
    },
    stimuliBlock: (letter, stimuliArray) => {
      return pickNormalBlock(letter, stimuliArray, false)
    },
    mixedBlocks: (letter, stimuliArray, isOnLetter) => {
      return pickNormalBlock(letter, stimuliArray, true, isOnLetter)
    },
  }
  const surprizeList = generateSurprizes(trialsArray.length)
  const stimuliList = generateStimuli(trialsArray.length)
  const recognitionList = generateRecognition(trialsArray.length)
  return trialsArray.map((trial, index) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: params[blockType](
        trial[0],
        recognitionList.splice(0, 4),
        surprizeList[index],
        stimuliList.splice(0, 4)
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
