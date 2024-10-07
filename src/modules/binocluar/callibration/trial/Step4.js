/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import GREEN from '../../../../assets/Binocular/green.png'
import RED from '../../../../assets/Binocular/red.png'

const Step4 = ({ userAnswer = 'GREEN' }) => {
  const pic = userAnswer === 'GREEN' ? GREEN : userAnswer === 'RED' ? RED : null
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12} justifyContent={'center'}>
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
          <Grid
            container
            item
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid container item xs={6} marginTop={2} justifyContent={'center'}>
              <img
                src={pic}
                alt="Rivalry1"
                style={{
                  width: '40%',
                  //   opacity: `${isGreenFirst ? greenOpacity : redOpacity}%`,
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step4
