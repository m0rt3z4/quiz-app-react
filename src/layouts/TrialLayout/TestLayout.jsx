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
    leftBarVisible,
    rightBarVisible,
    // showArrows,
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        alignContent={'center'}
        spacing={2}
        sx={{ paddingTop: 5 }}
      >
        <Grid item xs={6}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 140,
            }}
          >
            <Stack p={1} py={2}>
              <Typography>{title}</Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ paddingTop: '20px' }}
          spacing={1}
        >
          <Grid item xs={1}>
            {leftBarVisible && (
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '150px',
                }}
              >
                <ArrowBackIcon fontSize="large" />
              </Card>
            )}
          </Grid>
          <Grid item justifyContent="center" alignItems="center" xs={4}>
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
