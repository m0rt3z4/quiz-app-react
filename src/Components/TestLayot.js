import React, { useState,  } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import MainTest from './MainTest'

const InstructionBar = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  justifyContent: 'center',
  verticalAlign: 'center',
  padding: theme.spacing(5),
  minHeight: '70px',
}))

const KeyboardArrows = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(5),
  minHeight: '400px',
}))
const GridTableContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  justifyContent: 'center',
  verticalAlign: 'center',
  //   padding: theme.spacing(5),
  padding: '50px 150px',
  minHeight: '400px',
}))

const Gridoo = () => {
  const [istruction, setInstruction] = useState('start')
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent={'center'} paddingTop={1}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={8}>
            <InstructionBar>
              <p style={{ verticalAlign: 'center', position: 'absolute' }}>
                {istruction}
              </p>
            </InstructionBar>
          </Grid>
        </Grid>

        <Grid container spacing={2} paddingTop={'10px'}>
          <Grid item xs={2}>
            <KeyboardArrows>Test 1</KeyboardArrows>
          </Grid>
          <Grid item xs={8}>
            <GridTableContainer>
              <MainTest setText={setInstruction} />
            </GridTableContainer>
          </Grid>
          <Grid item xs={2}>
            <KeyboardArrows>Test 3</KeyboardArrows>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Gridoo
