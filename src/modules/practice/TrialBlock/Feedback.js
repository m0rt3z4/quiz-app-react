import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material'
import useKeyboardNavigation from '../../../helpers/useKeyboardNavigation'
import Strings from '../../../Components/Slide/Strings'

const Feedback = ({
  content = Strings.tutorial.feedback2,
  onNext,
  onPrevious,
}) => {
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
            border: '1px solid black',
          }}
        >
          <Box>
            {/* <Typography fontSize={'25px'} marginBottom={10}>
              {'SurprizeBlocksSlide.'}
            </Typography> */}
            {content.length > 0 && (
              <Typography fontSize={content[0].fontSize}>
                {content[0].text}
              </Typography>
            )}
            {content.length > 1 && (
              <Typography fontSize={content[1].fontSize} paddingTop={10}>
                {content[1].text}
              </Typography>
            )}
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Feedback
