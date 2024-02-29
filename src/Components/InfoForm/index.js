/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import moment, { now } from 'moment'
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
  Divider,
} from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import DatePicker from './DatePicker'
import Form from './Form'

const InfoForm = ({ onNext }) => {
  const [dateValue, setDateValue] = useState(moment(now))
  const { changeTitle } = useTrialContext()

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
              alignItems: 'baseline',
              justifyContent: 'center',
              minHeight: 450,
            //   maxHeight: 530,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Form onNext={onNext}/>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default InfoForm
