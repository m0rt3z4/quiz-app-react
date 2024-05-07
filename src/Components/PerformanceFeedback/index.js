/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Typography, Slider, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
// import { consentTypes } from '../../consts'

const PerformanceFeedback = ({ onNext }) => {
  const [value, setValue] = useState(0)
  const { showArrows } = useTrialContext()
  useEffect(() => {
    showArrows(false)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const onClickSubmit = () => {
    onNext(value)
  }

  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 100,
      label: '100',
    },
  ]
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
                <Typography variant="subtitle1">
                  Please rate your performance on a scale from 1 to 10, where 1
                  means 'very poor' and 10 means 'excellent'.
                </Typography>
                <Typography variant="body1" paddingTop={5}>
                  How well do you think you did in this section?{' '}
                </Typography>
              </Grid>
              <Grid item xs={8} marginTop={2}>
                <Slider
                  value={value}
                  onChange={handleChange}
                  color="success"
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Grid>
              <Grid item xs={6} marginTop={5}>
                <Button
                  variant="outlined"
                  onClick={onClickSubmit}
                  sx={{ minHeight: '50px' }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PerformanceFeedback
