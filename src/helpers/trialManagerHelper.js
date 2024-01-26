import createTrialParams from './createTrialParams'

const HL = ['HL', 'HD', 'IL', 'ID', 'IL', 'ID', 'HL', 'HD']
const HD = ['HD', 'HL', 'ID', 'IL', 'ID', 'IL', 'HD', 'HL']
const IL = ['IL', 'ID', 'HL', 'HD', 'HL', 'HD', 'IL', 'ID']
const ID = ['ID', 'IL', 'HD', 'HL', 'HD', 'HL', 'ID', 'IL']

export const generateTrials = () => {
  const isLightFirst =
    ['L', 'D'][Math.floor(Math.random() * 2)] === 'L' ? true : false
  const randomLightFirst = [HL, IL][Math.floor(Math.random() * 2)]
  const randomDarkFirst = [HD, ID][Math.floor(Math.random() * 2)]
  return isLightFirst
    ? [...randomLightFirst, ...randomDarkFirst]
    : [...randomDarkFirst, ...randomLightFirst]
}

export const createNewExperiment = () => {
  return generateTrials().map((trial) => {
    return {
      background: trial[1],
      letter: trial[0],
      trialParams: createTrialParams(trial[0]),
    }
  })
}
