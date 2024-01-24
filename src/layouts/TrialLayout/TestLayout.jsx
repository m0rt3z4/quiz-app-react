import { Box, Grid, Card, Stack, Typography } from '@mui/material'
import { Outlet } from 'react-router'
import { useTrialContext } from './context'
import { useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const TrialLayout = () => {
  const {
    title,
    // changeTitle,
    outletWidth,
    leftBarVisible,
    rightBarVisible,
    // showArrows,
    rightBarWarning,
    leftBarWarning,
    changeLeftbarVisiblity,
    changeRightbarVisiblity,
  } = useTrialContext()

  // useEffect(() => {
  //   changeTitle('Title2')
  // }, [])

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     changeLeftbarVisiblity(true)
  //     changeRightbarVisiblity(true)
  //   }, 2000)

  //   return () => clearTimeout(timeout)
  // }, [])
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Grid
        container
        justifyContent={'center'}
        alignContent={'center'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={6}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 125,
              borderRadius: '35px',
              border: '1px solid black',
            }}
          >
            <Stack p={1} py={2}>
              <Typography fontSize={'25px'}>{title}</Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ paddingTop: '10px' }}
          spacing={2}
        >
          <Grid item xs={1}>
            {leftBarVisible && (
              <Grid item>
                {leftBarWarning && (
                  <Typography color={'red'} sx={{ marginBottom: 1 }}>
                    Incorrect
                  </Typography>
                )}
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '150px',
                    borderRadius: '35px',
                    border: `1px solid ${leftBarWarning ? 'red' : 'black'}`,
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
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
