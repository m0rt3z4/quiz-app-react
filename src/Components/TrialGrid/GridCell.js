import React from 'react'
import { Box, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import StarRateIcon from '@mui/icons-material/StarRate'
import TagIcon from '@mui/icons-material/Tag'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import './style.css'
import { exp4BorderColor } from '../../consts'

const GridCell = ({
  showStimulus,
  iconType,
  backgroundColor,
  isBold = false,
}) => {
  const { feedbackStatus, darkTheme } = useTrialContext()
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
                : darkTheme
                ? 'blink-gray'
                : 'blink-black'
            }
          />
        )
      case 'CENTER_DOT':
        return (
          <Typography
            fontSize={'35px'}
            sx={{
              paddingBottom: '19px',
              color: darkTheme ? exp4BorderColor : 'black',
            }}
          >
            .
          </Typography>
        )
      case 'CIRCLE':
        return (
          <CircleIcon
            fontSize="10px"
            sx={{
              paddingTop: '3px',
              color: darkTheme ? exp4BorderColor : 'black',
            }}
          />
        )
      case 'QUESTION':
        return (
          <QuestionMarkIcon
            fontSize="small"
            className={
              !!feedbackStatus
                ? feedbackStatus === 'success'
                  ? 'question-success'
                  : 'question-error'
                : darkTheme
                ? 'question-gray'
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

  const content = showStimulus ? <span>{Icon(iconType)}</span> : null
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        border: `${isBold ? '2' : '1'}px solid ${
          darkTheme ? exp4BorderColor : 'black'
        }`,
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
