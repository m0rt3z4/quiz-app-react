/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Card, Typography, Button } from '@mui/material'
import { useTrialContext } from '../../layouts/TrialLayout/context'

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
    return redirectUrl('/trial')
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
                <Typography>Now let's head to the main trial.</Typography>
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
                    Main Trial
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