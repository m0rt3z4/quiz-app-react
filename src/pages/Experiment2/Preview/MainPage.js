import React, { useEffect } from 'react'
import { Box, Grid, Card, Typography, Button, Divider } from '@mui/material'
import { useExp2PersistedContext } from '../../../layouts/Exp2PersistedLayout'
import { previewPages } from './index'

export const MainPage = ({ setPage }) => {
  const { changeTitle } = useExp2PersistedContext()
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
          <Button
            onClick={onClickButton}
            size="large"
            sx={{
              width: '70%',
              backgroundColor: 'lightgray',
              margin: '5px',
            }}
          >
            {buttonLable}
          </Button>
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
                text="Preview The Main Experience:"
                buttonLable="preview"
                onClickButton={() => setPage(previewPages.MAIN_TRIAL)}
              />
              <Item
                text="Preview The Trial Grid:"
                buttonLable="preview"
                onClickButton={() => setPage(previewPages.TRIAL_GRID)}
              />
              <Item
                text="Preview The Trial Blocks:"
                buttonLable="preview"
                onClickButton={() => setPage(previewPages.PREVIEW_BLOCKS)}
              />
              <Item
                text="Preview The Binocular Trial:"
                buttonLable="preview"
                onClickButton={() => setPage(previewPages.BINOCULAR_TRIAL)}
              />
              <Item
                text="Preview The Binocular Trial Version 2:"
                buttonLable="preview"
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
