import React from 'react'
import { Box, Card } from '@mui/material'
import GridCell from './GridCell'
import { cellTypes, cornerTypes } from './consts'
// const mock = {
//   2: {
//     cellType: cellTypes.FILLED,
//   },
//   3: {
//     cellType: cellTypes.INQUIRY,
//   },
//   9: {
//     cellType: cellTypes.FILLED,
//   },
// }

export const Experiment2Grid = ({
  size = 6,
  stimuli = {
    // 2: {
    //   cellType: cellTypes.FILLED,
    // },
    // 3: {
    //   cellType: cellTypes.INQUIRY,
    // },
    // 9: {
    //   cellType: cellTypes.FILLED,
    // },
  },
  darkTheme = false,
}) => {
  const increasedSize = size + 2
  const stimuliCount = Object.keys(stimuli).length
  let imaginaryCellObj = {}
  // handling singe imaginary stimulus
  if (
    stimuliCount === 1 &&
    (Object.values(stimuli)[0].cellType === cellTypes.IMAGINARY ||
      Object.values(stimuli)[0].cellType === cellTypes.IMAGINARY_REVERSE)
  ) {
    const stimulusCellType = Object.values(stimuli)[0].cellType
    const cellId = Object.keys(stimuli)[0]
    const imaginaryCell = {
      i: Math.floor(cellId / size) + 1,
      j: (cellId % size) + 1,
    }
    let firstId = imaginaryCell.i * increasedSize
    if (stimulusCellType === cellTypes.IMAGINARY_REVERSE) firstId += size + 1
    imaginaryCellObj[firstId] = {
      cornerType:
        stimulusCellType === cellTypes.IMAGINARY_REVERSE
          ? cornerTypes.LEFT
          : cornerTypes.RIGHT,
    }
    let secId = imaginaryCell.j
    if (stimulusCellType === cellTypes.IMAGINARY_REVERSE)
      secId += (size + 1) * increasedSize
    imaginaryCellObj[secId] = {
      cornerType:
        stimulusCellType === cellTypes.IMAGINARY_REVERSE
          ? cornerTypes.UP
          : cornerTypes.DOWN,
    }
  }

  const renderGrid = () => {
    let rows = []
    rows.includes()
    for (let i = 0; i < increasedSize; i++) {
      let cells = []
      for (let j = 0; j < increasedSize; j++) {
        // handling corner cells
        if (
          i === 0 ||
          j === 0 ||
          i === increasedSize - 1 ||
          j === increasedSize - 1
        ) {
          const cornerCell = (
            <GridCell
              darkTheme={darkTheme}
              cellType={cellTypes.CORNER}
              bottomBorder={i === 0 && j > 0 && j < size + 1}
              rightBorder={j === 0 && i > 0 && i < size + 1}
              leftBorder={j === size + 1 && i > 0 && i < size + 1}
              topBorder={i === size + 1 && j > 0 && j < size + 1}
            />
          )

          if (!!imaginaryCellObj) {
            const newCellId = i * increasedSize + j
            if (Object.keys(imaginaryCellObj).includes(`${newCellId}`)) {
              cells.push(
                <GridCell
                  cellType={cellTypes.CORNER}
                  darkTheme={darkTheme}
                  bottomBorder={i === 0 && j > 0 && j < size + 1}
                  rightBorder={j === 0 && i > 0 && i < size + 1}
                  leftBorder={j === size + 1 && i > 0 && i < size + 1}
                  topBorder={i === size + 1 && j > 0 && j < size + 1}
                  cornerType={imaginaryCellObj[newCellId].cornerType}
                />
              )
            } else {
              cells.push(cornerCell)
            }
          } else {
            cells.push(cornerCell)
          }
        } else {
          const cellId = (i - 1) * size + (j - 1)
          if (Object.keys(stimuli).includes(`${cellId}`)) {
            // if (stimuli[cellId].cellType === cellTypes.BINOCULAR)
            cells.push(
              <GridCell
                darkTheme={darkTheme}
                cellType={stimuli[cellId].cellType}
              />
            )
          } else {
            cells.push(
              <GridCell
                darkTheme={darkTheme}
                isCenterCell={i - 1 === 1 && j - 1 === 1 && darkTheme}
              />
            )
          }
        }
      }
      rows.push(
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: darkTheme ? 500 : 380,
            maxHeight: darkTheme ? 100 : 35,
            width: '100%',
          }}
        >
          {cells}
        </Box>
      )
    }
    return rows
  }

  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: `${darkTheme ? 'black' : 'white'}`,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 470,
        padding: 6,
        borderRadius: '35px',
        border: '1px solid black',
      }}
    >
      <Box
        sx={{
          display: 'block',
          flexWrap: 'wrap',
          maxWidth: darkTheme ? 500 : 380,
        }}
      >
        {renderGrid()}
      </Box>
    </Card>
  )
}
