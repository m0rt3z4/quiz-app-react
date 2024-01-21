import React, { useEffect } from 'react'
import { useTrialContext } from '../../layouts/TrialLayout/context'
import { Box, Card } from '@mui/material'
export const TrialModule = () => {
  const { title, changeTitle } = useTrialContext()

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 620,
          width: '100%',
          alignSelf: 'center',
        }}
      >
        {Array.from(Array(25).keys()).map((item) => (
          <Box
            sx={{
              border: '1px solid black',
              width: 70,
              height: 70,
              borderCollapse: 'collapse',
            }}
          ></Box>
        ))}
      </Box>
    </Card>
  )
}
