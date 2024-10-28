import { populateMixedBlocks } from "./populateMixedBlocks"

const mixedBlockTypes = ['iipp', 'ppii', 'ipip', 'pipi']

export const createMixedBlock = () => {
  //   const temp = mixedBlockTypes.map((mixedBlockType) => {
  //     return { trialType: mixedBlockType }
  //   })
  console.log(createBlocks('iiippp'))
  populateMixedBlocks()
}
export const createBlocks = (trialType = '', numOfBlocks = 1) => {
  let res = []
  for (let i = 0; i < numOfBlocks; i++) {
    res = [...res, ...injectCounterBalance(trialType)]
  }
  return res
}
const injectCounterBalance = (trialType = '') => {
  const blockSize = trialType.length === 4 ? 8 : 12
  const correctInquiry = pickLetter(
    new Array(blockSize / 2).fill({
      trialType,
      isInquiryCorrect: true,
    }),
    trialType.length
  )

  const incorrectInquiry = pickLetter(
    new Array(blockSize / 2).fill({
      trialType,
      isInquiryCorrect: false,
    }),
    trialType.length
  )

  return [...correctInquiry, ...incorrectInquiry]
}

const pickLetter = (arr = [], trialSize = 4) => {
  const iLetter = pickNthLetter(
    new Array(arr.length / 2).fill({ isI: true }).map((value, index) => {
      return { ...value, ...arr[index] }
    }),
    trialSize
  )
  const pLetter = pickNthLetter(
    new Array(arr.length / 2).fill({ isI: false }).map((value, index) => {
      return { ...value, ...arr[index + arr.length / 2] }
    }),
    trialSize
  )
  return [...iLetter, ...pLetter]
}
const pickNthLetter = (arr = [], trialSize = 4) => {
  if (trialSize === 4) {
    const first = new Array(arr.length / 2)
      .fill({ nthLetter: 1 })
      .map((value, index) => {
        return { ...value, ...arr[index] }
      })
    const second = new Array(arr.length / 2)
      .fill({ nthLetter: 2 })
      .map((value, index) => {
        return { ...value, ...arr[index + arr.length / 2] }
      })
    return [...first, ...second]
  } else {
    const first = new Array(arr.length / 3)
      .fill({ nthLetter: 1 })
      .map((value, index) => {
        return { ...value, ...arr[index] }
      })
    const second = new Array(arr.length / 3)
      .fill({ nthLetter: 2 })
      .map((value, index) => {
        return { ...value, ...arr[index + arr.length / 3] }
      })
    const third = new Array(arr.length / 3)
      .fill({ nthLetter: 3 })
      .map((value, index) => {
        return { ...value, ...arr[index + (arr.length * 2) / 3] }
      })
    return [...first, ...second, ...third]
  }
}
