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
import {
  recallTypes,
  imaginationCueTypes,
} from '../../../../Components/BinocularTrial/consts'
import SelectSection from './Select'

export const SettingsForm = ({ onBack, onStartPreview }) => {
  const [slide1Time, setSlide1Tiem] = useState(1000)
  const [slide2Time, setSlide2Tiem] = useState(750)
  const [slide3Time, setSlide3Tiem] = useState(6000)
  const [slide4Time, setSlide4Tiem] = useState(750)
  const [opacity, setOpacity] = useState(100)
  const [imgCue, setImgCue] = useState(imaginationCueTypes.GREEN)
  const [rivalry, setRivalry] = useState('GR')

  const onClickPerceptual = () => {
    const settingObj = {
      slide1Time,
      slide2Time,
      slide3Time,
      slide4Time,
      opacity,
    }
    const paramsObj = {
      imaginationCue: imgCue,
      recallType: recallTypes[rivalry],
    }
    onStartPreview(paramsObj, settingObj)
  }

  const Item = ({ text = '', value, setValue }) => {
    return (
      <Grid
        container
        item
        xs={12}
        paddingTop={1}
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
          <Divider variant="fullWidth" sx={{ paddingTop: 2 }} />
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
        sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
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
            <Grid container>
              <Grid container justifyContent={'center'} xs={12} spacing={3}>
                <Grid item xs={6}>
                  <Button
                    onClick={() => onBack()}
                    size="large"
                    sx={{
                      width: '40%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Back
                  </Button>
                  <Divider variant="fullWidth" sx={{ paddingTop: 3 }} />
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
                    <Item
                      text="Imagination Time"
                      value={slide3Time}
                      setValue={setSlide3Tiem}
                    />
                  </Grid>
                  <Grid container xs={6}>
                    <Item
                      text="Time to show Rivalry"
                      value={slide4Time}
                      setValue={setSlide4Tiem}
                    />
                  </Grid>
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

                <Grid container item xs={12}>
                  <Typography variant="h6">Preview Luminance:</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent={'center'}>
                  <OpacitySlider
                    opacityValue={opacity}
                    setOpacityValue={setOpacity}
                    rivalry={recallTypes[rivalry]}
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
                    <Button
                      onClick={onClickPerceptual}
                      size="large"
                      sx={{
                        width: '70%',
                        backgroundColor: 'lightgray',
                        margin: '5px',
                      }}
                      color="inherit"
                    >
                      Binocular
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SettingsForm
