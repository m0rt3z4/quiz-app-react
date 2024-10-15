import React from 'react'
import { Box } from '@mui/material'
import GREEN from '../../assets/Binocular/green_mixed.png'
import RED from '../../assets/Binocular/red_mixed.png'

const BinocularCell = ({
  darkTheme = false,
  cellSize = 34,
  degreeValue = 37,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: `${darkTheme ? 'black' : 'white'}`,
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px solid white`,
        // borderCollapse: 'collapse',
        width: cellSize,
        height: cellSize,
      }}
    >
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          width: '75%',
          display: 'flex',
          rotate: `-${degreeValue}deg`,
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'end',
            // left: `2px`,
            // bottom: `-1px`,
          }}
        >
          <img
            src={GREEN}
            alt="Rivalry1"
            style={{
              width: `95%`,
              //   rotate: `-${degreeValue}deg`,
              opacity: `100%`,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            // left: `-2px`,
            //   bottom: `1px`,
          }}
        >
          <img
            src={RED}
            alt="Rivalry2"
            style={{
              width: `95%`,
              //   rotate: `-${degreeValue}deg`,
              opacity: `100%`,
            }}
          />
        </div>
      </div>
    </Box>
  )
}

export default BinocularCell
