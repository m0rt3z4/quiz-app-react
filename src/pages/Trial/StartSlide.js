import React, { useEffect } from 'react'
import { Grid, Typography, Card } from '@mui/material'

const StartSlide = ({ header = '', onNext, darkTheme = false }) => {
  useEffect(() => {
    setTimeout(() => {
      onNext()
      return clearTimeout()
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: 450,
            maxHeight: 540,
            borderRadius: '35px',
            padding: 7,
            border: `1px solid ${darkTheme ? 'white' : 'black'}`,
            backgroundColor: darkTheme ? 'black' : 'white',
          }}
        >
          <Typography fontSize={'25px'} sx={{ color: darkTheme ? 'white' : 'inherit' }}>{header}</Typography>
        </Card>
      </Grid>
    </Grid>
    // </Box>
  )
}

export default StartSlide
