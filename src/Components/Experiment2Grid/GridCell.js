import React from 'react'
import { Box } from '@mui/material'
import { cellTypes, cornerTypes } from './consts'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useExperiment2Context } from '../../layouts/Experiment2Layout/context'

const GridCell = ({
  showStimulus,
  cellType = cellTypes.EMPTY,
  cornerType = cornerTypes.EMPTY,
  topBorder = false,
  bottomBorder = false,
  leftBorder = false,
  rightBorder = false,
}) => {
  const { feedbackStatus } = useExperiment2Context()
  const renderCell = () => {
    const iconLoader = () => {
      switch (cornerType) {
        case cornerTypes.DOWN: {
          return <ArrowDownwardIcon />
        }
        case cornerTypes.UP: {
          return <ArrowUpwardIcon />
        }
        case cornerTypes.RIGHT: {
          return <ArrowForwardIcon />
        }
        case cornerTypes.LEFT: {
          return <ArrowBackIcon />
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
              backgroundColor:
                cellType === cellTypes.FILLED ? 'black' : 'white',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid black`,
              borderCollapse: 'collapse',
              width: 34,
              height: 34,
            }}
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
              width: 34,
              height: 34,
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
              backgroundColor: 'white',
              justifyContent: justify,
              alignItems: align,
              borderStyle: 'solid',
              borderColor: 'black',
              borderWidth: `${topBorder ? 1 : 0}px ${rightBorder ? 1 : 0}px ${
                bottomBorder ? 1 : 0
              }px ${leftBorder ? 1 : 0}px`,
              borderCollapse: 'collapse',
              width: 36,
              height: 36,
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
            ? 'greenyellow'
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
              width: 34,
              height: 34,
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
                width: 26,
                height: 26,
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
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid black`,
              borderCollapse: 'collapse',
              width: 34,
              height: 34,
            }}
          />
        )
    }
  }
  // return (
  //   <Box
  //     sx={{
  //       display: 'flex',
  //       backgroundColor: cellType === cellTypes.FILLED ? 'black' : 'white',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       borderStyle: 'solid',
  //       borderColor: 'black',
  //       borderWidth: '1px 0px 0px 0px',
  //       borderCollapse: 'collapse',
  //       width: 34,
  //       height: 34,
  //     }}
  //   >
  //     {cellType === cellTypes.INQUIRY ? (
  //       <Box
  //         sx={{
  //           display: 'flex',
  //           backgroundColor: 'black',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           border: `3px solid white`,
  //           borderCollapse: 'collapse',
  //           width: 26,
  //           height: 26,
  //         }}
  //       ></Box>
  //     ) : null}
  //   </Box>
  // )
  return renderCell()
}

export default GridCell
