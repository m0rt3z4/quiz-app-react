import shuffleArray from '../../../helpers/shuffleArray'

export const createCalibrationExperiment = (size = 20) => {
  const left = new Array(size / 2).fill(true)
  const right = new Array(size / 2).fill(false)
  return shuffleArray([...left, ...right])
}
