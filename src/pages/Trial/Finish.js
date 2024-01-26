/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const Finish = () => {
  const { changeTitle, showArrows } = useTrialContext()

  useEffect(() => {
    showArrows(false)
    changeTitle('Thank You')
  }, [])

  const onClickNext = () => {
    return
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        // alignItems={'baseline'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 310,
              maxHeight: 430,
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
              <Grid item xs={8}>
                <Typography>We appriciate your participation.</Typography>
              </Grid>
              <Grid item xs={8}>
                <Button onClick={onClickNext}>Main Page</Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Finish
