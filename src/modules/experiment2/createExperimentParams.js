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
  const perceptual4 = createBlocks(32, blockTypes.PERCEPTUAL, 4)
  const imaginary4 = createBlocks(32, blockTypes.IMAGINARY, 4)
  const perceptual6 = createBlocks(32, blockTypes.PERCEPTUAL, 6)
  const imaginary6 = createBlocks(32, blockTypes.IMAGINARY, 6)
  return {
    perceptual: shuffleArray([...perceptual4, ...perceptual6]),
    imaginary: shuffleArray([...imaginary4, ...imaginary6]),
  }
}
export const createBlocks = (
  size = 8,
  blockType = blockTypes.PERCEPTUAL,
  trialSize = 6
) => {
  const sizeArray = generateRandomBool(size)
  const inquiryArray = generateRandomBool(size)
  const direction = generateRandomBool(size)
  const blocks = sizeArray.map((value, index) => {
    return {
      ...createTrial(trialSize, inquiryArray[index], blockType, value),
      isLeft: direction[index],
      gridLocation: direction[index] ? 'LEFT' : 'RIGHT',
    }
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
    isHalfRecall ? numOfElements / 2 : numOfElements
  )
  // console.log(recallObj)
  return {
    setSize: numOfElements,
    presentation: shuffleArray(presentationStimuli),
    recognition: recallObj.recognition,
    inquiryCell: recallObj.inquiryCell,
    recallType: isInquiryCorrect ? 'SAME' : 'DIFFERENT',
    isInquiryCorrect,
    recognitionType: 'ONE_SHOT',
    recognitionConfiguration: isHalfRecall ? 'PARTIAL' : 'WHOLE',
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
  let inquiryCell = {}

  //pick inquiry cell
  if (isInquiryCorrect) {
    const pickInquiry = presentationArray.splice(0, 1)[0]
    resultArray.push({ cellId: pickInquiry, cellType: cellTypes.INQUIRY })
    inquiryCell = cellIdToCoordinates(pickInquiry)
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
    inquiryCell = cellIdToCoordinates(inquiryCellId)
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
  let resObj = {}
  resultArray.map((res) => {
    return (resObj[res.cellId] = { cellType: res.cellType })
  })
  return { recognition: resObj, inquiryCell }
}

export const cellIdToCoordinates = (cellId, gridLength = 6) => {
  return { i: Math.floor(cellId / gridLength), j: cellId % gridLength }
}
export const coordinatesToCellId = (i, j, gridLength = 6) => {
  return i * gridLength + j
}
