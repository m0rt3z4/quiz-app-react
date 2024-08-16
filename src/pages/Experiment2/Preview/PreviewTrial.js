import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Button } from '@mui/material'
import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
// import { cellTypes } from '../../../Components/Experiment2Grid/consts'
import { createTrial } from '../../../modules/experiment2/createExperimentParams'

export const PreviewGridPage = ({ onBack }) => {
  const [stimulus, setStimulus] = useState({})
  const { changeTitle } = useExperiment2Context()
  useEffect(() => {
    changeTitle('')
    setStimulus(createTrial(6))
  }, [changeTitle])

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
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 420,
              borderRadius: '35px',
              padding: 5,
              border: '1px solid black',
            }}
          >
            <Grid container>
              <Grid container justifyContent={'center'} xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Button
                    onClick={() => onBack()}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Experiment2Grid stimuli={stimulus} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PreviewGridPage
