import React from 'react'
import { Box, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import TagIcon from '@mui/icons-material/Tag'

const GridCell = ({
  showStimulus,
  iconType,
  backgroundColor,
  isBold = false,
}) => {
  const Icon = (iconType) => {
    switch (iconType) {
      case 'SURPRIZE':
        return <Typography fontSize={'30px'}>*</Typography>
      case 'CENTER_DOT':
        return <Typography fontSize={'30px'}>.</Typography>
      case 'CIRCLE':
        return <CircleIcon fontSize="small" />
      case 'QUESTION':
        return <QuestionMarkIcon fontSize="medium" />
      case 'TAG':
        return <TagIcon fontSize="small" />
      default:
        return null
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
        border: `${isBold ? '2' : '1'}px solid black`,
        width: 70,
        height: 70,
      }}
    >
      {content}
    </Box>
  )
}

export default GridCell
