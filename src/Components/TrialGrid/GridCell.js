import React from 'react'
import { Box, Typography } from '@mui/material'

import { iconLoader } from './iconLoader'

const GridCell = ({ showStimulus, iconType, backgroundColor }) => {
  const Icon = (iconType) => {
    if (iconType === 'SURPRIZE') {
      return <Typography fontSize={'30px'}>*</Typography>
    } else {
      return (
        <img
          src={iconLoader(iconType)}
          alt="fireSpot"
          style={{ display: 'flex', width: '40px', height: '40px' }}
        />
      )
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
