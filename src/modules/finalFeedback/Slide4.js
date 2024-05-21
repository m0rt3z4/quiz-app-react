/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Button, Typography } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import RadioSelect from './RadioSelect'
import { slide4, answers } from './strings'

const Slide4 = ({ onNext }) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const { showArrows } = useTrialContext()
  useEffect(() => {
    showArrows(false)
  }, [])

  const onClickSubmit = () => {
    onNext({
      slide4: {
        q1: value1,
        q2: value2,
        q3: value3,
        q4: value4,
        q5: value5,
        q6: value6,
      },
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        spacing={2}
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 310,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid
              container
              justifyContent={'center'}
              alignItems={'center'}
              spacing={2}
            >
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <Typography align="left" paddingTop={2}>
                  <b>
                    Strategies for the Mixed blocks (Both Imagery and Memory):
                  </b>
                </Typography>
                <Typography align="left" paddingTop={1}>
                  For this part, you will be asked about the strategies that you
                  used to visualize the letters and memorize the location of the
                  dots. Please respond according to how often you used the
                  strategy. When you have answered all the questions, press
                  CONTINUE.{' '}
                </Typography>
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide4[0].question}
                  questionText2={slide4[0].example}
                  valueList={answers}
                  value={value1}
                  setValue={setValue1}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide4[1].question}
                  questionText2={slide4[1].example}
                  valueList={answers}
                  value={value2}
                  setValue={setValue2}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide4[2].question}
                  questionText2={slide4[2].example}
                  valueList={answers}
                  value={value3}
                  setValue={setValue3}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide4[3].question}
                  questionText2={slide4[3].example}
                  valueList={answers}
                  value={value4}
                  setValue={setValue4}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide4[4].question}
                  questionText2={slide4[4].example}
                  valueList={answers}
                  value={value5}
                  setValue={setValue5}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide4[5].question}
                  questionText2={slide4[5].example}
                  valueList={answers}
                  value={value6}
                  setValue={setValue6}
                />
              </Grid>
              <Grid item xs={6} marginTop={5}>
                <Button
                  variant="outlined"
                  onClick={onClickSubmit}
                  sx={{ minHeight: '50px' }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Slide4
