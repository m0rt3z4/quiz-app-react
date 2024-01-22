import React from 'react'
import { Box, Card } from '@mui/material'
import GridCell from './GridCell'

export const TrialGrid = ({
  size = 5,
  cutomBgArray = [],
  isWhiteThemed,
  stimulus = {},
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
          <GridCell
            backgroundColor={bgColor ? 'white' : 'lightGray'}
            showStimulus={showStimulus}
            iconType={showStimulus ? stimulus.iconType : null}
          />
        )
      }
      rows.push(
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: 620,
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
      sx={{
        display: 'flex',
        backgroundColor: isWhiteThemed ? 'white' : 'lightGray',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        borderRadius: '35px',
        border: '1px solid black',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 620,
          width: '100%',
          alignSelf: 'center',
        }}
      >
        {renderGrid()}
      </Box>
    </Card>
  )
}
