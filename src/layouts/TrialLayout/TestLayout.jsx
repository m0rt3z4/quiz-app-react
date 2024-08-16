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
    // feedbackStatus,
  } = useTrialContext()

  // console.log(rightBarWarning, leftBarWarning, feedbackStatus)
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
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
          sx={{ paddingTop: 5 }}
          spacing={2}
        >
          <Grid item xs={1}>
            {leftBarVisible && (
              <Grid item>
                {!!leftBarWarning && (
                  <Typography color={'black'} sx={{ marginBottom: 1 }}>
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
                    border: '1px solid black',
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
                  <Typography color={'black'} sx={{ marginBottom: 1 }}>
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
                    border: '1px solid black',
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
