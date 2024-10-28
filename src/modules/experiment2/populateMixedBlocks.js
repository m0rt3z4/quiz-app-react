import { cellTypes } from '../../Components/Experiment2Grid/consts'
import {
  getRandomElements,
  cellIdToCoordinates,
  coordinatesToCellId,
} from './createExperimentParams'

export const populateMixedBlocks = (
  trialType = 'pipipi',
  isInquiryCorrect = false,
  isI = false,
  nthLetter = 2,
  isHalfRecall = true
) => {
  // console.log('ss', findInquiryIndex())
  let presentationArray = []
  let recallObj = {}
  const inquryIndex = findInquiryIndex(trialType, isI, nthLetter)
  const recallLength = isHalfRecall ? trialType.length / 2 : trialType.length
  const trialSize = trialType.length
  let inquiryCellId = -1
  let pickedCellId
  const randomCells = getRandomElements(36, trialSize)
  //   const presentationCellsCopy = [...randomCells]
  // console.log('befor', randomCells)
  if (!isInquiryCorrect) {
    //set inquiry cellId
    let i = 0
    while (inquiryCellId < 0) {
      const randomPick = randomCells[i]
      const coordinates = cellIdToCoordinates(randomPick)

      const possibleMoves = []
      if (coordinates.i > 0) {
        const cellId = coordinatesToCellId(coordinates.i - 1, coordinates.j)
        if (!randomCells.includes(cellId)) possibleMoves.push(cellId)
      }
      if (coordinates.j > 0) {
        const cellId = coordinatesToCellId(coordinates.i, coordinates.j - 1)
        if (!randomCells.includes(cellId)) possibleMoves.push(cellId)
      }
      if (coordinates.i < 5) {
        const cellId = coordinatesToCellId(coordinates.i + 1, coordinates.j)
        if (!randomCells.includes(cellId)) possibleMoves.push(cellId)
      }
      if (coordinates.j < 5) {
        const cellId = coordinatesToCellId(coordinates.i, coordinates.j + 1)
        if (!randomCells.includes(cellId)) possibleMoves.push(cellId)
      }
      if (possibleMoves.length > 0) {
        inquiryCellId =
          possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
        pickedCellId = randomCells.splice(i, 1)[0]
      }
      i++
    }
    // console.log('incorrect inquiryCellId', inquiryCellId)
    // console.log('incorrect picked cell id', pickedCellId)
  } else {
    // pick random correct inquiry
    inquiryCellId = randomCells[0]
    pickedCellId = randomCells.splice(0, 1)[0]
  }
  //set the inquiry recall
  recallObj[inquiryCellId] = {
    cellId: inquiryCellId,
    cellType: cellTypes.INQUIRY,
  }
  //pick the rest of recall obj
  const randomRecallPick = getRandomElements(
    randomCells.length,
    recallLength - 1
  )
  randomRecallPick.map((cellId) => {
    const element = randomCells[cellId]
    return (recallObj[element] = {
      cellId: element,
      cellType: cellTypes.FILLED,
    })
  })
  // console.log('Final Recall Object', recallObj)

  //handle presentation
  for (let index = 0; index < trialSize; index++) {
    if (index === inquryIndex) {
      presentationArray.push({
        cellId: pickedCellId,
        cellType: isI ? cellTypes.IMAGINARY : cellTypes.FILLED,
      })
    } else {
      const letter = trialType[index]
      const cellId = randomCells.splice(0, 1)[0]
      presentationArray.push({
        cellId,
        cellType: letter === 'i' ? cellTypes.IMAGINARY : cellTypes.FILLED,
      })
    }
  }
  // console.log('after', randomCells)
  // console.log('Presentation Array => ', presentationArray)
  return {
    presentation: presentationArray,
    recognition: recallObj,
    isInquiryCorrect,
    recognitionType: 'ONE_SHOT',
  }
}

const findInquiryIndex = (trialType = 'iiippp', isI = false, nthLetter = 3) => {
  let n = nthLetter
  for (let index = 0; index < trialType.length; index++) {
    const element = trialType[index]
    if (element === 'i') {
      if (isI) {
        n--
        if (!n) {
          return index
        }
      }
    } else {
      if (!isI) {
        n--
        if (!n) {
          return index
        }
      }
    }
  }
}
