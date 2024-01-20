import React from 'react'
import { Box } from '@mui/material'

const GridCell = ({ showStimulus, iconType, backgroundColor }) => {
  // const backgroundColor = isLightBackground ? 'white' : 'lightgray'
  const Icon = (iconType) => {
    if (iconType === 'SURPRIZE') {
      return '*'
    } else {
      return '🌟'
    }
  }
  const content = showStimulus ? <span>{Icon(iconType)}</span> : null
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        width: 70,
        height: 70,
      }}
    >
      {content}
    </Box>
  )
}

export default GridCell
