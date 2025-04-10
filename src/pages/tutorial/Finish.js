/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const Finish = ({ darkTheme = false }) => {
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
              border: `1px solid ${darkTheme ? 'white' : 'black'}`,
              backgroundColor: darkTheme ? 'black' : 'white',
            }}
          >
            <Grid
              container
              justifyContent={'center'}
              alignItems={'center'}
              spacing={2}
            >
              <Grid item xs={8}>
                <Typography
                  fontSize={'25px'}
                  sx={{ color: darkTheme ? 'white' : 'inherit' }}
                >
                  Thanks for your participation in this study!
                </Typography>
                <Typography
                  fontSize={'25px'}
                  sx={{ color: darkTheme ? 'white' : 'inherit' }}
                >
                  Remember to pick up a debrief sheet and feel free to inquire
                  about any questions with the experimenter prior to exiting the
                  lab.
                </Typography>
                <Typography
                  fontSize={'25px'}
                  sx={{ color: darkTheme ? 'white' : 'inherit' }}
                >
                  Wishing you an excellent day!
                </Typography>
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
