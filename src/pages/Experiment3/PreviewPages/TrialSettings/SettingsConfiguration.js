import React, { useState } from 'react'
import { Grid, Typography, TextField, Divider } from '@mui/material'
import { useExperiment3Context } from '../../../../layouts/Experiment3Layout'
import { SettingsButton } from '../../../../Components/SettingsButton'

// import { SettingsButton } from '../../../Components/SettingsButton'

export const SettingsConfiguration = () => {
  const { exp3Settings, changeExp3Settings } = useExperiment3Context()

  const [block1TimeToShowLetter, setBlock1TimeToShowLetter] = useState(
    exp3Settings.block1TimeToShowLetter
  )
  const [block1TimeToShowMask, setBlock1TimeToShowMask] = useState(
    exp3Settings.block1TimeToShowMask
  )
  const [block1TimeBetweenStimuli, setBlock1TimeBetweenStimuli] = useState(
    exp3Settings.block1TimeBetweenStimuli
  )
  const [timeToShowOrientation, setTimeToShowOrientation] = useState(
    exp3Settings.timeToShowOrientation
  )
  const [timeBetweenOrientations, setTimeBetweenOrientations] = useState(
    exp3Settings.timeBetweenOrientations
  )
  const [timeToWaitAfterSurprize, setTimeToWaitAfterSurprize] = useState(
    exp3Settings.timeToWaitAfterSurprize
  )
  const [
    timeToWaitAfterPresentation,
    setTimeToWaitAfterPresentation,
  ] = useState(exp3Settings.timeToWaitAfterPresentation)

  const onClickSave = () => {
    changeExp3Settings({
      block1TimeToShowLetter,
      block1TimeToShowMask,
      block1TimeBetweenStimuli,
      timeToShowOrientation,
      timeBetweenOrientations,
      timeToWaitAfterSurprize,
      timeToWaitAfterPresentation,
    })
  }
  return (
    <Grid container xs={12}>
      {/* block 1 */}

      <Grid container item spacing={2} justifyContent={'center'}>
        <Grid item xs={12} paddingBottom={3}>
          <Typography variant="h6">Block 1</Typography>
        </Grid>
        <InputItem
          xs={10}
          label={'Time to show Letter'}
          value={block1TimeToShowLetter}
          setValue={setBlock1TimeToShowLetter}
        />
        <InputItem
          xs={10}
          label={'Time to show mask'}
          value={block1TimeToShowMask}
          setValue={setBlock1TimeToShowMask}
        />
        <InputItem
          xs={10}
          label={'Time between stimuli'}
          value={block1TimeBetweenStimuli}
          setValue={setBlock1TimeBetweenStimuli}
        />
        <Grid item xs={12} paddingBottom={3} paddingTop={5}>
          <Divider />
        </Grid>
      </Grid>

      {/* block 2&3 */}

      <Grid container item spacing={2} justifyContent={'center'}>
        <Grid item xs={12} paddingBottom={3}>
          <Typography variant="h6">Block 2&3</Typography>
        </Grid>

        {/* Presentation Step */}

        <Grid item xs={12} paddingBottom={3}>
          <Typography variant="h6">Presentation Step</Typography>
        </Grid>

        <InputItem
          xs={10}
          label={'Time to show Orientation'}
          value={timeToShowOrientation}
          setValue={setTimeToShowOrientation}
        />
        <InputItem
          xs={10}
          label={'Time between Orientations'}
          value={timeBetweenOrientations}
          setValue={setTimeBetweenOrientations}
        />
        <InputItem
          xs={10}
          label={'Time to wait after surprize'}
          value={timeToWaitAfterSurprize}
          setValue={setTimeToWaitAfterSurprize}
        />

        {/* Recognition Step */}

        <Grid item xs={12} paddingBottom={3}>
          <Typography variant="h6">Recognition Step</Typography>
        </Grid>
        <InputItem
          xs={10}
          label={'Time to wait after presentation'}
          value={timeToWaitAfterPresentation}
          setValue={setTimeToWaitAfterPresentation}
        />
      </Grid>
      <Grid container item justifyContent={'end'} paddingTop={5}>
        <SettingsButton
          text="Save"
          backgroundColor="lightgray"
          size={25}
          onClickButton={onClickSave}
        />
      </Grid>
    </Grid>
  )
}

const InputItem = ({ value, setValue, label, xs = 12 }) => {
  return (
    <Grid container item xs={xs} alignItems={'center'} spacing={1}>
      <Grid item xs={6}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={value}
          onChange={(event) => {
            setValue(parseInt(event.target.value))
          }}
          variant="outlined"
          sx={{ borderRadius: '20px' }}
        />
      </Grid>
    </Grid>
  )
}
