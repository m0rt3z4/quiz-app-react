import { Box, Grid, Card, Typography } from '@mui/material'
import { Outlet } from 'react-router'
import { useTrialContext } from './context'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const TrialLayout = () => {
  const {
    outletWidth,
    leftBarVisible,
    rightBarVisible,
    rightBarWarning,
    leftBarWarning,
    darkTheme,
  } = useTrialContext()

  // console.log(rightBarWarning, leftBarWarning, feedbackStatus)
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        height: '100vh',
        backgroundColor: darkTheme ? 'black' : '#e6dada',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        justifyContent={'center'}
        alignContent={'center'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ paddingTop: 1 }}
          spacing={2}
        >
          <Grid item xs={1}>
            {leftBarVisible && (
              <Grid item>
                {!!leftBarWarning && (
                  <Typography
                    color={darkTheme ? 'white' : 'black'}
                    sx={{ marginBottom: 1 }}
                  >
                    {leftBarWarning}
                  </Typography>
                )}
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '150px',
                    borderRadius: '35px',
                    border: `1px solid ${darkTheme ? 'white' : 'black'}`,
                    bgcolor: darkTheme ? '#1a1a1a' : 'white',
                    color: darkTheme ? 'white' : 'black',
                  }}
                >
                  <ArrowBackIcon fontSize="large" />
                </Card>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            xs={outletWidth}
          >
            <Outlet />
          </Grid>
          <Grid item xs={1}>
            {rightBarVisible && (
              <Grid item>
                {!!rightBarWarning && (
                  <Typography
                    color={darkTheme ? 'white' : 'black'}
                    sx={{ marginBottom: 1 }}
                  >
                    {rightBarWarning}
                  </Typography>
                )}
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '150px',
                    borderRadius: '35px',
                    border: `1px solid ${darkTheme ? 'white' : 'black'}`,
                    bgcolor: darkTheme ? '#1a1a1a' : 'white',
                    color: darkTheme ? 'white' : 'black',
                  }}
                >
                  <ArrowForwardIcon fontSize="large" />
                </Card>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
