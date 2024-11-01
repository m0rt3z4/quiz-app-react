import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'
import { keyboardKeys } from '../../consts'

const Slide = ({ content = [], onNext }) => {
  //press space to continue
  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === keyboardKeys.RIGHT_ARROW) onNext()
  }
  useKeyboard(Date.now(), [keyboardKeys.RIGHT_ARROW], keyboardCallback)

  return (
    <Grid
      container
      justifyContent={'center'}
      spacing={2}
      // sx={{ paddingTop: 1 }}
    >
      <Grid container item xs={12}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: 'black',
            justifyContent: 'center',
            width: '100%',
            minHeight: 450,
            maxHeight: 540,
            borderRadius: '35px',
            padding: 7,
            border: '1px solid black',
          }}
        >
          <Box>
            <Typography fontSize={22} paddingTop={10}>
              Tutorial
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide
