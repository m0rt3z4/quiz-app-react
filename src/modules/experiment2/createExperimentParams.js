import { cellTypes } from '../../Components/Experiment2Grid/consts'
import shuffleArray from '../../helpers/shuffleArray'

export const getRandomElements = (n = 36, numElements) => {
  let result = []
  let clonedArray = [...Array(n).keys()] // Clone the array to avoid modifying the original array
  while (result.length < numElements && clonedArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length)
    result.push(clonedArray.splice(randomIndex, 1)[0])
  }
  return result
}

export const createExperimentParams = () => {
  const perceptual = createBlocks(8, blockTypes.PERCEPTUAL)
  const imaginary = createBlocks(8, blockTypes.IMAGINARY)
  return { perceptual, imaginary }
}
export const createBlocks = (size = 8, blockType = blockTypes.PERCEPTUAL) => {
  const sizeArray = generateRandomBool(size)
  const inquiryArray = generateRandomBool(size)
  const blocks = sizeArray.map((value, index) => {
    return createTrial(6, inquiryArray[index], blockType, value)
  })
  // console.log(blocks)
  return blocks
}
export const generateRandomBool = (size) => {
  const halfSize = size / 2
  const array = Array(halfSize).fill(true).concat(Array(halfSize).fill(false))
  return shuffleArray(array)
}

export const blockTypes = {
  PERCEPTUAL: 'PERCEPTUAL',
  IMAGINARY: 'IMAGINARY',
  MIXED: 'MIXED',
}

export const createTrial = (
  numOfElements = 6,
  isInquiryCorrect = false,
  blockType = blockTypes.PERCEPTUAL,
  isHalfRecall = false
) => {
  //create presentation step
  let presentationCellType
  if (blockType === blockTypes.PERCEPTUAL) {
    presentationCellType = cellTypes.FILLED
  }
  if (blockType === blockTypes.IMAGINARY) {
    presentationCellType = cellTypes.IMAGINARY
  }

  const presentationStimuli = getRandomElements(36, numOfElements).map(
    (cellId) => {
      return { cellId, cellType: presentationCellType }
    }
  )
  //   console.log('Presentation Stimuli Array => ', presentationStimuli)
  let recallObj = createRecallArrayV2(
    presentationStimuli.map((item) => item.cellId),
    isInquiryCorrect,
    isHalfRecall ? 3 : 6
  )
  // console.log(recallObj)
  return {
    presentation: shuffleArray(presentationStimuli),
    recognition: recallObj,
    isInquiryCorrect,
    recognitionType: 'ONE_SHOT',
  }
}

const createRecallArrayV2 = (
  arr = [],
  isInquiryCorrect = false,
  numOfRecallStimuli = 3
) => {
  if (!arr.length) return []
  const presentationArray = shuffleArray(arr)

  let resultArray = []

  //pick inquiry cell
  if (isInquiryCorrect) {
    const pickInquiry = presentationArray.splice(0, 1)[0]
    resultArray.push({ cellId: pickInquiry, cellType: cellTypes.INQUIRY })
  } else {
    let inquiryCellId = -1
    let i = 0
    while (inquiryCellId < 0) {
      const randomPick = presentationArray[i]
      const coordinates = cellIdToCoordinates(randomPick)
      const possibleMoves = []
      if (coordinates.i > 1) {
        const cellId = coordinatesToCellId(coordinates.i - 2, coordinates.j)
        if (!presentationArray.includes(cellId)) possibleMoves.push(cellId)
      }
      if (coordinates.j > 1) {
        const cellId = coordinatesToCellId(coordinates.i, coordinates.j - 2)
        if (!presentationArray.includes(cellId)) possibleMoves.push(cellId)
      }
      if (coordinates.i < 4) {
        const cellId = coordinatesToCellId(coordinates.i + 2, coordinates.j)
        if (!presentationArray.includes(cellId)) possibleMoves.push(cellId)
      }
      if (coordinates.j < 4) {
        const cellId = coordinatesToCellId(coordinates.i, coordinates.j + 2)
        if (!presentationArray.includes(cellId)) possibleMoves.push(cellId)
      }
      if (possibleMoves.length > 0) {
        inquiryCellId =
          possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
        presentationArray.splice(i, 1)
      }
      i++
    }
    resultArray.push({ cellId: inquiryCellId, cellType: cellTypes.INQUIRY })
  }

  // pick the rest of the recall array
  const randomRecalls = getRandomElements(
    presentationArray.length,
    numOfRecallStimuli - 1
  )
  randomRecalls.map((index) => {
    return resultArray.push({
      cellId: presentationArray[index],
      cellType: cellTypes.FILLED,
    })
  })
  return resultArray
}

