import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
import Lab from '../../assets/Lab.jpg'

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
              <Grid container justifyContent={'center'} xs={12} paddingTop={8} spacing={3}>
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('/tutorial')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Tutorial
                  </Button>
                  <img src={Lab} alt="lab" style={{paddingTop: 30}} />
                  {/* <Button
                    onClick={() => redirectUrl('/trial')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Start Trial
                  </Button> */}
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
