/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Box, Grid, Card, Typography } from '@mui/material'

const ConsentText = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        minHeight: 310,
        width: '100%',
        borderRadius: '5px',
        border: '1px solid black',
        maxHeight: 310,
        overflow: 'auto',
      }}
    >
      <Grid
        container
        xs={12}
        justifyContent={'flex-start'}
        spacing={3}
        padding={4}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ paddingTop: '45px' }}
            fontSize={'25px'}
            gutterBottom
            alignContent={'center'}
          >
            {'Consent to Participate in a Research Study'}
          </Typography>
          <Typography
            fontSize={'15px'}
            alignContent={'flex-start'}
            variant="subtitle1"
            gutterBottom
          >
            Project Title: Recalling On-Image vs. Off-Image Stimuli: How Visual
            Imagery Interacts with Working Memory
          </Typography>
          <Typography fontSize={'15px'} variant="subtitle1" gutterBottom>
            {'Principal Investigator/Researcher: Nelson Cowan'}
          </Typography>
          <Typography
            fontSize={'15px'}
            variant="subtitle2"
            gutterBottom
            //   noWrap={true}
          >
            You are being invited to take part in a research project. You must
            be 18 years of age or older. Your participation is completely
            voluntary, and you may withdraw at any time withou t penalty. This
            study aims to investigate how mental imagery affects visual working
            memory.
          </Typography>
          <Typography fontSize={'15px'} variant="subtitle2" gutterBottom>
            If you agree to participate, you will complete the following:
          </Typography>
          <Typography
            alignContent={'flex-start'}
            fontSize={'15px'}
            variant="subtitle2"
            gutterBottom
          >
            • Working memory tasks, where multiple dots will be flashed on a
            grid on a computer screen, and you will be asked if you remember
            seeing the cells where the dots were located.
          </Typography>
          <Typography fontSize={'15px'} variant="subtitle2" gutterBottom>
            • Mental imagery tasks, where you will be asked to imagine and hold
            an image of either an H or I in the grid and multiple asterisks (*)
            will be flashed on the grid, and you will be asked if the presented
            asterisk is on the imagined letter.
          </Typography>
          <Typography fontSize={'15px'} variant="subtitle2" gutterBottom>
            • Working memory-imagery tasks, where you will be asked to imagine
            and hold an image of either an H or I on a grid on a computer screen
            and multiple dots will be flashed on the grid, and you will be asked
            if you remember the cells where the dots were located.
          </Typography>
          <Typography fontSize={'15px'} variant="subtitle2" gutterBottom>
            The testing session will last approximately 40 minutes. There are no
            anticipated risks beyond those encountered in everyday life. All
            data collected will be kept confidential and used only for research
            purposes. Identifying information such as your name will not be
            associated with any published results.
          </Typography>
          <Typography fontSize={'15px'} variant="subtitle2" gutterBottom>
            As a Psych 1000 Student participating for research credit, your
            participation in this study may at least partially fulfill the
            research requirements for your PSYCH 1000 Introduction to Psychology
            class. For your participation in this study, you will receive 2
            credits. You are also aware that there are alternative ways of
            fulfilling your research requirement (e.g., completing a short
            paper, completing an exam on alternative readings). Alternatives are
            described in the syllabus for your Introduction to Psychology class
            and can be provided to you by your professor. The information you
            provide will be kept confidential and only the research team will
            have access to it
          </Typography>
          <Typography fontSize={'15px'} variant="subtitle2" gutterBottom>
            If you have any questions or concerns about this research, please
            contact cowann@missouri.edu. If you have questions about your rights
            as a research participant, please contact the University of Missouri
            Institutional Review Board (IRB) at 573-882-3181 or
            muresearchirb@missouri.edu. The IRB is a group of people who review
            research studies to make sure the rights and welfare of participants
            are protected. If you want to talk privately about any concerns or
            issues related to your participation, you may contact the Research
            Participant Advocacy at 888-280-5002 (a free call) or email
            muresearchrpa@missouri.edu.
          </Typography>
        </Box>
      </Grid>
    </Card>
  )
}

export default ConsentText