// const createRecallArray = (
//   arr = [],
//   correctInquiry = false,
//   numOfRecallStimuli = 6
// ) => {
//   if (!arr.length) return []
//   let clonedArray = [...arr]
//   //   console.log('clonedArrayBefore', clonedArray)
//   let resultArray = []
//   let resultCellIdArray = []

//   //add correct inquiry stimulus
//   if (correctInquiry) {
//     const inquiryStimulus = clonedArray.splice(
//       Math.floor(Math.random() * clonedArray.length),
//       1
//     )[0]
//     resultCellIdArray.push(inquiryStimulus)
//     resultArray.push({ cellId: inquiryStimulus, cellType: cellTypes.INQUIRY })
//   }

//   // find possible moves
//   let temp = clonedArray.map((cellId) => {
//     const coordinates = cellIdToCoordinates(cellId)

//     const res = []
//     if (coordinates.i > 0) {
//       res.push(coordinatesToCellId(coordinates.i - 1, coordinates.j))
//     }
//     if (coordinates.j > 0) {
//       res.push(coordinatesToCellId(coordinates.i, coordinates.j - 1))
//     }
//     if (coordinates.i < 5) {
//       res.push(coordinatesToCellId(coordinates.i + 1, coordinates.j))
//     }
//     if (coordinates.j < 5) {
//       res.push(coordinatesToCellId(coordinates.i, coordinates.j + 1))
//     }
//     return res
//   })
//   //   console.log('Possible Moves Array => ', temp)

//   // add incorrect inquiry stimulus
//   if (!correctInquiry) {
//     const pickedCellId = Math.floor(Math.random() * temp.length)
//     const possibleMoves = temp.splice(pickedCellId, 1)[0]
//     // console.log('pickedCellId => ', pickedCellId)
//     // console.log('possibleMoves => ', possibleMoves)
//     const inquiryCellId =
//       possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
//     // console.log('inquiry after moving => ', inquiryCellId)
//     resultCellIdArray.push(inquiryCellId)
//     resultArray.push({ cellId: inquiryCellId, cellType: cellTypes.INQUIRY })
//   }
//   // console.log(resultArray)
//   // console.log(resultCellIdArray)
//   for (let i = 0; i < numOfRecallStimuli - 1; i++) {
//     const possibleMoves = temp.splice(
//       Math.floor(Math.random() * temp.length),
//       1
//     )[0]
//     let res = []
//     while (res.length === 0 || possibleMoves.length > 0) {
//       const randomMove = possibleMoves.splice(
//         Math.floor(Math.random() * possibleMoves.length),
//         1
//       )[0]
//       if (!resultCellIdArray.includes(randomMove)) res.push(randomMove)
//     }
//     if (!res.length) {
//       console.log('error happened')
//       console.log(resultCellIdArray)
//     }

//     resultCellIdArray.push(res[0])
//     resultArray.push({ cellId: res[0], cellType: cellTypes.FILLED })
//   }
//   //   console.log(resultArray)
//   //   console.log(resultCellIdArray)
//   let resObj = {}
//   resultArray.map((res) => {
//     return (resObj[res.cellId] = { cellType: res.cellType })
//   })
//   return resObj
// }

export const cellIdToCoordinates = (cellId, gridLength = 6) => {
  return { i: Math.floor(cellId / gridLength), j: cellId % gridLength }
}
export const coordinatesToCellId = (i, j, gridLength = 6) => {
  return i * gridLength + j
}
