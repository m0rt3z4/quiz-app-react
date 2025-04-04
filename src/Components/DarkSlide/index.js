import React from 'react'
import { Grid, Typography } from '@mui/material'
import BINOCULARV2 from '../../assets/MemoryV2TutorialSlides/BinocularV2_2.jpg'
import PERCEPTUAL from '../../assets/MemoryV2TutorialSlides/Perceptual2.jpg'
import IMAGINARY from '../../assets/MemoryV2TutorialSlides/Imaginary2.jpg'
import MIXED from '../../assets/MemoryV2TutorialSlides/Mixed2.jpg'
import BINOCULARV2CALIBRATION from '../../assets/MemoryV2TutorialSlides/BinocularV2Calibration2.jpg'
import useKeyboardNavigation from '../../helpers/useKeyboardNavigation'
import { tutorialTypes } from './consts'

const DarkSlide = ({ content, onNext }) => {
  useKeyboardNavigation(onNext)

  const picLoader = () => {
    switch (content) {
      case tutorialTypes.BINOCULARV2CALIBRATION: {
        return BINOCULARV2CALIBRATION
      }
      case tutorialTypes.BINOCULARV2: {
        return BINOCULARV2
      }
      case tutorialTypes.PERCEPTUAL: {
        return PERCEPTUAL
      }
      case tutorialTypes.IMAGINARY: {
        return IMAGINARY
      }
      case tutorialTypes.MIXED: {
        return MIXED
      }
      default:
        break
    }
  }
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={-6}
    >
      <Grid container item xs={12} justifyContent={'center'}>
        <img src={picLoader()} alt="MU Unviersity" style={{ width: '110%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography fontFamily={'B-Nazanin'}>بعدی (→)</Typography>
      </Grid>
    </Grid>
  )
}

export default DarkSlide
