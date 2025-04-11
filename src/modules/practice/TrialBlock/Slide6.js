import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboardNavigation from '../../../helpers/useKeyboardNavigation'

const Slide6 = ({ content = [], onNext, onPrevious, darkTheme = false }) => {
  useKeyboardNavigation(onNext, onPrevious)

  return (
    <Grid
      container
      justifyContent={'center'}
      spacing={2}
      // sx={{ paddingTop: 1 }}
    >
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
          <Box>
            {/* <Typography fontSize={'25px'} marginBottom={10}>
              {'SurprizeBlocksSlide.'}
            </Typography> */}
            {content.length > 0 && (
              <Typography fontSize={content[0].fontSize} sx={{ color: darkTheme ? 'white' : 'inherit' }}>
                {content[0].text}
              </Typography>
            )}
            {content.length > 1 && (
              <Typography fontSize={content[1].fontSize} paddingTop={10} sx={{ color: darkTheme ? 'white' : 'inherit' }}>
                {content[1].text}
              </Typography>
            )}
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Slide6
