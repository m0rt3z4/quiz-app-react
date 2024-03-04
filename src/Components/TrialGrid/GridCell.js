import React from 'react'
import { Box, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import StarRateIcon from '@mui/icons-material/StarRate'
import TagIcon from '@mui/icons-material/Tag'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const GridCell = ({
  showStimulus,
  iconType,
  backgroundColor,
  isBold = false,
}) => {
  const { feedbackStatus } = useTrialContext()
  const Icon = (iconType) => {
    switch (iconType) {
      case 'SURPRIZE':
        return (
          // <Typography color={'lightgreen'} fontSize={'40px'}>
          //   *
          // </Typography>
          <StarRateIcon fontSize="medium" color={feedbackStatus} />
        )
      case 'CENTER_DOT':
        return <Typography fontSize={'30px'}>.</Typography>
      case 'CIRCLE':
        return <CircleIcon fontSize="small" />
      case 'QUESTION':
        return <QuestionMarkIcon fontSize="medium" color={feedbackStatus} />
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
        borderCollapse: 'collapse',
        width: 70,
        height: 70,
      }}
    >
      {content}
    </Box>
  )
}

export default GridCell
