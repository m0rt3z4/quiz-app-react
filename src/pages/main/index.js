import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
// import Exit from '../../Components/Trial2/Exit'
// import { createNewExperiment } from '../../helpers/trialManagerHelper'

export const MainPage = () => {
  const navigate = useNavigate()
  // const test = () => {
  //   const exp = createNewExperiment()
  //   let arr = [],
  //     arr2 = []
  //   exp
  //     .map((e) => {
  //       return e.trialParams.stimuli
  //     })
  //     .map((t) => {
  //       return t.map((z) => z.iconType === 'CIRCLE' && arr.push(z.isOnLetter))
  //     })
  //   exp
  //     .map((e) => {
  //       return e.trialParams.recognition
  //     })
  //     .map((t) => {
  //       return t.map((z) => arr2.push(z.taskType))
  //     })
  //   const zarr = arr2.reduce(
  //     (acc, curr) => {
  //       switch (curr) {
  //         case 'CORRECT_ON_LETTER': {
  //           acc.correctOnLetter++
  //           return acc
  //         }
  //         case 'CORRECT_OFF_LETTER': {
  //           acc.correctOffLetter++
  //           return acc
  //         }
  //         case 'INCORRECT_ON_LETTER': {
  //           acc.inCorrectOnLetter++
  //           return acc
  //         }
  //         case 'INCORRECT_OFF_LETTER': {
  //           acc.incorrectOffLetter++
  //           return acc
  //         }

  //         default:
  //           return acc
  //       }
  //     },
  //     {
  //       correctOnLetter: 0,
  //       correctOffLetter: 0,
  //       inCorrectOnLetter: 0,
  //       incorrectOffLetter: 0,
  //     }
  //   )
  //   const countSurprize = (arr = []) => {
  //     return arr.reduce(
  //       (acc, curr) => {
  //         if (curr) {
  //           acc.onLettersCount++
  //         } else {
  //           acc.offLettersCount++
  //         }
  //         return acc
  //       },
  //       { onLettersCount: 0, offLettersCount: 0 }
  //     )
  //   }
  //   const stimuliCount = exp
  //     .map((e) => {
  //       return e.trialParams.stimuli
  //     })
  //     .reduce((acc, curr) => {
  //       acc = acc + curr.length
  //       return acc
  //     }, 0)
  //   console.log(exp)
  //   console.log(countSurprize(arr))
  //   console.log(zarr)
  //   console.log({ stimuliCount })
  // }
  // for (let i = 0; i < 30; i++) {
  //   test()
  // }

  const redirectUrl = (url) => {
    navigate(url)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        // alignItems={'baseline'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 420,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid container sx={{ paddingTop: '20px' }}>
              <Grid item xs={12} justifyContent={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <Typography fontSize={'25px'}>
                    Please read through the Tutorial before starting the task.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                container
                justifyContent={'center'}
                xs={12}
                paddingTop={8}
                spacing={3}
              >
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('/tutorial')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Start
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    onClick={() => redirectUrl('/setting')}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Settings
                  </Button>
                </Grid>
                {/* </Grid> */}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainPage
