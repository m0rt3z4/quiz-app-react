import { Box, Grid, Card, Typography } from '@mui/material'
import { Outlet } from 'react-router'
import { useExp2PersistedContext } from './context'

export const Exp2PersistedLayout = () => {
  const { title, outletWidth } = useExp2PersistedContext()
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <Grid
        container
        justifyContent={'center'}
        alignContent={'center'}
        spacing={2}
        sx={{ paddingTop: 1 }}
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
          // sx={{ paddingTop: '10' }}
          paddingTop={!title ? 6 : 3}
          spacing={2}
        >
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            xs={outletWidth}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
