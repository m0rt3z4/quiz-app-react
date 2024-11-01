import { imaginationCueTypes } from '../../Components/BinocularTrial/consts'
import shuffleArray from '../../helpers/shuffleArray'

const angleArray = [0, 11.5, 22.5, 30, 37, 30, 22.5, 11.5]
const cellIdArray = [0, 1, 2, 3, 5, 6, 7, 8]
export const createBinocularV2Params = (size = 8) => {
  const half = size / 2
  //
  const fused = generateImaginationCue(half).map((cue) => {
    return {
      imaginationCue: cue,
      recallType: 'FUSED',
    }
  })
  const mixed = generateImaginationCue(half).map((cue) => {
    return {
      imaginationCue: cue,
      recallType: 'MIXED',
    }
  })
  let result = shuffleArray([...fused, ...mixed])
  result = shuffleArray(
    result.map((value, index) => {
      return { ...value, cellId: cellIdArray[index % cellIdArray.length] }
    })
  )
  return result.map((set, index) => {
    return { ...set, angle: angleArray[index % angleArray.length] }
  })
}

const generateImaginationCue = (size) => {
  const green = new Array(size / 2).fill(imaginationCueTypes.GREEN)
  const red = new Array(size / 2).fill(imaginationCueTypes.RED)
  return [...red, ...green]
}
