import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, Button } from '@mui/material'
import { useExperiment2Context } from '../../../layouts/Experiment2Layout/context'
import { Experiment2Grid } from '../../../Components/Experiment2Grid'
import { cellTypes } from '../../../Components/Experiment2Grid/consts'

export const PreviewGridPage = ({ onBack }) => {
  const [stimulus, setStimulus] = useState({})
  const { changeTitle } = useExperiment2Context()
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
              padding: 5,
              border: '1px solid black',
            }}
          >
            <Grid container>
              <Grid container justifyContent={'center'} xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Button
                    onClick={() => onBack()}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={10}>
                  <Experiment2Grid stimuli={stimulus} />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() => setRandomStimulus(previewTypes.PERCEPTUAL_6)}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Perceptual 6
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() => setRandomStimulus(previewTypes.PERCEPTUAL_3)}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Perceptual 3
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() => setRandomStimulus(previewTypes.IMAGINARY)}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Imaginary
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() =>
                      setRandomStimulus(previewTypes.IMAGINARY_REVERSE)
                    }
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Imaginary Reverse
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() => setRandomStimulus(previewTypes.INQUIRY_6)}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Inquiry 6
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() => setRandomStimulus(previewTypes.INQUIRY_3)}
                    size="large"
                    sx={{
                      width: '70%',
                      backgroundColor: 'lightgray',
                      margin: '5px',
                    }}
                  >
                    Inquiry 3
                  </Button>
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
