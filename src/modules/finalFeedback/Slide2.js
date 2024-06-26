/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Button, Typography } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import RadioSelect from './RadioSelect'
import { slide2, answers } from './strings'

const Slide2 = ({ onNext }) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const [value7, setValue7] = useState('')
  const { showArrows } = useTrialContext()
  useEffect(() => {
    showArrows(false)
  }, [])

  const onClickSubmit = () => {
    onNext({
      slide2: {
        q1: value1,
        q2: value2,
        q3: value3,
        q4: value4,
        q5: value5,
        q6: value6,
        q7: value7,
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
                  <b>
                    For each strategy listed below, please indicate how often
                    you used it during the experiment.
                  </b>
                </Typography>

                <Typography align="left" paddingTop={2}>
                  <b>Strategies for the Imagery-only blocks:</b>
                </Typography>
                <Typography align="left" paddingTop={1}>
                  For this part, you will be asked about the strategies that you
                  used to visualize the letters in the simple imagery task,
                  where you were supposed to keep the letters in mind and react
                  to the asterisks. Please respond according to how often you
                  used the strategy. When you have answered all the questions,
                  press CONTINUE.
                </Typography>
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide2[0].question}
                  questionText2={slide2[0].example}
                  valueList={answers}
                  value={value1}
                  setValue={setValue1}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide2[1].question}
                  questionText2={slide2[1].example}
                  valueList={answers}
                  value={value2}
                  setValue={setValue2}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide2[2].question}
                  questionText2={slide2[2].example}
                  valueList={answers}
                  value={value3}
                  setValue={setValue3}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide2[3].question}
                  questionText2={slide2[3].example}
                  valueList={answers}
                  value={value4}
                  setValue={setValue4}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide2[4].question}
                  questionText2={slide2[4].example}
                  valueList={answers}
                  value={value5}
                  setValue={setValue5}
                />
              </Grid>

              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide2[5].question}
                  questionText2={slide2[5].example}
                  valueList={answers}
                  value={value6}
                  setValue={setValue6}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide2[6].question}
                  questionText2={slide2[6].example}
                  valueList={answers}
                  value={value7}
                  setValue={setValue7}
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

export default Slide2
