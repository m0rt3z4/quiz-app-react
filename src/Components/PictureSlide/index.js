import React from 'react'
import { Grid, Card, Typography } from '@mui/material'
// import Tutorial_Both_Block from '../../assets/Tutorial_Both_Block.jpg'
import Tutorial_Memorandum_Block_V2 from '../../assets/Tutorial_Memorandum_Block_V2.jpg'
// import Tutorial_Surprize_Block from '../../assets/Tutorial_Surprize_Block.jpg'
import Tutorial_Surprize_Block_V4 from '../../assets/Tutorial_Surprize_Block_V4.jpg'
import Tutorial_Both_Block_V3 from '../../assets/Tutorial_Both_Block_V3.jpg'

import useKeyboardNavigation from '../../helpers/useKeyboardNavigation'

const PictureSlide = ({ content = null, onNext, onPrevious }) => {
  useKeyboardNavigation(onNext, onPrevious)

  const picLoader = (img) => {
    switch (img) {
      case 'Surprize': {
        return Tutorial_Surprize_Block_V4
      }
      case 'Memorandum': {
        return Tutorial_Memorandum_Block_V2
      }
      case 'Both': {
        return Tutorial_Both_Block_V3
      }
      default:
        break
    }
  }
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: 450,
            borderRadius: '35px',
            padding: 7,
            border: '1px solid black',
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <img
                src={picLoader(content)}
                alt="MU Unviersity"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} paddingTop={2}>
              <Typography>Press the (→) key to continue.</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default PictureSlide
