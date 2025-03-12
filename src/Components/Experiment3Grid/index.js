import React from 'react'
import { Box, Card } from '@mui/material'
import GridCell from './GridCell'

export const Experiment3Grid = ({
  size = 5,
  cutomBgArray = [],
  isWhiteThemed,
  stimulus = {},
  isBold = false,
  isPreview = false,
  isMask = false,
  cellSize,
}) => {
  const renderGrid = () => {
    let rows = []
    rows.includes()
    for (let i = 0; i < size; i++) {
      let cells = []
      for (let j = 0; j < size; j++) {
        const bgColor =
          cutomBgArray.length > 0
            ? isWhiteThemed
              ? !cutomBgArray[i][j]
              : cutomBgArray[i][j]
            : isWhiteThemed
        let showStimulus =
          !!stimulus && i === stimulus.i && j === stimulus.j ? true : false

        cells.push(
          i === 2 && j === 2 && (stimulus.i !== 2 || stimulus.j !== 2) ? (
            <GridCell
              backgroundColor={bgColor ? 'white' : 'lightGray'}
              showStimulus={true}
              iconType={'CENTER_DOT'}
              cellSize={cellSize}
              // isBold={isBold}
            />
          ) : (
            <GridCell
              backgroundColor={bgColor ? 'white' : 'lightGray'}
              showStimulus={showStimulus}
              iconType={showStimulus ? stimulus.iconType : null}
              cellSize={cellSize}
              // isBold={isBold}
            />
          )
        )
      }
      rows.push(
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: 420,
            width: '100%',
            alignSelf: 'center',
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
      elevation={0}
      sx={{
        display: 'flex',
        backgroundColor: isWhiteThemed ? 'white' : 'lightGray',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 470,
        minWidth: 350,
        // padding: 1,
        borderRadius: '35px',
        border: `1px solid ${isPreview ? 'white' : 'black'}`,
      }}
    >
      <Box
        sx={{
          display: 'block',
          flexWrap: 'wrap',
          maxWidth: 420,
          border: `${isBold ? '4' : '1'}px solid black`,
        }}
      >
        {renderGrid()}
      </Box>
    </Card>
  )
}
