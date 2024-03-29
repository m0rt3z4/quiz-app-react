import { Box, Grid, Card } from '@mui/material'
import { Outlet } from 'react-router'
import Header from '../../assets/Header.jpg'

export const MainLayout = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Grid
        container
        justifyContent={'center'}
        alignContent={'center'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={8}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 125,
              borderRadius: '35px',
              border: '1px solid black',
              background: 'rgb(247, 241, 241)',
            }}
          >
            <img src={Header} alt="MU Unviersity" style={{ width: '100%' }} />
            {/* <Stack p={1} py={2}>
              <Typography fontSize={'25px'}>Welcome</Typography>
            </Stack> */}
          </Card>
        </Grid>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ paddingTop: '10px' }}
          spacing={2}
        >
          <Grid item justifyContent="center" alignItems="center" xs={5}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
