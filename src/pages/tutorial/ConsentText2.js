/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Box, Grid, Card, Typography } from '@mui/material'

const ConsentText2 = () => {
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
        sx={{ display: 'flex' }}
        justifyContent={'center'}
        spacing={3}
        padding={4}
      >
        <Box>
          <Typography variant="h5" align="center">
            ADULT CONSENT FORM FOR IN-LAB/IN-PERSON RESEARCH STUDY
          </Typography>
          <Typography variant="h6" align="center">
            (FOR RESEARCH CREDIT)
          </Typography>
          <Typography variant="h6" align="center">
            UNIVERSITY OF MISSOURI: IRB PROJECT #{' '}
          </Typography>
          <Typography variant="h6" align="center">
            PRINCIPAL INVESTIGATOR: NELSON COWAN
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            We invite you to participate in a research study occurring under the
            project titled, “The Impact of Visual Imagery on Spatial Working
            Memory Recall” administered on location at the University of
            Missouri Working Memory Lab in McAlester Annex. This consent will
            outline your rights as a Psych 1000 adult student participating in
            an in-lab/in-person research study. Please read the remainder of
            this form in its entirety and address any questions that you may
            have to the Lead Researcher or Lab Coordinator prior to indicating
            your consent and before participating.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            What you should know before participating:
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • This is an in-lab/in-person study session that will be
            administered by a Researcher on location at the University of
            Missouri Working Memory Lab in the McAlester Annex Building. Please
            refer to the SONA study listing for additional information regarding
            location and parking.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • The purpose of the study is to explore the capacity, functioning,
            and limitations of working memory processes when dealing with
            spatial representations and imagery.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • As a Psych 1000 Student, please be aware of the following: In all
            Psychology 1000 classes, students are required to learn about
            psychological research beyond what is presented in their lectures
            and textbook. This is accomplished through one of two means. First,
            students may serve as subjects in psychological research projects
            that are offered through the Department of Psychological Sciences.
            Through their participation in these projects, students may earn up
            to 14 research/experiment credits (total of 7 hours of
            participation). Alternatively, students may demonstrate their
            knowledge of psychological research by completing a series of short
            papers (e.g., 1-2 pages) on some topic in research. Students are
            also welcome to use a combination of research participation and
            short papers. The research credits (via research participation
            and/or papers) figure into the students' final grades. They are
            required of every Psychology 1000 student (i.e., not simply extra
            credit).
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • As a Psych 1000 Student participating for research credit, your
            participation in this study may at least partially fulfill the
            research requirements for your PSYCH 1000 Introduction to Psychology
            class. You are also aware that there are alternative ways of
            fulfilling your research requirement (e.g., completing a short
            paper, completing an exam on alternative readings). Alternatives are
            described in the syllabus for your Introduction to Psychology class
            and can be provided to you by your professor.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Your responses will be collected using a randomly assigned number
            and/or letter combination for anonymity meaning no one will know the
            answers came from you.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Although we may request demographic information such as age,
            gender, race, ethnicity, this information is not required in order
            to participate.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You may be presented with visual and/or auditory information such
            as speech, sounds, tones, musical notes, words, numbers, names,
            shapes, objects, pictures and/or colors and asked to visualize,
            remember and recall items using your voice or nonverbal equivalent
            (i.e., head nod or thumbs up; head shake or thumbs down), a pointing
            gesture, a keyboard press, a button press, touch screen, track pad,
            touch pad, or mouse click. Please be aware that visual items can
            flash or appear and disappear very quickly and that sounds can be
            soft or loud, high or low, irregular or repetitive.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • The studies that we post can be 30 to 75 minutes long depending on
            the study. The duration of THIS specific study will be indicated in
            the SONA study listing.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You will receive the following for your participation: 1 SONA
            Research Credit for every 30 minutes of participation.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Participation is voluntary meaning you can choose to discontinue
            participation at any time.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • If you choose to discontinue participation before completion: The
            number of SONA Research Credits will be prorated (equivalent to the
            TOTAL amount of time participated) which may result in fewer, or
            zero credits awarded.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • If you need additional information, please contact the Lead
            Researcher (Hamid Nourbakhshi at hnth5@missouri.edu )OR you may
            contact the Working Memory Lab Coordinator, Bret Glass, on behalf of
            Nelson Cowan, Ph.D., Principal Investigator and Project Director,
            via email at glassb@missouri.edu (preferred method) or via phone at
            573-882-7417
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • If you decide to take part in this study, you may scan, save,
            download, photo capture, or print this consent form for future
            reference and further review.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            TITLE OF STUDY
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • The Impact of Visual Imagery on Spatial Working Memory Recall
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            WHY IS THIS STUDY BEING DONE?{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • The aim of these studies is to investigate the functioning and
            limitations of working memory processes when dealing with spatial
            representations and imagery.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            {' '}
            WHO IS CONDUCTING THIS RESEARCH?{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • The Working Memory Lab, University of Missouri, Department of
            Psychological Sciences, under the direction of Dr. Nelson Cowan,
            Principal Investigator and Director, via a grant provided by The
            National Institute of Child Health and Human Development.{' '}
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            WHO WILL BE PARTICIPATING IN THIS STUDY?{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Psych 1000 adult students 18 to 30 years of age at the University
            of Missouri who have been determined to meet the eligibility
            requirements. Please refer to the specific study listing for age
            range requirements to determine if you are eligible.{' '}
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            {' '}
            ELIGIBILITY REQUIREMENTS{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Due to the location of the study, Participants must be able to
            enter the building using steps on the west side of the building and
            depending on the Researcher assigned study area, be able to navigate
            up or down a short flight of stairs.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Must have normal or corrected-to-normal vision (glasses; contacts)
            including normal color vision meaning the ability to distinguish
            shades and tint of color.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Must have normal or corrected-to-normal hearing (aid; implant).
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Must be a native English speaker OR fluent in the English
            language.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Must have the ability to attend to the following without
            experiencing adverse side effects: Auditory items that can be soft
            or loud, high or low, irregular or repetitive and/or Visual items
            that can flash or appear and disappear very quickly.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            INELIGIBLE IF ANY OF THE FOLLOWING APPLY TO YOU:
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Inability to attend to or respond to repetitive irregular sounds
            and/or flashing items without experiencing adverse side effects.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Cognitive impairment or traumatic brain injury.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Color Blindness or inability to see colors or distinguish shades
            and tint of color.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            IF YOU DECIDE TO PARTICIPATE, WHAT WILL YOU BE ASKED TO DO?{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Participate in a single study session on location at the
            University of Missouri Working Memory Lab in the McAlester Annex
            Building for a duration of 30 to 75 minutes. The duration of THIS
            specific study will be indicated in the SONA study listing and
            provided verbally by the Researcher during the consent process and
            prior to your participation.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • While participating or waiting to participate, you will be asked
            to silence or turn off your cell phone in order to eliminate or
            minimize any and all distractions that could potentially affect your
            focus and attention on the task or that could potentially disturb
            someone else who is currently participating.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Remember and/or compare visual and/or auditory information which
            can consist of any or all of the following: speech, sounds, tones,
            musical notes, words, numbers, names, shapes, objects, pictures
            and/or colors.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Use your voice or nonverbal equivalent (i.e., head nod or thumbs
            up; head shake or thumbs down), a pointing gesture, a keyboard
            press, a button press, touch screen, trackpad, touchpad, or mouse
            click to indicate your memory of recently presented items.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You may be asked to wear over-ear headphones, in-ear
            headphones/earbuds, and on-ear headphones OR attend to an external
            or integrated speaker system within the testing environment in order
            to hear auditory information. You may be asked to report, or we may
            record the volume setting after adjusting for your comfort and
            hearing needs.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • In some instances, we may administer questionnaires, surveys, or
            cognitive intelligence measures to determine previous exposure or
            experience regarding specific memory and imagery-based tasks OR to
            determine what organizational methods participants use to structure
            presented information or strategies used to remember, retain,
            retrieve, recover, and recall information. If so, this will be noted
            in the SONA study listing and/or you will be informed by the
            Researcher prior to your participation.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            WHAT YOU NEED TO KNOW REGARDING PARTICIPATION:{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Although you may be asked to return for one or more sessions,
            depending on the study, participating in THIS session will not
            obligate you to return for additional sessions.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • One Researcher will be present for the duration of your session.
            In some instances, we may request your permission to have additional
            Researchers present for data collection, observation and/or training
            purposes.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You understand that your participation is voluntary meaning you
            have the right to refuse or discontinue participation at any time
            without penalty or loss of benefit to which you are otherwise
            entitled.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You understand that your responses will be collected using a
            randomly assigned number and/or letter combination, so that your
            name and personal details will not be linked to any data that we
            collect.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You understand that the data resulting from your participation may
            be shared with other investigators and/or integrated with the
            results obtained from similar projects in the future without asking
            for your consent again. This data will not contain any information
            that could identify you as a participant. It will only be utilized,
            shared, and/or saved using a randomly assigned number that is not
            connected to you or any personal private information that you
            provide.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You understand that this study is not expected to involve risks or
            harm any greater than those ordinarily encountered in daily life.
            You also understand that it is not possible to identify all
            potential risks in any experimental procedure, but that all
            reasonable safeguards have been taken to minimize the known and
            unknown potential risks associated with participation.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Some study applications require observation, audio recording,
            and/or video recording to ensure your safety while participating,
            determine how individual behavior or environmental factors affect
            memory, and/or for data collection purposes. If this applies to THIS
            specific study, it will be indicated in the SONA study listing
            and/or you will be informed by the Researcher prior to your
            participation.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • If you do not approve of the applications indicated in the SONA
            study listing, please inform the Researcher prior to your
            participation to ensure these applications are not used. If you
            approve, these records will be retained for seven years after
            completion of the study per MU policy on a secure computer server
            provided and maintained by University of Missouri Information
            Technology accessible ONLY to the Project Director and Research
            Staff. Video and/or audio recordings will be expunged after the
            seven-year retention period.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You understand that you will receive the following compensation
            for your participation based on the estimated duration and level of
            difficulty associated with the study, as well as your effort and
            engagement in the task. 1 SONA Research Credit for every 30 minutes
            of participation.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            • If you choose to discontinue participation before completion:{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            The number of SONA Research Credits will be prorated (equivalent to
            the TOTAL amount of time participated).
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            0 Credits = 15-minutes
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            1 Credit = 30-45 minutes
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            2 Credits = 60-75 minutes
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            3 Credits = 90-105 minutes
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            4 Credits = 120-minutes
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            • If your participation is cancelled or terminated by the
            Researcher:
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            The Researcher reserves the right to cancel your session OR
            terminate your participation under the following conditions:
            Self-imposed distractions or conditions including but not limited
            to: Any attention to electronic devices including talking, texting,
            listening, or viewing; Falling asleep; Engaging in any activity that
            repeatedly takes attention away from the task; Any observable or
            self-reported condition that is alcohol/drug related or the result
            of Illness that prevents you from doing your best.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            NOTE: The condition(s) and the amount of time participated before
            and up to the time of termination may result in reduced or withheld
            compensation or you may be asked to reschedule without obligation to
            do so.
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            WHAT ARE THE BENEFITS OF THIS STUDY TO YOU AND TO THE PUBLIC IN
            GENERAL?{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • You will be involved in and become familiar with the research
            processes and scientific procedures used to explore and investigate
            human behavior and, in this case, working memory and/or language.
            Not only may you derive some personal satisfaction regarding your
            contribution, but you may also learn useful and effective memory
            strategies and techniques that can be applied in other settings.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Although the collected data is not used to examine individual
            memory capacity differences, your data, when combined with the data
            of other participants, can help us understand how people learn,
            remember, retain, retrieve, recover, recall, utilize, and organize
            information and under what conditions memory is enhanced or
            diminished. The results can expand our current understanding,
            contribute to the development of additional research, and assist in
            the distribution and delivery of informational resources across
            fields of discipline, such as education, health, linguistics, and
            child development so that findings can be materialized into
            practical application that benefits all.{' '}
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            WHO DO YOU CONTACT IF YOU HAVE QUESTIONS, CONCERNS OR COMPLAINTS?{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • Hamid Nourbakhshi, lead researcher, via email at
            hnth5@missouri.edu OR the Working Memory Lab Coordinator, Bret
            Glass, on behalf of Nelson Cowan, Ph.D., Principal Investigator and
            Project Director, via email at glassb@missouri.edu (preferred
            method) or via phone at 573-882-7417.
          </Typography>
          <Typography variant="body2" align="left" paddingTop={1}>
            • If you have any questions about your rights as a research
            participant, please contact the University of Missouri Institutional
            Review Board (IRB) at 573- 882-3181 or muresearchirb@missouri.edu.
            The IRB is a group of people who review research studies to make
            sure the rights and welfare of participants are protected.{' '}
          </Typography>
          <Typography variant="subtitle1" align="left" paddingTop={3}>
            STATEMENT OF CONSENT:{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={3}>
            By reviewing this consent, you are acknowledging your intent to
            appear and participate in an in-lab/in-person research study; that
            you have been provided with the opportunity and the means to ask
            questions and obtain information prior to participating; and that
            you are aware of your right to decline participation by simply
            cancelling your appointment or deciding not to participate at any
            time.{' '}
          </Typography>
          <Typography variant="body2" align="left" paddingTop={3}>
            Please be advised that failure to appear for your onsite session
            without notifying the researcher in advance or before the
            cancellation deadline OR failing to notify the Researcher within a
            reasonable amount of time AFTER your absence may result in an
            Unexcused Absence.
          </Typography>
        </Box>
      </Grid>
    </Card>
  )
}

export default ConsentText2
