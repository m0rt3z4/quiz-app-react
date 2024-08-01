import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
import { useExperiment2Context } from '../../layouts/Experiment2Layout/context'
// import Exit from '../../Components/Trial2/Exit'
// import { createNewExperiment } from '../../helpers/trialManagerHelper'

export const Experiment2Page = () => {
  const { changeTitle } = useExperiment2Context()
  useEffect(() => {
    changeTitle('Welcome')
  }, [changeTitle])
  const navigate = useNavigate()

  const redirectUrl = (url) => {
    navigate(url)
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
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 420,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid container sx={{ paddingTop: '20px' }}>
              <Grid item xs={12} justifyContent={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <Typography fontSize={'25px'}>
                    Please read through the Tutorial before starting the task.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                container
                justifyContent={'center'}
                xs={12}
                paddingTop={8}
                spacing={3}
              >
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('trial')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Start
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('preview')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    preview
                  </Button>
                </Grid>
                {/* </Grid> */}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Experiment2Page
