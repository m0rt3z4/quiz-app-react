import React, { useEffect, useState } from 'react'
import { Box, Grid, Card } from '@mui/material'
import { useExperiment3Context } from '../../../layouts/Experiment3Layout'
import { Experiment3Grid } from '../../../Components/Experiment3Grid'
import { GridParamSelectSection } from './GridSettings'

export const PreviewGridPage = () => {
  const {
    changeTitle,
    changeOutletWidth,
    exp3Settings,
    changeExp3Settings,
  } = useExperiment3Context()
  const [stimulus, setStimulus] = useState({
    i: 0,
    j: 0,
    iconType: 'STIMULUS_0',
  })
  const [isLight, setIsLight] = useState(true)
  const [cellSize, setCellSize] = useState(exp3Settings.gridCellSize)
  useEffect(() => {
    changeTitle('')
    changeOutletWidth(6)
  }, [changeOutletWidth, changeTitle])

  const onSaveCellSize = () => {
    changeExp3Settings({ ...exp3Settings, gridCellSize: cellSize })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          color: 'black',
          backgroundColor: 'white',
          minHeight: 420,
          borderRadius: '35px',
          padding: 1,
          border: '1px solid black',
        }}
      >
        <Grid container item xs={8} justifyContent={'center'} paddingTop={3}>
          <Experiment3Grid
            isPreview
            isWhiteThemed={isLight}
            stimulus={stimulus}
            cellSize={cellSize}
          />
        </Grid>
      </Card>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          color: 'black',
          backgroundColor: 'white',
          minHeight: 120,
          borderRadius: '35px',
          padding: 1,
          marginTop: 2,
          border: '1px solid black',
        }}
      >
        <GridParamSelectSection
          isLight={isLight}
          setIsLight={setIsLight}
          stimulus={stimulus}
          setStimulus={setStimulus}
          cellSize={cellSize}
          setCellSize={setCellSize}
          onSave={onSaveCellSize}
        />
      </Card>
    </Box>
  )
}
