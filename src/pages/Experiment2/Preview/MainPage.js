import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Button, Divider } from '@mui/material'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import { previewPages } from './index'

export const MainPage = ({ setPage }) => {
  const { changeTitle } = useExp2PersistedContext()
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
                    Preview The Trial Blocks:
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={() => setPage(previewPages.PREVIEW_BLOCKS)}
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
                    Preview The Binocular Trial:
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={() => setPage(previewPages.BINOCULAR_TRIAL)}
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
                    Preview The Binocular Trial Version 2:
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={() => setPage(previewPages.BINOCULAR_TRIAL_V2)}
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
