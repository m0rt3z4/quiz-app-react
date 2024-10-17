import React, { useState } from 'react'
import {
  Box,
  Grid,
  Card,
  Button,
  Divider,
  Typography,
  TextField,
} from '@mui/material'
import OpacitySlider from './OpacitySlider'
import { imaginationCueTypes } from '../../../../Components/BinocularTrial/consts'
import SelectSection from './Select'
import { pages } from '.'

export const SettingsForm = ({ onBack, onStartPreview }) => {
  const [slide1Time, setSlide1Tiem] = useState(1000)
  const [slide2Time, setSlide2Tiem] = useState(750)
  const [slide3Time, setSlide3Tiem] = useState(6000)
  const [slide4Time, setSlide4Tiem] = useState(750)
  const [redOpacity, setRedOpacity] = useState(100)
  const [greenOpacity, setGreenOpacity] = useState(100)
  const [stimulusWidth, setStimulusWidth] = useState(50)
  const [stimulusDistance, setStimulusDistance] = useState(47)
  const [degreeValue, setDegreeValue] = useState(0)
  const [imgCue, setImgCue] = useState(imaginationCueTypes.GREEN)
  const [rivalry, setRivalry] = useState('GR')

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
        <Grid item xs={12}>
          <TextField
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
            variant="outlined"
            sx={{ borderRadius: '20px' }}
          />
        </Grid>
      </Grid>
    )
  }

  const SettingsButton = ({ size = 40, text = '', onClickButton }) => {
    return (
      <Button
        onClick={onClickButton}
        size="large"
        sx={{
          width: `${size}%`,
          backgroundColor: 'lightgray',
          margin: '5px',
        }}
      >
        {text}
      </Button>
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
            minHeight: 420,
            borderRadius: '35px',
            padding: 7,
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
              <SettingsButton onClickButton={onBack} size={40} text="Back" />
            </Grid>
            <Grid item xs={12}>
              <Divider variant="fullWidth" sx={{ paddingTop: 1 }} />
            </Grid>
            <Grid container item xs={12}>
              <Grid
                container
                item
                xs={12}
                justifyContent={'start'}
                paddingBottom={3}
              >
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
            <Grid item xs={12}>
              <Divider variant="fullWidth" sx={{ paddingTop: 1 }} />
            </Grid>
            <Grid container item xs={12}>
              <Typography variant="h6">Trial Params:</Typography>
            </Grid>
            <Grid container item xs={10} justifyContent={'center'}>
              <SelectSection
                imaginationCue={imgCue}
                setImaginationCue={setImgCue}
                recallType={rivalry}
                setRecalType={setRivalry}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider variant="fullWidth" sx={{ paddingTop: 1 }} />
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
              />
            </Grid>
            <Grid item xs={12}>
              <Divider variant="fullWidth" sx={{ paddingTop: 1 }} />
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
                  size={70}
                  text="Binocular Trial"
                  onClickButton={onClickPerceptual}
                />
              </Grid>
              <Grid item xs={4}>
                <SettingsButton
                  size={70}
                  text="CALLIBRATION"
                  onClickButton={() => {
                    onStartPreview(pages.CALLIBRATION)
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <SettingsButton
                  size={70}
                  text="Binocular v2"
                  onClickButton={() => {
                    onStartPreview(pages.BINOCLAR_V2)
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

export default SettingsForm
