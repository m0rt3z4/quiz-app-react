import React from 'react'
import { Box } from '@mui/material'
import GREEN from '../../assets/Binocular/mixed_green.png'
import RED from '../../assets/Binocular/mixed.red.png'
// import FADED_GREEN from '../../assets/Binocular/greenV3.png'
// import FADED_RED from '../../assets/Binocular/redV3.png'
import FADED_GREEN from '../../assets/Binocular/faded_green.png'
import FADED_RED from '../../assets/Binocular/faded_red.png'

const binocluarOptionsMock = {
  recallType: 'MIXED',
  greenOpacity: 100,
  redOpacity: 100,
  stimulusWidth: 95,
  stimulusDistance: 10,
  degreeValue: 0,
}

const BinocularCell = ({
  darkTheme = false,
  cellSize = 34,
  binocularOptions = binocluarOptionsMock,
  borderObj,
}) => {
  const MixedPatches = () => {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'black',
          width: '65%',
          display: 'flex',
          rotate: `${-1 * binocularOptions.degreeValue}deg`,
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'end',
            left: `${binocularOptions.stimulusDistance / 2}px`,
            // bottom: `-1px`,
          }}
        >
          <img
            src={GREEN}
            alt="Rivalry1"
            style={{
              width: `${binocularOptions.stimulusWidth + 260}%`,
              opacity: `${binocularOptions.greenOpacity}%`,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            left: `-${binocularOptions.stimulusDistance / 2}px`,
            //   bottom: `1px`,
          }}
        >
          <img
            src={RED}
            alt="Rivalry2"
            style={{
              width: `${binocularOptions.stimulusWidth + 240}%`,
              opacity: `${binocularOptions.redOpacity}%`,
            }}
          />
        </div>
      </div>
    )
  }
  const FusedPatches = () => {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'black',
          width: '100%',
          display: 'flex',
          rotate: `${-1 * binocularOptions.degreeValue}deg`,
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'end',
            left: `${binocularOptions.stimulusDistance / 2}px`,
            // bottom: `-1px`,
          }}
        >
          <img
            src={FADED_GREEN}
            alt="Rivalry1"
            style={{
              width: `${binocularOptions.stimulusWidth}px`,
              opacity: `${binocularOptions.greenOpacity}%`,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            left: `-${binocularOptions.stimulusDistance / 2}px`,
            //   bottom: `1px`,
          }}
        >
          <img
            src={FADED_RED}
            alt="Rivalry2"
            style={{
              width: `${binocularOptions.stimulusWidth}px`,
              opacity: `${binocularOptions.redOpacity}%`,
            }}
          />
        </div>
      </div>
    )
  }
  return (
    <Box
      sx={{
        display: 'flex',
        // backgroundColor: `${darkTheme ? 'black' : 'white'}`,
        justifyContent: 'center',
        alignItems: 'center',
        // border: `1px solid ${borderColor}`,
        ...borderObj,
        width: cellSize,
        height: cellSize,
      }}
    >
      {binocularOptions.recallType === 'MIXED' ? (
        <MixedPatches />
      ) : (
        <FusedPatches />
      )}
    </Box>
  )
}

export default BinocularCell
