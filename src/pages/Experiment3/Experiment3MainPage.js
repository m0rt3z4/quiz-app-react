import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button } from '@mui/material'

export const Experiment3MainPage = () => {
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
              minHeight: 480,
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
                    Welcome to Experiment 3
                  </Typography>
                </Box>
              </Grid>
              <Grid
                container
                justifyContent={'center'}
                xs={12}
                paddingTop={8}
                // spacing={3}
              >
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('tutorial')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Start Trial
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('setting')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Preview Page
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Experiment3MainPage
