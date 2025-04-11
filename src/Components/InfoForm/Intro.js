import React from 'react'
import { Grid, Typography } from '@mui/material'

const Intro = ({ darkTheme = false }) => {
  return (
    <Grid container xs={12} padding={2}>
      <Grid container item justifyContent={'center'} paddingTop={2}>
        <Typography sx={{ color: darkTheme ? 'white' : 'inherit' }}>UNIVERSITY OF MISSOURI</Typography>
      </Grid>
      <Grid container item justifyContent={'center'} paddingTop={2}>
        <Typography sx={{ color: darkTheme ? 'white' : 'inherit' }}>PROJECT TITLE:</Typography>
      </Grid>
      <Grid container item justifyContent={'center'} paddingTop={2}>
        <Typography sx={{ color: darkTheme ? 'white' : 'inherit' }}>
          The Impact of Visual Imagery on Spatial Working Memory Recall
        </Typography>
      </Grid>
      <Grid container item justifyContent={'center'} paddingTop={2}>
        <Typography sx={{ color: darkTheme ? 'white' : 'inherit' }}>PRINCIPAL INVESTIGATOR:</Typography>
      </Grid>
      <Grid container item justifyContent={'center'} paddingTop={2}>
        <Typography sx={{ color: darkTheme ? 'white' : 'inherit' }}>NELSON COWAN</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={'center'} paddingTop={12}>
        <Typography align="left" sx={{ color: darkTheme ? 'white' : 'inherit' }}>
          This information is requested on behalf of the grant that finances our
          research. Although we would appreciate the information, it is not
          required in order for you to participate.
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={'center'} paddingTop={2}>
        <Typography align="left" sx={{ color: darkTheme ? 'white' : 'inherit' }}>
          If you choose to complete the form, you may skip any questions that
          you're uncomfortable answering or simply choose the option that reads
          "Prefer Not to Say."
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={'center'} paddingTop={2}>
        <Typography align="left" sx={{ color: darkTheme ? 'white' : 'inherit' }}>
          Your responses will be retained using a randomly assigned number
          and/or letter combination so that your personal details will be
          protected, and your identity will remain anonymous.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Intro
