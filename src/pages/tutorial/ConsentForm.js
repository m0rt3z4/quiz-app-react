/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  Card,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import ConsentText from './ConsentText'
import Consent1 from '../../assets/Consent1.txt'

const ConsentForm = ({ onNext }) => {
  const { changeTitle } = useTrialContext()
  const [checked, setChecked] = React.useState(false)
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    changeTitle('Consent Form')
    fetch(Consent1)
      .then((r) => r.text())
      .then((text) => {
        setText(text)
      })
  }, [])

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
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 450,
              maxHeight: 530,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid container justifyContent={'center'} spacing={2}>
              <Grid item container xs={12}>
                {/* <Typography>{text}</Typography> */}
                <ConsentText />
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
                  disabled={!checked}
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

export default ConsentForm
