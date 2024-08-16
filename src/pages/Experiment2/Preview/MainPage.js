import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Button, Divider } from '@mui/material'
import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import { previewPages } from './index'

export const MainPage = ({ setPage }) => {
  const { changeTitle } = useExperiment2Context()
  useEffect(() => {
    changeTitle('Preview Settings')
  }, [changeTitle])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
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
            <Grid
              container
              sx={{ paddingTop: '20px' }}
              justifyContent={'center'}
            >
              <Grid item xs={12} justifyContent={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <Typography fontSize={'15px'}>
                    Preview The Trial Grid:
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={() => setPage(previewPages.TRIAL_GRID)}
                  size="large"
                  sx={{
                    width: '70%',
                    backgroundColor: 'lightgray',
                    margin: '5px',
                  }}
                >
                  preview
                </Button>
                <Divider sx={{ paddingTop: 3 }} />
              </Grid>
              <Grid item xs={12} justifyContent={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <Typography fontSize={'15px'}>
                    Preview The Perceptual Trial Blocks:
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={() => setPage(previewPages.PERCEPTUAL_TRIAL_BLOCK)}
                  size="large"
                  sx={{
                    width: '70%',
                    backgroundColor: 'lightgray',
                    margin: '5px',
                  }}
                >
                  preview
                </Button>
                <Divider sx={{ paddingTop: 3 }} />
              </Grid>
              <Grid item xs={12} justifyContent={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <Typography fontSize={'15px'}>
                    Preview The Imaginary Trial Blocks:
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={() => setPage(previewPages.IMAGINARY_TRIAL_BLOCK)}
                  size="large"
                  sx={{
                    width: '70%',
                    backgroundColor: 'lightgray',
                    margin: '5px',
                  }}
                >
                  preview
                </Button>
                <Divider sx={{ paddingTop: 3 }} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainPage
