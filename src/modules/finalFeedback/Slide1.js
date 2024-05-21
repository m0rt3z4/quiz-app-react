/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import RadioSelect from './RadioSelect'
import { slide1, answers } from './strings'

const Slide1 = ({ onNext }) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const { showArrows } = useTrialContext()
  useEffect(() => {
    showArrows(false)
  }, [])

  const onClickSubmit = () => {
    // console.log({ slide1: { q1: value1, q2: value2 } })
    onNext({ slide1: { q1: value1, q2: value2 } })
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
                <RadioSelect
                  questionText={slide1[0].question}
                  valueList={answers}
                  value={value1}
                  setValue={setValue1}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={slide1[1].question}
                  valueList={answers}
                  value={value2}
                  setValue={setValue2}
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

export default Slide1
