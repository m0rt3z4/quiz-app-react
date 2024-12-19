import React from 'react'
import { Box, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import StarRateIcon from '@mui/icons-material/StarRate'
import TagIcon from '@mui/icons-material/Tag'
import { useExperiment3Context } from '../../layouts/Experiment3Layout'
import './style.css'
import { iconLoader } from './iconLoader'

const GridCell = ({
  showStimulus,
  iconType = '',
  backgroundColor,
  isBold = false,
}) => {
  const { feedbackStatus } = useExperiment3Context()
  const isOrientationStimulus = iconType && iconType.substring(0, 3) === 'STI'
  const borderColor = isOrientationStimulus
    ? feedbackStatus
      ? feedbackStatus === 'success'
        ? 'rgba(13, 231, 46, 0.881)'
        : 'rgba(255, 24, 24, 0.881)'
      : 'black'
    : 'black'
  const Icon = (iconType) => {
    switch (iconType) {
      case 'SURPRIZE':
        return (
          // <Typography color={'lightgreen'} fontSize={'40px'}>
          //   *
          // </Typography>
          <StarRateIcon
            fontSize="medium"
            className={
              !!feedbackStatus
                ? feedbackStatus === 'success'
                  ? 'blink-success'
                  : 'blink-error'
                : 'blink-black'
            }
          />
        )
      case 'CENTER_DOT':
        return (
          <Typography fontSize={'35px'} sx={{ paddingBottom: '19px' }}>
            .
          </Typography>
        )
      case 'CIRCLE':
        return <CircleIcon fontSize="10px" sx={{ paddingTop: '3px' }} />
      case 'QUESTION':
        return (
          <QuestionMarkIcon
            fontSize="small"
            className={
              !!feedbackStatus
                ? feedbackStatus === 'success'
                  ? 'question-success'
                  : 'question-error'
                : 'question-black'
            }
          />
        )
      case 'TAG':
        return <TagIcon fontSize="small" />
      default:
        return null
    }
  }

  const content = showStimulus ? (
    isOrientationStimulus ? (
      <img
        src={iconLoader(iconType, backgroundColor === 'white')}
        alt="Rivalry1"
        style={{
          width: `100%`,
          // rotate: `-${degreeValue}deg`,
        }}
      />
    ) : (
      <span>{Icon(iconType)} </span>
    )
  ) : null
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        border: `${isBold ? '2' : '1'}px solid ${borderColor}`,
        borderCollapse: 'collapse',
        width: 34,
        height: 34,
      }}
    >
      {content}
    </Box>
  )
}

export default GridCell
