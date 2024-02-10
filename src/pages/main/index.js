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
              minHeight: 310,
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
                    It's recommended to complete the tutorial before the trial.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ paddingTop: '25px' }}>
                <Button
                  onClick={() => redirectUrl('/tutorial')}
                  size="large"
                  sx={{
                    width: '60%',
                    backgroundColor: 'lightgray',
                    margin: '5px',
                  }}
                >
                  Tutorial
                </Button>
                <Button
                  onClick={() => redirectUrl('/trial')}
                  size="large"
                  sx={{
                    width: '60%',
                    backgroundColor: 'lightgray',
                    margin: '5px',
                  }}
                >
                  Start Trial
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainPage
