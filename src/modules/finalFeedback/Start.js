import React from 'react'
import { Grid, Typography, Card, Button } from '@mui/material'

const Intro = ({ onNext }) => {
  const onClickSubmit = () => {
    onNext()
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
            maxHeight: 540,
            borderRadius: '35px',
            padding: 7,
            border: '1px solid black',
          }}
        >
          <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography variant="h2">End of Trial</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" paddingTop={3}>
                Now please answer the following questions.
              </Typography>
            </Grid>
            <Grid item xs={6} marginTop={5}>
              <Button
                variant="outlined"
                onClick={onClickSubmit}
                sx={{ minHeight: '50px' }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
    // </Box>
  )
}

export default Intro
