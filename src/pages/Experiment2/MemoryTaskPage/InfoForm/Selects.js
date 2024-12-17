import React from 'react'
import { Grid, Typography, Select, MenuItem } from '@mui/material'
const fontFamily = 'B-Nazanin'

export const YearSelect = ({ value, setValue }) => {
  const yearRangeArray = new Array(2020 - 1960)
    .fill(undefined)
    .map((_, i) => i + 1960)
  // console.log(yearRangeArray)
  const renderOptions = () => {
    return yearRangeArray.map((value) => {
      return (
        <MenuItem sx={{ fontFamily }} value={value} key={`id_${value}`}>
          {value}
        </MenuItem>
      )
    })
  }
  return (
    <Grid container item xs={8} alignItems={'center'}>
      <Grid item xs={4}>
        <Typography fontFamily={fontFamily}>سال تولد:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          {renderOptions()}
        </Select>
      </Grid>
    </Grid>
  )
}

export const GenderSelect = ({ value, setValue }) => {
  return (
    <Grid container item xs={8} alignItems={'center'}>
      <Grid item xs={4}>
        <Typography fontFamily={fontFamily}>جنسیت:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={1}>
            زن
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={2}>
            مرد
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={3}>
            غیره
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export const NatioanalitySelect = ({ value, setValue }) => {
  return (
    <Grid container item xs={8} alignItems={'center'}>
      <Grid item xs={4}>
        <Typography fontFamily={fontFamily}>ملیت:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={1}>
            ایران
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={2}>
            غیره
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export const DomHandSelect = ({ value, setValue }) => {
  return (
    <Grid container item xs={8} alignItems={'center'}>
      <Grid item xs={4}>
        <Typography fontFamily={fontFamily}>دست غالب:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={1}>
            چپ
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={2}>
            راست
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export const EducationSelect = ({ value, setValue }) => {
  return (
    <Grid container item xs={8} alignItems={'center'}>
      <Grid item xs={4}>
        <Typography fontFamily={fontFamily}>تحصیلات:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={1}>
            دیپلم
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={2}>
            کاردانی
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={3}>
            کارشناسی
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={4}>
            کارشناسی ارشد
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={5}>
            دکتری
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}
export const HearingSelect = ({ value, setValue }) => {
  return (
    <Grid container item xs={8} alignItems={'center'}>
      <Grid item xs={4}>
        <Typography fontFamily={fontFamily}>شنوایی:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={1}>
            سالم
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={2}>
            تصحیح شده
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={3}>
            افت یا کم شنوایی در یک گوش
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={4}>
            افت یا کم‌شنوایی دو گوش
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}
export const VisualSelect = ({ value, setValue }) => {
  return (
    <Grid container item xs={8} alignItems={'center'}>
      <Grid item xs={4}>
        <Typography fontFamily={fontFamily}>بینایی:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={1}>
            سالم
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={2}>
            تصحیح شده
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={3}>
            یک چشم ضعیف
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={4}>
            هردو چشم ضعیف
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export const DrugSelect = ({ value, setValue }) => {
  return (
    <Grid container item xs={8} alignItems={'center'} justifyContent={'end'}>
      <Grid item xs={12}>
        <Typography align="right" fontFamily={fontFamily}>
          آیا در ۲۴ ساعت گذشته داروی موثر بر روان و شناخت مصرف کرده‌ایده؟
        </Typography>
      </Grid>
      <Grid item xs={8} paddingTop={2}>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          variant="standard"
          sx={{ width: '100%', backgroundColor: 'lightgray', fontFamily }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={'YES'}>
            بله
          </MenuItem>
          <MenuItem sx={{ fontFamily, direction: 'rtl' }} value={'NO'}>
            خیر
          </MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}
