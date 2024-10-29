import React, { useState } from 'react'
import { Grid, Button, Divider, Typography, TextField } from '@mui/material'
import { useExp2PersistedContext } from '../../../../layouts/Exp2PersistedLayout'

export const MixedTrialSettings = ({ onBack, onStartPreview }) => {
  const {
    memoryV2MixedSizes,
    changeMemoryV2MixedSizes,
  } = useExp2PersistedContext()

  const [iippValue, setIippValue] = useState(memoryV2MixedSizes.iipp)
  const [ppiiValue, setPpiiValue] = useState(memoryV2MixedSizes.ppii)
  const [ipipValue, setIpipValue] = useState(memoryV2MixedSizes.ipip)
  const [pipiValue, setPipiValue] = useState(memoryV2MixedSizes.pipi)
  const [iiipppValue, setIiipppValue] = useState(memoryV2MixedSizes.iiippp)
  const [pppiiiValue, setPppiiiValue] = useState(memoryV2MixedSizes.pppiii)
  const [ipipipValue, setIpipipValue] = useState(memoryV2MixedSizes.ipipip)
  const [pipipiValue, setPipipiValue] = useState(memoryV2MixedSizes.pipipi)
  const onSave = () => {
    changeMemoryV2MixedSizes({
      iipp: iippValue,
      ppii: ppiiValue,
      ipip: ipipValue,
      pipi: pipiValue,
      iiippp: iiipppValue,
      pppiii: pppiiiValue,
      ipipip: ipipipValue,
      pipipi: pipipiValue,
    })
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

  return (
    <Grid
      container
      justifyContent={'center'}
      xs={12}
      spacing={3}
      paddingTop={5}
    >
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Divider variant="fullWidth" sx={{ paddingTop: 3 }} />
        </Grid>
        <Grid container item xs={12} justifyContent={'start'} paddingTop={3}>
          <Typography variant="h6">Mixed Block Sizes:</Typography>
        </Grid>

        <Grid container xs={6} paddingTop={3}>
          <Item text="iipp (x8)" value={iippValue} setValue={setIippValue} />
          <Item text="ppii (x8)" value={ppiiValue} setValue={setPpiiValue} />
          <Item text="ipip (x8)" value={ipipValue} setValue={setIpipValue} />
          <Item text="pipi (x8)" value={pipiValue} setValue={setPipiValue} />
        </Grid>
        <Grid container xs={6}>
          <Item
            text="iiippp (x12)"
            value={iiipppValue}
            setValue={setIiipppValue}
          />
          <Item
            text="pppiii (x12)"
            value={pppiiiValue}
            setValue={setPppiiiValue}
          />
          <Item
            text="ipipip (x12)"
            value={ipipipValue}
            setValue={setIpipipValue}
          />
          <Item
            text="pipipi (x12)"
            value={pipipiValue}
            setValue={setPipipiValue}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent={'flex-end'} xs={12} paddingTop={5}>
        <Grid item xs={4}>
          <Button
            onClick={onSave}
            size="large"
            sx={{
              width: '50%',
              backgroundColor: 'lightgray',
              margin: '5px',
            }}
          >
            save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MixedTrialSettings
