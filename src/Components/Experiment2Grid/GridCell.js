import React from 'react'
import { Box } from '@mui/material'
import { cellTypes, cornerTypes } from './consts'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import BinocularCell from './BinocularCell'
import BinocularBullseyeDot from '../BinocularBullseyeDot'
import {
  borderColor,
  bullseyeOpacity,
  cellColor,
  fontColor,
  inquiryBorderColor,
} from '../../consts'

const GridCell = ({
  cellId,
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
  cellSize = 34,
  gridSize,
}) => {
  const { feedbackStatus } = useExp2PersistedContext()
  const i = Math.floor(cellId / gridSize)
  const j = cellId % gridSize
  const borderObj = {
    borderStyle: 'solid',
    borderColor,
    borderWidth: `${i === 0 ? 2 : 1}px ${j === gridSize - 1 ? 2 : 1}px ${
      i === gridSize - 1 ? 2 : 1
    }px ${j === 0 ? 2 : 1}px`,
  }
  // const cellSize = darkTheme ? 85 : 34
  const renderCell = () => {
    const iconLoader = () => {
      switch (cornerType) {
        case cornerTypes.DOWN: {
          return (
            <ArrowDownwardIcon
              sx={{
                color: `${darkTheme ? fontColor : 'black'}`,
                // marginBottom: '-3px',
              }}
            />
          )
        }
        case cornerTypes.UP: {
          return (
            <ArrowUpwardIcon
              sx={{
                color: `${darkTheme ? fontColor : 'black'}`,
                // marginTop: '-3px',
              }}
            />
          )
        }
        case cornerTypes.RIGHT: {
          return (
            <ArrowForwardIcon
              sx={{
                color: `${darkTheme ? fontColor : 'black'}`,
                marginRight: '-1px',
              }}
            />
          )
        }
        case cornerTypes.LEFT: {
          return (
            <ArrowBackIcon
              sx={{
                color: `${darkTheme ? fontColor : 'black'}`,
                marginLeft: '-1px',
              }}
            />
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
              backgroundColor: `${darkTheme ? 'black' : 'white'}`,
              justifyContent: 'center',
              alignItems: 'center',
              // border: `1px solid ${darkTheme ? borderColor : 'black'}`,
              ...borderObj,
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
            borderObj={borderObj}
          />
        )
      }
      case cellTypes.FILLED: {
        return (
          <Box
            sx={{
              display: 'flex',
              backgroundColor: cellColor,
              justifyContent: 'center',
              alignItems: 'center',
              // border: `1px solid ${borderColor}`,
              ...borderObj,
              borderCollapse: 'collapse',
              width: cellSize,
              height: cellSize,
              zIndex: 1,
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
              // borderStyle: 'outset',
              // borderColor: borderColor,
              // borderWidth: `${topBorder ? 2 : 0}px ${rightBorder ? 1 : 0}px ${
              //   bottomBorder ? 1 : 0
              // }px ${leftBorder ? 1 : 0}px`,
              borderCollapse: 'collapse',
              width: cellSize + 1,
              height: cellSize + 1,
            }}
          >
            {cornerType === cornerTypes.EMPTY ? null : iconLoader()}
          </Box>
        )
      }
      case cellTypes.INQUIRY: {
        const bgColor =
          feedbackStatus === 'success'
            ? 'rgba(13, 231, 46, 0.881)'
            : feedbackStatus === 'error'
            ? 'red'
            : cellColor
        return (
          <Box
            sx={{
              display: 'flex',
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              // border: `1px solid ${borderColor}`,
              ...borderObj,
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
                borderColor: inquiryBorderColor,
                borderStyle: 'solid',
                borderWidth: `3px 2px 3px 2px`,
                borderCollapse: 'collapse',
                width: cellSize - 20,
                height: cellSize - 20,
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
              // border: `1px solid ${darkTheme ? borderColor : 'black'}`,
              ...borderObj,
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
