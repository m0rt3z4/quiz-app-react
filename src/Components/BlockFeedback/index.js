/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { blockTypes } from '../../consts'
import RadioSelect from './RadioSelect'
import { BlockFeedbackStrings } from './strings'

const BlockFeedback = ({ blockType = '', onNext }) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const { showArrows } = useTrialContext()
  useEffect(() => {
    showArrows(false)
  }, [])

  const onClickSubmit = () => {
    onNext({ q1: value1, q2: value2, q3: value3 })
  }

  const blockBasedText = (blockType) => {
    if (!blockType) return null
    if (blockType === blockTypes.SURPRIZE_BLOCK)
      return {
        questionText: BlockFeedbackStrings.q3.question,
        questionText2: BlockFeedbackStrings.q3.cont,
        valueList: BlockFeedbackStrings.q3.answers,
      }
    if (blockType === blockTypes.MEMORANDUM_BLOCK)
      return {
        questionText: BlockFeedbackStrings.q4.question,
        questionText2: BlockFeedbackStrings.q4.cont,
        valueList: BlockFeedbackStrings.q4.answers,
      }
  }
  const thridQuestion = blockBasedText(blockType)

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
                  questionText={BlockFeedbackStrings.q1.question}
                  valueList={BlockFeedbackStrings.q1.answers}
                  value={value1}
                  setValue={setValue1}
                />
              </Grid>
              <Grid container item xs={10} justifyContent={'flex-start'}>
                <RadioSelect
                  questionText={BlockFeedbackStrings.q2.question}
                  valueList={BlockFeedbackStrings.q2.answers}
                  value={value2}
                  setValue={setValue2}
                />
              </Grid>
              {!!blockType && (
                <Grid container item xs={10} justifyContent={'flex-start'}>
                  <RadioSelect
                    questionText={thridQuestion.questionText}
                    questionText2={thridQuestion.questionText2}
                    valueList={thridQuestion.valueList}
                    value={value3}
                    setValue={setValue3}
                  />
                </Grid>
              )}
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

export default BlockFeedback
