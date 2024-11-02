import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Divider } from '@mui/material'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import { previewPages } from './index'
import { SettingsButton } from '../../../Components/SettingsButton'

export const MainPage = ({ setPage }) => {
  const { changeTitle, darkTheme } = useExp2PersistedContext()
  useEffect(() => {
    changeTitle('Preview Settings')
  }, [changeTitle])

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
            backgroundColor="white"
            size={40}
          />
          <Divider sx={{ paddingTop: 3 }} />
        </Grid>
      </Grid>
    )
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
              alignItems: 'baseline',
              justifyContent: 'center',
              color: darkTheme ? 'white' : 'black',
              backgroundColor: darkTheme ? 'black' : 'white',
              minHeight: 420,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid
              container
              sx={{ paddingTop: '20px' }}
              justifyContent={'center'}
            >
              <Item
                text="Preview The Main Experiment:"
                buttonLable="Start Experiment"
                onClickButton={() => setPage(previewPages.MAIN_TRIAL)}
              />
              <Item
                text="Preview The Trial Grid:"
                buttonLable="preview"
                onClickButton={() => setPage(previewPages.TRIAL_GRID)}
              />
              <Item
                text="Trial Blocks Settings:"
                buttonLable="settings"
                onClickButton={() => setPage(previewPages.PREVIEW_BLOCKS)}
              />
              <Item
                text="Binocular Trial:"
                buttonLable="Settings"
                onClickButton={() => setPage(previewPages.BINOCULAR_TRIAL)}
              />
              <Item
                text="Binocular Trial Version 2:"
                buttonLable="Settings"
                onClickButton={() => setPage(previewPages.BINOCULAR_TRIAL_V2)}
              />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainPage
