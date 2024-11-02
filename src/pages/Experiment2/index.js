import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography } from '@mui/material'
import { useExp2PersistedContext } from '../../layouts/Exp2PersistedLayout'
import { testVar } from '../../config'
import { SettingsButton } from '../../Components/SettingsButton'
// import Exit from '../../Components/Trial2/Exit'
// import { createNewExperiment } from '../../helpers/trialManagerHelper'

export const Experiment2Page = () => {
  const { changeTitle, darkTheme } = useExp2PersistedContext()
  useEffect(() => {
    changeTitle('Welcome')
    console.log(testVar)
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
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              color: darkTheme ? 'white' : 'black',
              backgroundColor: darkTheme ? 'black' : 'white',
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
                  <Typography fontSize={'25px'}>Experiment 2</Typography>
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
                  <SettingsButton
                    onClickButton={() => redirectUrl('trial')}
                    text="start"
                    size={40}
                    backgroundColor="white"
                  />
                </Grid>
                <Grid item xs={8}>
                  <SettingsButton
                    onClickButton={() => redirectUrl('preview')}
                    text="preview"
                    size={40}
                    backgroundColor="white"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Experiment2Page
