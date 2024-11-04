import {
  imaginationCueTypes,
  // recallTypes,
  recallTypesNames,
} from '../../Components/BinocularTrial/consts'
import shuffleArray from '../../helpers/shuffleArray'

const angleArray = [0, 11.5, 22.5, 30, 37, 30, 22.5, 11.5]
export const createBinocularParams = (size = 8) => {
  // const quarter = size / 4
  //
  // const rg = generateImaginationCue(quarter).map((cue) => {
  //   return {
  //     imaginationCue: cue,
  //     recallType: recallTypesNames.RG,
  //     recallName: 'RG',
  //   }
  // })
  const gr = generateImaginationCue(64).map((cue) => {
    return {
      imaginationCue: cue,
      recallType: recallTypesNames.GR,
      recallName: 'GR',
    }
  })
  const vh = generateImaginationCue(6).map((cue) => {
    return {
      imaginationCue: cue,
      recallType: recallTypesNames.VH,
      recallName: 'VH',
    }
  })
  // const hv = generateImaginationCue(quarter).map((cue) => {
  //   return {
  //     imaginationCue: cue,
  //     recallType: recallTypesNames.HV,
  //     recallName: 'HV',
  //   }
  // })
  const result = shuffleArray([...gr, ...vh])
  return result.map((set, index) => {
    return { ...set, angle: angleArray[index % angleArray.length] }
  })
}

const generateImaginationCue = (size) => {
  const green = new Array(size / 2).fill(imaginationCueTypes.GREEN)
  const red = new Array(size / 2).fill(imaginationCueTypes.RED)
  return [...red, ...green]
}
