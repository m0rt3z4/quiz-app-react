import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button, InputLabel } from '@mui/material'

import { useTrialContext } from '../../layouts/TrialLayout/context'

export const SettingPage = ({ darkTheme = false }) => {
  const { changePreviewMode, changeTheme } = useTrialContext()
  // const [checked, setChecked] = useState(preview)

  const navigate = useNavigate()

  React.useEffect(() => {
    changeTheme(darkTheme)
  }, [darkTheme, changeTheme])

  const redirectUrl = (url) => {
    navigate(url)
  }

  const onClickSaveButton = () => {
    changePreviewMode(true)
    redirectUrl('/experiment1/tutorial')
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: darkTheme ? 'black' : 'white' }}>
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
              bgcolor: darkTheme ? '#1a1a1a' : 'white',
              color: darkTheme ? 'white' : 'black',
            }}
          >
            <Grid container>
              <Grid item xs={12} justifyContent={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <Typography fontSize={'25px'}>Settings</Typography>
                </Box>
              </Grid>
              <Grid container xs={12} padding={4}>
                <Grid container item xs={7} alignItems={'center'}>
                  <InputLabel id="demo-simple-select-label">
                    <Typography color={darkTheme ? 'white' : 'black'}>
                      Start Tutorial in Preview Mode:
                    </Typography>
                  </InputLabel>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    onClick={() => onClickSaveButton()}
                    size="large"
                    sx={{
                      width: '90%',
                      backgroundColor: 'orange',
                      margin: '5px',
                      '&:hover': {
                        backgroundColor: darkTheme ? '#ffa726' : '#f57c00',
                      },
                    }}
                  >
                    Preview
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

export default SettingPage
