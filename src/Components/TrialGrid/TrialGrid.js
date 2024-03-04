import React from 'react'
import { Box, Card } from '@mui/material'
import GridCell from './GridCell'

export const TrialGrid = ({
  size = 5,
  cutomBgArray = [],
  isWhiteThemed,
  stimulus = {},
  isBold = false,
  isMask = false,
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

        // const iconType = isMask
        //   ? bgColor
        //     ? null
        //     : 'TAG'
        //   : showStimulus
        //   ? stimulus.iconType
        //   : null
        cells.push(
          i === 2 && j === 2 && (stimulus.i !== 2 || stimulus.j !== 2) ? (
            <GridCell
              backgroundColor={bgColor ? 'white' : 'lightGray'}
              showStimulus={true}
              iconType={'CENTER_DOT'}
              // isBold={isBold}
            />
          ) : (
            <GridCell
              backgroundColor={bgColor ? 'white' : 'lightGray'}
              showStimulus={showStimulus}
              iconType={showStimulus ? stimulus.iconType : null}
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
        minHeight: 450,
        padding: 6,
        borderRadius: '35px',
        border: '1px solid black',
      }}
    >
      <Box
        sx={{
          display: 'block',
          flexWrap: 'wrap',
          maxWidth: 620,
          border: `${isBold ? '4' : '1'}px solid black`,
        }}
      >
        {renderGrid()}
      </Box>
    </Card>
  )
}
