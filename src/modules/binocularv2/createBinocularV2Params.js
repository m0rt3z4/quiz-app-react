import { imaginationCueTypes } from '../../Components/BinocularTrial/consts'
import shuffleArray from '../../helpers/shuffleArray'

const angleArray = [-37, -30, -22.5, -11.5, 0, 11.5, 22.5, 30, 37]
const cellIdArray = [0, 1, 2, 3, 5, 6, 7, 8]
export const createBinocularV2Params = (size = 64) => {
  // const half = size / 2
  //
  const fused = generateImaginationCue(64).map((cue) => {
    return {
      imaginationCue: cue,
      recallType: 'FUSED',
    }
  })
  const mixed = generateImaginationCue(8).map((cue) => {
    return {
      imaginationCue: cue,
      recallType: 'MIXED',
    }
  })
  let result = shuffleArray([...fused, ...mixed])
  result = shuffleArray(
    result.map((value, index) => {
      return {
        ...value,
        cellId: cellIdArray[index % cellIdArray.length],
        angle: angleArray[index % angleArray.length],
      }
    })
  )
  return result
}

const generateImaginationCue = (size) => {
  const green = new Array(size / 2).fill(imaginationCueTypes.GREEN)
  const red = new Array(size / 2).fill(imaginationCueTypes.RED)
  return [...red, ...green]
}

export const createBinocularV2ParamsRevamped = () => {
  return shuffleArray([
    ...createBinocularV2Blocks(4, imaginationCueTypes.GREEN, 'FUSED'),
    ...createBinocularV2Blocks(4, imaginationCueTypes.RED, 'FUSED'),
    ...createBinocularV2Blocks(1, imaginationCueTypes.RED, 'MIXED'),
  ])
}

export const createBinocularSterescopeParams = () => {
  return shuffleArray([
    ...createBinocularV2Blocks(2, imaginationCueTypes.GREEN, 'RG'),
    ...createBinocularV2Blocks(2, imaginationCueTypes.RED, 'GR'),
    ...createBinocularV2Blocks(2, imaginationCueTypes.GREEN, 'RG'),
    ...createBinocularV2Blocks(2, imaginationCueTypes.RED, 'GR'),
    ...createBinocularV2Blocks(1, imaginationCueTypes.RED, 'MIXED'),
  ])
}

const createBinocularV2Blocks = (
  numberOf8Blocks = 4,
  imaginationCue = imaginationCueTypes.GREEN,
  recallType = 'FUSED'
) => {
  let res = []
  for (let i = 0; i < numberOf8Blocks; i++) {
    let blockAngleArray = [-37, -30, -22.5, -11.5, 11.5, 22.5, 30, 37]
    let imaginationCueArray = generateImaginationCue(8)
    for (let j = 0; j < 8; j++) {
      const angle = blockAngleArray.splice(
        Math.floor(Math.random() * blockAngleArray.length),
        1
      )[0]

      res.push({
        imaginationCue:
          recallType === 'MIXED'
            ? imaginationCueArray.splice(
                Math.floor(Math.random() * imaginationCueArray.length),
                1
              )[0]
            : imaginationCue,
        recallType,
        cellId: j,
        angle,
      })
    }
  }
  return res
}
