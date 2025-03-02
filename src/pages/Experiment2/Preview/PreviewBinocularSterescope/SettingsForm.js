import React, { useState } from 'react'
import { Box, Grid, Card, Divider, Typography, TextField } from '@mui/material'
import OpacitySlider from './OpacitySlider'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import { imaginationCueTypes } from '../../../../Components/BinocularTrial/consts'
import { SettingsButton } from '../../../../Components/SettingsButton'
import SelectSection from './Select'
import { pages } from '.'

export const SettingsForm = ({ onBack, onStartPreview }) => {
  const {
    binocluarSterescopeSettings,
    changeBinocularSterescopeSettings,
    darkTheme,
  } = useExp2PersistedContext()

  const [slide1Time, setSlide1Tiem] = useState(
    binocluarSterescopeSettings.slide1Time
  )
  const [slide2Time, setSlide2Tiem] = useState(
    binocluarSterescopeSettings.slide2Time
  )
  const [slide3Time, setSlide3Tiem] = useState(
    binocluarSterescopeSettings.slide3Time
  )
  const [slide4Time, setSlide4Tiem] = useState(
    binocluarSterescopeSettings.slide4Time
  )
  const [leftGreenOpacity, setLeftGreenOpacity] = useState(
    binocluarSterescopeSettings.leftGreenOpacity
  )
  const [leftRedOpacity, setLeftRedOpacity] = useState(
    binocluarSterescopeSettings.leftGreenOpacity
  )
  const [rightGreenOpacity, setRightGreenOpacity] = useState(
    binocluarSterescopeSettings.leftGreenOpacity
  )
  const [righRedOpacity, setRighRedOpacity] = useState(
    binocluarSterescopeSettings.leftGreenOpacity
  )

  const [stimulusWidth, setStimulusWidth] = useState(
    binocluarSterescopeSettings.stimulusWidth
  )
  const [stimulusDistance, setStimulusDistance] = useState(
    binocluarSterescopeSettings.stimulusDistance
  )
  const [mockStimulusWidth, setMockStimulusWidth] = useState(
    binocluarSterescopeSettings.mockStimulusWidth
  )
  const [mockStimulusDistance, setMockStimulusDistance] = useState(
    binocluarSterescopeSettings.mockStimulusDistance
  )
  const [degreeValue, setDegreeValue] = useState(0)
  const [imgCue, setImgCue] = useState(imaginationCueTypes.GREEN)
  const [rivalry, setRivalry] = useState('MIXED')

  const onSave = () => {
    changeBinocularSterescopeSettings({
      slide1Time,
      slide2Time,
      slide3Time,
      slide4Time,
      leftGreenOpacity,
      leftRedOpacity,
      rightGreenOpacity,
      righRedOpacity,
      stimulusWidth,
      stimulusDistance,
      mockStimulusWidth,
      mockStimulusDistance,
    })
  }
  const onClickV2 = (page = pages.BINOCULAR_STEREOSCOPE) => {
    const settingObj = {
      slide1Time,
      slide2Time,
      slide3Time,
      slide4Time,
      leftGreenOpacity,
      leftRedOpacity,
      rightGreenOpacity,
      setRighRedOpacity,
      stimulusWidth,
      stimulusDistance,
      mockStimulusWidth,
      mockStimulusDistance,
    }
    const paramsObj = {
      imaginationCue: imgCue,
      recallType: rivalry,
      cellId: 1,
      angle: degreeValue,
    }
    onStartPreview(page, {
      params: paramsObj,
      settings: settingObj,
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        // alignItems={'baseline'}
        spacing={2}
        sx={{ paddingTop: 1, marginBottom: 5 }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            color: darkTheme ? 'white' : 'black',
            backgroundColor: darkTheme ? 'black' : 'white',
            minHeight: 420,
            borderRadius: '35px',
            // padding: 7,
            border: '1px solid black',
          }}
        >
          <Grid
            container
            justifyContent={'center'}
            xs={12}
            spacing={3}
            marginBottom={3}
          >
            <Grid item xs={6}>
              <SettingsButton onClickButton={onBack} size={30} text="Back" />
            </Grid>
            <Grid item xs={12}>
              <Divider
                variant="fullWidth"
                sx={{ paddingTop: 1, borderColor: 'darkgray' }}
              />
            </Grid>
            <Grid container item xs={8}>
              <Grid
                container
                item
                xs={12}
                justifyContent={'center'}
                paddingBottom={3}
              >
                <Grid item xs={12}>
                  <Typography variant="h6">Trial Settings:</Typography>
                </Grid>

                <Grid container xs={6}>
                  <Item
                    text="Time to show Intro"
                    value={slide1Time}
                    setValue={setSlide1Tiem}
                  />
                  <Item
                    text="Time To Show Imagination Cue"
                    value={slide2Time}
                    setValue={setSlide2Tiem}
                  />
                </Grid>
                <Grid container xs={6}>
                  <Item
                    text="Imagination Time"
                    value={slide3Time}
                    setValue={setSlide3Tiem}
                  />
                  <Item
                    text="Time to show Rivalry"
                    value={slide4Time}
                    setValue={setSlide4Tiem}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={4} justifyContent={'center'}>
              <Grid container item xs={4}>
                <Typography variant="h6">Preview Params:</Typography>
              </Grid>
              <SelectSection
                imaginationCue={imgCue}
                setImaginationCue={setImgCue}
                recallType={rivalry}
                setRecalType={setRivalry}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider
                variant="fullWidth"
                sx={{ paddingTop: 1, borderColor: 'darkgray' }}
              />
            </Grid>
            <Grid container item xs={12}>
              <Typography variant="h6">Preview Luminance:</Typography>
            </Grid>
            <Grid container item xs={12} justifyContent={'center'}>
              <OpacitySlider
                leftGreenOpacity={leftGreenOpacity}
                setLeftGreenOpacity={setLeftGreenOpacity}
                leftRedOpacity={leftRedOpacity}
                setLeftRedOpacity={setLeftRedOpacity}
                righRedOpacity={righRedOpacity}
                setRighRedOpacity={setRighRedOpacity}
                rightGreenOpacity={rightGreenOpacity}
                setRightGreenOpacity={setRightGreenOpacity}
                stimulusWidth={stimulusWidth}
                setStimulusWidth={setStimulusWidth}
                stimulusDistance={stimulusDistance}
                setStimulusDistance={setStimulusDistance}
                //mock stimulus
                mockStimulusWidth={mockStimulusWidth}
                setMockStimulusWidth={setMockStimulusWidth}
                mockStimulusDistance={mockStimulusDistance}
                setMockStimulusDistance={setMockStimulusDistance}
                //
                degreeValue={degreeValue}
                setDegreeValue={setDegreeValue}
                rivalry={rivalry}
                onSave={onSave}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider
                variant="fullWidth"
                sx={{ paddingTop: 3, borderColor: 'darkgray' }}
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid
                container
                item
                xs={12}
                justifyContent={'start'}
                paddingBottom={3}
              >
                <Typography variant="h6">
                  Start Binocular Trial Preview:
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <SettingsButton
                  size={50}
                  text="CALLIBRATION"
                  onClickButton={() => {
                    onStartPreview(pages.CALLIBRATION)
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <SettingsButton
                  size={50}
                  text="Stereoscope"
                  onClickButton={() => {
                    onClickV2(pages.BINOCULAR_STEREOSCOPE)
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Box>
  )
}
const Item = ({ text = '', value, setValue }) => {
  return (
    <Grid
      container
      item
      xs={12}
      paddingTop={2}
      alignItems={'center'}
      sx={{ maxHeight: '120px' }}
    >
      <Grid item xs={12}>
        <Typography>{text}</Typography>
      </Grid>
      <Grid item xs={12} paddingTop={1}>
        <TextField
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          variant="outlined"
          sx={{ borderRadius: '20px', backgroundColor: 'gray' }}
        />
      </Grid>
    </Grid>
  )
}

export default SettingsForm
