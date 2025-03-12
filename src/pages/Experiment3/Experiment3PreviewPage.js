import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useExperiment3Context } from '../../layouts/Experiment3Layout'

import { SettingsButton } from '../../Components/SettingsButton'

const Experiment3PreviewPage = () => {
  const { changeTitle, changeOutletWidth, showArrows } = useExperiment3Context()
  const navigate = useNavigate()
  const redirectUrl = (url) => {
    navigate(url)
  }
  useEffect(() => {
    changeTitle('Settings & Preview')
    changeOutletWidth(5)
    showArrows(false)
  }, [changeOutletWidth, changeTitle, showArrows])

  const Item = ({ text = '', buttonLable = '', onClickButton }) => {
    return (
      <Grid container item xs={12} justifyContent={'center'}>
        <Grid item xs={12} justifyContent={'center'}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <Typography fontSize={'15px'}>{text}</Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <SettingsButton
            text={buttonLable}
            onClickButton={onClickButton}
            backgroundColor="lightgray"
            size={50}
          />
          <Divider sx={{ paddingTop: 3 }} />
        </Grid>
      </Grid>
    )
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
          padding: 7,
          border: '1px solid black',
        }}
      >
        <Grid container paddingTop={3}>
          <Item
            text="Preview Grid"
            buttonLable="Preview"
            onClickButton={() => {
              redirectUrl('grid')
            }}
          />
          <Item
            text="Preview Trial Blocks"
            buttonLable="Blocks"
            onClickButton={() => {
              redirectUrl('blocks')
            }}
          />
          <Item
            text="Trial Settings"
            buttonLable="Settings"
            onClickButton={() => {
              redirectUrl('settings')
            }}
          />
        </Grid>
      </Card>
    </Box>
  )
}
export default Experiment3PreviewPage
