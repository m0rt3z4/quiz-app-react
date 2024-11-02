import { Box, Grid, Card, Typography } from '@mui/material'
import { Outlet } from 'react-router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useExp2PersistedContext } from './context'

export const Exp2PersistedLayout = () => {
  const {
    title,
    outletWidth,
    leftBarVisible,
    rightBarVisible,
    rightBarWarning,
    leftBarWarning,
    darkTheme,
  } = useExp2PersistedContext()
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: darkTheme ? 'black' : '#e6dada',
      }}
    >
      <Grid
        container
        justifyContent={'center'}
        alignContent={'center'}
        // spacing={2}
        sx={{ paddingTop: 1 }}
      >
        {!!title && (
          <Grid item xs={outletWidth}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: darkTheme ? 'white' : 'black',
                minHeight: 125,
                borderRadius: '35px',
                // border: `1px solid ${darkTheme ? 'white' : 'black'}`,
                // background: 'rgb(247, 241, 241)',
                background: darkTheme ? 'black' : 'white',
              }}
            >
              <Typography
                fontSize={'25px'}
                sx={{ color: darkTheme ? 'white' : 'black' }}
              >
                {title}
              </Typography>
            </Card>
          </Grid>
        )}
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          // sx={{ paddingTop: '10' }}
          paddingTop={!title ? 6 : 3}
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
