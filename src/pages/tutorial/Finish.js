/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import useKeyboard from '../../helpers/useKeyboard'

const Finish = () => {
  const { changeTitle, showArrows } = useTrialContext()
  const navigate = useNavigate()

  const redirectUrl = (url) => {
    navigate(url)
  }
  useEffect(() => {
    showArrows(false)
    changeTitle('Thank You')
  }, [])

  const onClick = () => {
    return redirectUrl('/')
  }

  const keyboardCallback = (resp) => {
    if (!!resp && resp.keyPressed === 'ArrowRight') redirectUrl('/trial')
  }
  useKeyboard(Date.now(), ['ArrowRight'], keyboardCallback)

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
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 450,
              maxHeight: 530,
              borderRadius: '35px',
              padding: 7,
              border: '1px solid black',
            }}
          >
            <Grid
              container
              justifyContent={'center'}
              alignItems={'center'}
              spacing={2}
            >
              <Grid item xs={8}>
                <Typography>
                  Press right arrow to forward to the main trials.
                </Typography>
              </Grid>
              <Grid container justifyContent={'center'} xs={12}>
                <Grid item xs={8} paddingTop={11}>
                  <Button
                    sx={{
                      width: '70%',
                      height: 50,
                      backgroundColor: 'lightgray',
                    }}
                    color="primary"
                    onClick={onClick}
                  >
                    Home Page
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

export default Finish
