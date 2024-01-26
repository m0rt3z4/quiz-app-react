/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
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
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import useKeyboard from '../../helpers/useKeyboard'
import { pickRandomStimulus } from '../../helpers/letterHelper'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { TrialGrid } from '../../Components/TrialGrid/TrialGrid'

const InfoForm = ({ onNext }) => {
  const [stimulus, setStimulus] = useState({})
  const { changeTitle } = useTrialContext()
  const [checked, setChecked] = React.useState(true)
  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    changeTitle('Consent Form')
  }, [])

  const onClickNext = () => {
    return onNext()
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
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 310,
              maxHeight: 430,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid container justifyContent={'center'} spacing={2}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    minHeight: 310,
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid black',
                  }}
                >
                  {'Lorrem ipsum'}
                </Card>{' '}
              </Grid>

              <Grid item xs={10}>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  label="I agree & consent to participate."
                />
              </Grid>
              <Grid item xs={10}>
                <Button
                  sx={{ width: '50%' }}
                  color="primary"
                  onClick={onClickNext}
                >
                  Submit
                </Button>{' '}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default InfoForm
