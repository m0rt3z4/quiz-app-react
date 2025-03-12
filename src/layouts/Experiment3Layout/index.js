import { Box, Grid, Card, Typography } from '@mui/material'
import { Outlet } from 'react-router'
import { useExperiment3Context } from './context'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const Experiment3Layout = () => {
  const {
    title,
    outletWidth,
    leftBarVisible,
    rightBarVisible,
    rightBarWarning,
    leftBarWarning,
  } = useExperiment3Context()

  // console.log(rightBarWarning, leftBarWarning, feedbackStatus)
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        height: '100vh',
        backgroundColor: '#e6dada',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        // sx={{ paddingTop: 1 }}
      >
        {!!title && (
          <Grid item xs={outletWidth}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 125,
                borderRadius: '35px',
                border: '1px solid black',
                // background: 'rgb(247, 241, 241)',
                background: 'white',
              }}
            >
              <Typography fontSize={'25px'}>{title}</Typography>
            </Card>
          </Grid>
        )}
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={!!title && { paddingTop: 5 }}
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
export * from './provider'
export * from './context'
