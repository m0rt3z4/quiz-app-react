import React, { useEffect } from 'react'
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from '@mui/material'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import { binocluarTaskTypes, memeoryTaskTypes } from '.'

export const ConfigPage = ({
  binocluarType = memeoryTaskTypes.MEMORY_V2,
  setBinocularType,
  memoryType = binocluarTaskTypes.BINOCULAR_V1,
  setMemoryType,
  onStart,
}) => {
  const { changeTitle } = useExp2PersistedContext()
  useEffect(() => {
    changeTitle('')
  }, [changeTitle])

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
              justifyContent: 'center',
              minHeight: 420,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid container xs={12} spacing={3} alignItems={'center'}>
              <Grid container item xs={4}>
                <Grid item xs={12}>
                  <Typography fontSize={16}>Binocular Task:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Select
                    fullWidth
                    value={binocluarType}
                    onChange={(e) => {
                      setBinocularType(e.target.value)
                    }}
                    size="small"
                  >
                    <MenuItem value={binocluarTaskTypes.BINOCULAR_V1}>
                      {binocluarTaskTypes.BINOCULAR_V1}
                    </MenuItem>
                    {/* <MenuItem value={imaginationCueTypes.RED}>
                      {imaginationCueTypes.RED}
                    </MenuItem> */}
                  </Select>
                </Grid>
              </Grid>
              <Grid container item xs={4}>
                <Grid item xs={12}>
                  <Typography fontSize={16}>Memory Task:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Select
                    fullWidth
                    value={memoryType}
                    onChange={(e) => {
                      setMemoryType(e.target.value)
                    }}
                    size="small"
                  >
                    <MenuItem value={memeoryTaskTypes.MEMORY_V2}>
                      memeoryTaskTypes.MEMORY_V2
                    </MenuItem>
                    {/* <MenuItem value={'RG'}>RG</MenuItem>
                    <MenuItem value={'HV'}>HV</MenuItem>
                    <MenuItem value={'VH'}>VH</MenuItem> */}
                  </Select>
                </Grid>
              </Grid>
              <Grid container item xs={4} justifyContent={'center'}>
                <Button
                  onClick={onStart}
                  size="small"
                  sx={{
                    width: `40%`,
                    backgroundColor: 'lightgray',
                    // margin: '5px',
                  }}
                >
                  Start
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ConfigPage
