/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Button, Typography } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import RadioSelect from './RadioSelect'
import { slide3, answers } from './strings'

const Slide3 = ({ onNext }) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const [value7, setValue7] = useState('')
  const [value8, setValue8] = useState('')
  const [value9, setValue9] = useState('')
  const [value10, setValue10] = useState('')
  const { showArrows } = useTrialContext()
  useEffect(() => {
    showArrows(false)
  }, [])

  const onClickSubmit = () => {
    onNext({
      slide3: {
        q1: value1,
        q2: value2,
        q3: value3,
        q4: value4,
        q5: value5,
        q6: value6,
        q7: value7,
        q8: value8,
        q9: value9,
        q10: value10,
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
                <Typography align="left">
                  <b>Strategies for the Memory-only blocks:</b>
                </Typography>
                <Typography align="left" paddingTop={1}>
                  For this part, you will be asked about the strategies that you
                  used to memorize the dots’ locations in the simple memory
                  task. Please respond according to how often you used the
                  strategy. When you have answered all the questions, press
                  CONTINUE.
                </Typography>
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[0].question}
                  questionText2={slide3[0].example}
                  valueList={answers}
                  value={value1}
                  setValue={setValue1}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[1].question}
                  questionText2={slide3[1].example}
                  valueList={answers}
                  value={value2}
                  setValue={setValue2}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[2].question}
                  questionText2={slide3[2].example}
                  valueList={answers}
                  value={value3}
                  setValue={setValue3}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[3].question}
                  questionText2={slide3[3].example}
                  valueList={answers}
                  value={value4}
                  setValue={setValue4}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[4].question}
                  questionText2={slide3[4].example}
                  valueList={answers}
                  value={value5}
                  setValue={setValue5}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[5].question}
                  questionText2={slide3[5].example}
                  valueList={answers}
                  value={value6}
                  setValue={setValue6}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[6].question}
                  questionText2={slide3[6].example}
                  valueList={answers}
                  value={value7}
                  setValue={setValue7}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[7].question}
                  questionText2={slide3[7].example}
                  valueList={answers}
                  value={value8}
                  setValue={setValue8}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[8].question}
                  questionText2={slide3[8].example}
                  valueList={answers}
                  value={value9}
                  setValue={setValue9}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide3[9].question}
                  questionText2={slide3[9].example}
                  valueList={answers}
                  value={value10}
                  setValue={setValue10}
                />
              </Grid>
              <Grid item xs={6} marginTop={5}>
                <Button
                  variant="outlined"
                  onClick={onClickSubmit}
                  sx={{ minHeight: '50px' }}
                >
                  Continue
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Slide3
