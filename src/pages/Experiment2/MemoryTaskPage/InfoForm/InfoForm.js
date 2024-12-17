/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import {
  DomHandSelect,
  DrugSelect,
  EducationSelect,
  GenderSelect,
  HearingSelect,
  NatioanalitySelect,
  VisualSelect,
  YearSelect,
} from './Selects'
import {
  domHandValues,
  educationValues,
  genderValues,
  hearingValues,
  nationalityValues,
  visualValues,
} from './consts'
const fontFamily = 'B-Nazanin'

const InfoForm = ({ onNext, userId }) => {
  const [birthYear, setBirthYear] = useState('')
  const [gender, setGender] = useState('')
  const [nationality, setNationality] = useState('')
  const [domHand, setDomHand] = useState('')
  const [education, setEducation] = useState('')
  const [hearing, setHearing] = useState('')
  const [visual, setVisual] = useState('')
  const [drug, setDrug] = useState('')
  useEffect(() => {}, [])

  const onClickNext = () => {
    const res = {
      userId,
      birthYear,
      gender: genderValues[gender],
      nationality: nationalityValues[nationality],
      domHand: domHandValues[domHand],
      education: educationValues[education],
      hearing: hearingValues[hearing],
      visual: visualValues[visual],
      drug,
    }
    const downloadQuizDataAsJson = (data, userNumber, postfix) => {
      const jsonString = JSON.stringify(data)
      const blob = new Blob([jsonString], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `USER_${userNumber}_${postfix}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }

    downloadQuizDataAsJson(res, userId, 'personal_info')

    return onNext()
  }

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        spacing={2}
        sx={{
          padding: 8,
          direction: 'rtl',
          border: '1px solid white',
          borderRadius: 8,
        }}
      >
        <Grid container item xs={3} spacing={3} justifyContent={'center'}>
          <Typography fontFamily={fontFamily}>
            لطفاً اطلاعات روبرو را تکمیل نمایید
          </Typography>
        </Grid>
        <Grid container item xs={5} spacing={3} justifyContent={'center'}>
          <YearSelect value={birthYear} setValue={setBirthYear} />
          <GenderSelect value={gender} setValue={setGender} />
          <NatioanalitySelect value={nationality} setValue={setNationality} />
          <DomHandSelect value={domHand} setValue={setDomHand} />
          <EducationSelect value={education} setValue={setEducation} />
          <HearingSelect value={hearing} setValue={setHearing} />
          <VisualSelect value={visual} setValue={setVisual} />
          <DrugSelect value={drug} setValue={setDrug} />
        </Grid>
        <Grid container item xs={8} paddingTop={5} justifyContent={'center'}>
          <Button
            onClick={onClickNext}
            size="large"
            sx={{
              width: `${15}%`,
              backgroundColor: 'lightgray',
              color: 'black',
              '&:hover': {
                backgroundColor: '#fff',
              },
              margin: '5px',
              marginTop: 5,
              fontFamily,
            }}
          >
            بعدی
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default InfoForm
