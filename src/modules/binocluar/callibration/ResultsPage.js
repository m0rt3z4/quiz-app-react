/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {
  Grid,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
} from '@mui/material'

// ResultsPage
const ResultsPage = ({ results = {}, onBack }) => {
  const ResultsTable = () => {
    return (
      <TableContainer>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: 'white' }}>
                User Response
              </TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>
                Red Opacity
              </TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>
                Green Opacity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.results.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  sx={{
                    color: row.userResponse === 'GREEN' ? 'lightgreen' : 'red',
                  }}
                >
                  {row.userResponse}
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>
                  {row.redOpacity}
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>
                  {row.greenOpacity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  return (
    <Grid container justifyContent={'center'} spacing={2}>
      <Grid container item xs={12} justifyContent={'center'}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            width: '100%',
            minHeight: 450,
            // maxHeight: 540,
            borderRadius: '35px',
            padding: 7,
            border: '1px solid black',
          }}
        >
          <Grid container xs={12} justifyContent={'center'}>
            <Grid item xs={8}>
              <Button
                sx={{
                  color: 'white',
                  bgcolor: 'darksalmon',
                  maxWidth: '200px',
                }}
                onClick={onBack}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={8} paddingTop={5}>
              <Typography
                sx={{ color: 'white' }}
              >{`Number of Trials: ${results.results.length}`}</Typography>
            </Grid>
            <Grid item xs={8} paddingTop={1}>
              <Typography
                sx={{ color: 'white' }}
              >{`Switch Ratio: ${results.switchRatio}`}</Typography>
            </Grid>
            <Grid item xs={8} paddingTop={1}>
              <Typography
                sx={{ color: 'white' }}
              >{`Green Opacity: ${results.greenOpacity}`}</Typography>
            </Grid>
            <Grid item xs={8} paddingTop={1}>
              <Typography
                sx={{ color: 'white' }}
              >{`Red Opacity: ${results.redOpacity}`}</Typography>
            </Grid>
            <Grid item xs={8} paddingTop={1}>
              <Typography
                sx={{
                  color: results.switchRatio >= 0.8 ? 'lightgreen' : 'red',
                }}
              >{`Callibration ${
                results.switchRatio >= 0.8 ? 'Successful' : 'Failed'
              }!`}</Typography>
            </Grid>
            <Grid item xs={8} paddingTop={5}>
              <ResultsTable />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ResultsPage
