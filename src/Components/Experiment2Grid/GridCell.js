import React from 'react'
import { Box } from '@mui/material'
import { borderColor, cellTypes, cornerTypes, bullseyeOpacity } from './consts'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import BinocularCell from './BinocularCell'
import BinocularBullseyeDot from '../BinocularBullseyeDot'

const GridCell = ({
  darkTheme = false,
  isCenterCell = false,
  cellType = cellTypes.EMPTY,
  patchType = '',
  cornerType = cornerTypes.EMPTY,
  topBorder = false,
  bottomBorder = false,
  leftBorder = false,
  rightBorder = false,
  binocularOptions = {},
}) => {
  const { feedbackStatus } = useExp2PersistedContext()
  const cellSize = darkTheme ? 85 : 34
  const renderCell = () => {
    const iconLoader = () => {
      switch (cornerType) {
        case cornerTypes.DOWN: {
          return (
            <ArrowDownwardIcon
              sx={{ color: `${darkTheme ? 'white' : 'black'}` }}
            />
          )
        }
        case cornerTypes.UP: {
          return (
            <ArrowUpwardIcon
              sx={{ color: `${darkTheme ? 'white' : 'black'}` }}
            />
          )
        }
        case cornerTypes.RIGHT: {
          return (
            <ArrowForwardIcon
              sx={{ color: `${darkTheme ? 'white' : 'black'}` }}
            />
          )
        }
        case cornerTypes.LEFT: {
          return (
            <ArrowBackIcon sx={{ color: `${darkTheme ? 'white' : 'black'}` }} />
          )
        }
        default:
          break
      }
    }
    switch (cellType) {
      case cellTypes.EMPTY: {
        return (
          <Box
            sx={{
              display: 'flex',
              backgroundColor: `${darkTheme ? 'black' : 'rgb(247, 241, 241)'}`,
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid ${darkTheme ? borderColor : 'black'}`,
              borderCollapse: 'collapse',
              width: cellSize,
              height: cellSize,
            }}
          >
            {isCenterCell ? (
              <BinocularBullseyeDot width={13} opacity={bullseyeOpacity} />
            ) : null}
          </Box>
        )
      }
      case cellTypes.BINOCULAR: {
        return (
          <BinocularCell
            darkTheme
            cellSize={cellSize}
            binocularOptions={binocularOptions}
          />
        )
      }
      case cellTypes.FILLED: {
        return (
          <Box
            sx={{
              display: 'flex',
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid gray`,
              borderCollapse: 'collapse',
              width: cellSize,
              height: cellSize,
            }}
          />
        )
      }
      case cellTypes.CORNER: {
        let justify = 'center'
        let align = 'center'
        if (cornerType !== cornerTypes.EMPTY) {
          if (cornerType === cornerTypes.DOWN) {
            align = 'end'
          } else if (cornerType === cornerTypes.UP) {
            align = 'start'
          }
          if (cornerType === cornerTypes.RIGHT) {
            justify = 'end'
          } else if (cornerType === cornerTypes.LEFT) {
            justify = 'start'
          }
        }
        return (
          <Box
            sx={{
              display: 'flex',
              backgroundColor: `${darkTheme ? 'black' : 'white'}`,
              justifyContent: justify,
              alignItems: align,
              borderStyle: 'solid',
              borderColor: 'black',
              borderWidth: `${topBorder ? 1 : 0}px ${rightBorder ? 1 : 0}px ${
                bottomBorder ? 1 : 0
              }px ${leftBorder ? 1 : 0}px`,
              borderCollapse: 'collapse',
              width: cellSize + 2,
              height: cellSize + 2,
            }}
          >
            {cornerType === cornerTypes.EMPTY ? null : (
              <span>{iconLoader()}</span>
            )}
          </Box>
        )
      }
      case cellTypes.INQUIRY: {
        const bgColor =
          feedbackStatus === 'success'
            ? 'rgba(13, 231, 46, 0.881)'
            : feedbackStatus === 'error'
            ? 'red'
            : 'black'
        return (
          <Box
            sx={{
              display: 'flex',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid black`,
              borderCollapse: 'collapse',
              width: cellSize,
              height: cellSize,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                border: `3px solid white`,
                borderCollapse: 'collapse',
                width: cellSize - 8,
                height: cellSize - 8,
              }}
            />
          </Box>
        )
      }
      default:
        return (
          <Box
            sx={{
              display: 'flex',
              backgroundColor: `${darkTheme ? 'black' : 'white'}`,
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid ${darkTheme ? borderColor : 'black'}`,
              borderCollapse: 'collapse',
              width: cellSize,
              height: cellSize,
            }}
          />
        )
    }
  }
  return renderCell()
}

export default GridCell
