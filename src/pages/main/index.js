import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button } from '@mui/material'

export const MainPage = () => {
  const navigate = useNavigate()

  const redirectUrl = (url) => {
    navigate(url)
  }

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
                  <Typography fontSize={'25px'}>Welcome</Typography>
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
                    onClick={() => redirectUrl('/experiment1')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Experiment 1
                  </Button>
                </Grid>
                <Grid item xs={8} paddingTop={1}>
                  <Button
                    onClick={() => redirectUrl('/experiment2')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Experiment 2
                  </Button>
                </Grid>
                <Grid item xs={8} paddingTop={1}>
                  <Button
                    onClick={() => redirectUrl('/experiment3')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Experiment 3
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

export default MainPage
