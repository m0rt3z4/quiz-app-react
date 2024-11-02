import React, { useState } from 'react'
import { Box, Grid, Card, Divider, Typography, TextField } from '@mui/material'
import OpacitySlider from './OpacitySlider'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'
import { imaginationCueTypes } from '../../../../Components/BinocularTrial/consts'
import SelectSection from './Select'
import { SettingsButton } from '../../../../Components/SettingsButton'
import { pages } from '.'

export const SettingsForm = ({ onBack, onStartPreview }) => {
  const {
    binocluarV1Settings,
    changeBinocularV1Settings,
    darkTheme,
  } = useExp2PersistedContext()

  const [slide1Time, setSlide1Tiem] = useState(binocluarV1Settings.slide1Time)
  const [slide2Time, setSlide2Tiem] = useState(binocluarV1Settings.slide2Time)
  const [slide3Time, setSlide3Tiem] = useState(binocluarV1Settings.slide3Time)
  const [slide4Time, setSlide4Tiem] = useState(binocluarV1Settings.slide4Time)
  const [redOpacity, setRedOpacity] = useState(binocluarV1Settings.redOpacity)
  const [greenOpacity, setGreenOpacity] = useState(
    binocluarV1Settings.greenOpacity
  )
  const [stimulusWidth, setStimulusWidth] = useState(
    binocluarV1Settings.stimulusWidth
  )
  const [stimulusDistance, setStimulusDistance] = useState(
    binocluarV1Settings.stimulusDistance
  )
  const [degreeValue, setDegreeValue] = useState(0)
  const [imgCue, setImgCue] = useState(imaginationCueTypes.GREEN)
  const [rivalry, setRivalry] = useState('GR')

  const onSave = () => {
    changeBinocularV1Settings({
      slide1Time,
      slide2Time,
      slide3Time,
      slide4Time,
      redOpacity,
      greenOpacity,
      stimulusWidth,
      stimulusDistance,
    })
  }

  const onClickPerceptual = () => {
    const settingObj = {
      slide1Time,
      slide2Time,
      slide3Time,
      slide4Time,
      redOpacity,
      greenOpacity,
      stimulusWidth,
      stimulusDistance,
    }
    const paramsObj = {
      imaginationCue: imgCue,
      recallType: rivalry,
    }
    onStartPreview(pages.TRIAL, { params: paramsObj, settings: settingObj })
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
            sx={{
              borderRadius: '20px',
              backgroundColor: 'gray',
            }}
          />
        </Grid>
      </Grid>
    )
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
                redOpacity={redOpacity}
                setRedOpacity={setRedOpacity}
                greenOpacity={greenOpacity}
                setGreenOpacity={setGreenOpacity}
                stimulusWidth={stimulusWidth}
                setStimulusWidth={setStimulusWidth}
                stimulusDistance={stimulusDistance}
                setStimulusDistance={setStimulusDistance}
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
              <Grid item xs={3}>
                <SettingsButton
                  size={50}
                  text="Binocular Trial"
                  onClickButton={onClickPerceptual}
                />
              </Grid>
              <Grid item xs={3}>
                <SettingsButton
                  size={50}
                  text="CALLIBRATION"
                  onClickButton={() => {
                    onStartPreview(pages.CALLIBRATION)
                  }}
                />
              </Grid>
              {/* <Grid item xs={4}>
                <SettingsButton
                  size={70}
                  text="Binocular v2"
                  onClickButton={() => {
                    onStartPreview(pages.BINOCLAR_V2)
                  }}
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Box>
  )
}

export default SettingsForm
