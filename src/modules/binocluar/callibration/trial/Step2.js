/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid, Card } from '@mui/material'

//assets
import GREEN from '../../../../assets/Binocular/green2.PNG'
import RED from '../../../../assets/Binocular/red2.PNG'
import BinocularBullseyeDot from '../../../../Components/BinocularBullseyeDot'

const Step2 = ({
  isGreenFirst = true,
  greenOpacity = 100,
  redOpacity = 100,
}) => {
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12} justifyContent={'center'}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
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
            <Grid container item xs={5} marginTop={2} justifyContent={'center'}>
              <img
                src={isGreenFirst ? GREEN : RED}
                alt="Rivalry1"
                style={{
                  width: '40%',
                  opacity: `${isGreenFirst ? greenOpacity : redOpacity}%`,
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <BinocularBullseyeDot width={13} />
            </Grid>
            <Grid container item xs={5} marginTop={2} justifyContent={'center'}>
              <img
                src={isGreenFirst ? RED : GREEN}
                alt="Rivalry2"
                style={{
                  width: '40%',
                  opacity: `${isGreenFirst ? redOpacity : greenOpacity}%`,
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Step2
