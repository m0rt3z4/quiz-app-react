import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'

const SurprizeBlocksSlide = ({ onNext }) => {
  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === ' ') onNext()
  }
  useKeyboard(Date.now(), [' '], keyboardCallback)

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      justifyContent={'center'}
      // alignItems={'baseline'}
      spacing={2}
      // sx={{ paddingTop: 1 }}
    >
      <Grid container item xs={12}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // width: '100%',
            minHeight: 450,
            maxHeight: 540,
            borderRadius: '35px',
            padding: 7,
            border: '1px solid black',
          }}
        >
          <Box>
            <Typography fontSize={'25px'} marginBottom={10}>
              {'SurprizeBlocksSlide.'}
            </Typography>
            <Typography fontSize={'25px'}>
              {
                "Answer if the '*' icon was on the imagined letter or not by pressing Right for Yes and Left for No."
              }
            </Typography>
            <Typography fontSize={'25px'} paddingTop={10}>
              {'press space to continue.'}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
    // </Box>
  )
}

export default SurprizeBlocksSlide
