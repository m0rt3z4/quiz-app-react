import React, { useEffect, useState } from 'react'
import { Box, Grid, Card } from '@mui/material'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
import { cellTypes } from '../../../Components/Experiment2Grid/consts'
import { SettingsButton } from '../../../Components/SettingsButton'

export const PreviewGridPage = ({ onBack }) => {
  const [stimulus, setStimulus] = useState({})
  const { changeTitle, darkTheme } = useExp2PersistedContext()
  useEffect(() => {
    changeTitle('')
  }, [changeTitle])

  function getRandomElements(n = 35, numElements) {
    let result = []
    let clonedArray = [...Array(n).keys()] // Clone the array to avoid modifying the original array
    while (result.length < numElements && clonedArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * clonedArray.length)
      result.push(clonedArray.splice(randomIndex, 1)[0])
    }
    return result
  }
  const previewTypes = {
    PERCEPTUAL_6: 'PERCEPTUAL_6',
    PERCEPTUAL_3: 'PERCEPTUAL_3',
    IMAGINARY: 'IMAGINARY',
    IMAGINARY_REVERSE: 'IMAGINARY_REVERSE',
    INQUIRY_6: 'INQUIRY_6',
    INQUIRY_3: 'INQUIRY_3',
  }
  const setRandomStimulus = (type) => {
    let res = {}
    switch (type) {
      case previewTypes.IMAGINARY: {
        const arr = getRandomElements(35, 1)
        res[arr[0]] = { cellType: cellTypes.IMAGINARY }
        break
      }
      case previewTypes.IMAGINARY_REVERSE: {
        const arr = getRandomElements(35, 1)
        res[arr[0]] = { cellType: cellTypes.IMAGINARY_REVERSE }
        break
      }
      case previewTypes.INQUIRY_3: {
        const arr = getRandomElements(35, 3)
        res[arr.splice(0, 1)[0]] = { cellType: cellTypes.INQUIRY }
        arr.map((i) => {
          return (res[i] = { cellType: cellTypes.FILLED })
        })
        break
      }
      case previewTypes.INQUIRY_6: {
        const arr = getRandomElements(35, 6)
        res[arr.splice(0, 1)[0]] = { cellType: cellTypes.INQUIRY }
        arr.map((i) => {
          return (res[i] = { cellType: cellTypes.FILLED })
        })
        break
      }
      case previewTypes.PERCEPTUAL_6: {
        const arr = getRandomElements(35, 6)
        arr.map((i) => {
          return (res[i] = { cellType: cellTypes.FILLED })
        })
        break
      }
      case previewTypes.PERCEPTUAL_3: {
        const arr = getRandomElements(35, 3)
        arr.map((i) => {
          return (res[i] = { cellType: cellTypes.FILLED })
        })
        break
      }
      default:
        break
    }
    return setStimulus(res)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent={'center'}
        // alignItems={'baseline'}
        spacing={2}
        // sx={{ paddingTop: 1 }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              backgroundColor: darkTheme ? 'black' : 'white',
              minHeight: 420,
              borderRadius: '35px',
              padding: 3,
              border: '1px solid black',
            }}
          >
            <Grid container>
              <Grid container justifyContent={'center'} xs={12} spacing={3}>
                <Grid item xs={4}>
                  <SettingsButton
                    text="Back"
                    size={40}
                    onClickButton={() => onBack()}
                  />
                </Grid>
                <Grid item xs={10} paddingBottom={3}>
                  <Experiment2Grid darkTheme stimuli={stimulus} />
                </Grid>
                <Grid item xs={4}>
                  <SettingsButton
                    text="Perceptual 6"
                    size={50}
                    onClickButton={() =>
                      setRandomStimulus(previewTypes.PERCEPTUAL_6)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <SettingsButton
                    text="Perceptual 3"
                    size={50}
                    onClickButton={() =>
                      setRandomStimulus(previewTypes.PERCEPTUAL_3)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <SettingsButton
                    text="Imaginary 3"
                    size={50}
                    onClickButton={() =>
                      setRandomStimulus(previewTypes.IMAGINARY)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <SettingsButton
                    text="Imaginary Reverse"
                    size={50}
                    onClickButton={() =>
                      setRandomStimulus(previewTypes.IMAGINARY_REVERSE)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <SettingsButton
                    text="Inquiry 6"
                    size={50}
                    onClickButton={() =>
                      setRandomStimulus(previewTypes.INQUIRY_6)
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <SettingsButton
                    text="Inquiry 3"
                    size={50}
                    onClickButton={() =>
                      setRandomStimulus(previewTypes.INQUIRY_3)
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PreviewGridPage
