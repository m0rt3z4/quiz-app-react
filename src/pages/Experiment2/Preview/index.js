import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button, Divider } from '@mui/material'
import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'

export const Experiment2PreviewPage = () => {
  const { changeTitle } = useExperiment2Context()
  useEffect(() => {
    changeTitle('Preview Settings')
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
                    Please Rread through the Tutorial before starting the task.
                  </Typography>
                </Box>
                <Divider sx={{ paddingTop: 3 }} />
              </Grid>

              <Grid
                container
                justifyContent={'center'}
                xs={12}
                paddingTop={8}
                spacing={3}
              >
                <Grid item xs={8}>
                  <Experiment2Grid />
                </Grid>
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('/setting')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Settings
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

export default Experiment2PreviewPage
