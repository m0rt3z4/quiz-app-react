/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'

const InfoForm = ({ onNext }) => {
  const { changeTitle } = useTrialContext()

  useEffect(() => {
    changeTitle('Information Form')
  }, [])

  const YearSelect = () => {
    const yearRangeArray = new Array(2020 - 1930)
      .fill(undefined)
      .map((_, i) => i + 1930)
    // console.log(yearRangeArray)
    const renderOptions = () => {
      return yearRangeArray.map((value) => {
        return <MenuItem value={value}>{value}</MenuItem>
      })
    }
    return (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        sx={{ width: '100%' }}
      >
        {renderOptions()}
      </Select>
    )
  }

  const GenderSelect = () => {
    return (
      <Select
        labelId="demo-simple-select-label"
        label="Gender"
        variant="outlined"
        sx={{ width: '100%' }}
      >
        <MenuItem value={1}>Male</MenuItem>
        <MenuItem value={2}>Female</MenuItem>
        <MenuItem value={3}>Non-Binary</MenuItem>
        <MenuItem value={4}>Prefer Not to Say</MenuItem>
      </Select>
    )
  }

  const onClickNext = () => {
    return onNext()
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
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 450,
              maxHeight: 530,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid container padding={2} spacing={2}>
              <Grid container item xs={3} alignItems={'center'}>
                <InputLabel id="demo-simple-select-label">Name:</InputLabel>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  autoFocus
                />
              </Grid>
              <Grid container item xs={3} alignItems={'center'}>
                <InputLabel id="demo-simple-select-label">
                  <Typography>Year of birth:</Typography>
                </InputLabel>
              </Grid>
              <Grid item xs={8}>
                <YearSelect />
              </Grid>
              <Grid container item xs={3} alignItems={'center'}>
                <InputLabel id="demo-simple-select-label">
                  <Typography>Gender:</Typography>
                </InputLabel>
              </Grid>
              <Grid item xs={8}>
                <GenderSelect />
              </Grid>
              <Grid container justifyContent={'center'} xs={12}>
                <Grid item xs={8} paddingTop={11}>
                  <Button
                    sx={{
                      width: '70%',
                      height: 50,
                      backgroundColor: 'lightgray',
                    }}
                    color="primary"
                    onClick={onClickNext}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default InfoForm
