import shuffleArray from '../../../helpers/shuffleArray'

const angleArray = [-37, -30, -22.5, -11.5, 0, 11.5, 22.5, 30, 37]

export const createCalibrationExperiment = (size = 20) => {
  const res = []
  for (let index = 0; index < size; index++) {
    res.push(angleArray[index % angleArray.length])
  }
  return shuffleArray(res)
}
