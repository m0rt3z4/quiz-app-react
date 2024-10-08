/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

// import { useTrialContext } from '../../layouts/TrialLayout/context'
import TimedStep from './TimedStep'

const OneShotRecogniton = ({
  stimuliArray,
  onFinishStep,
  isInquiryCorrect,
  feedbackTime,
}) => {
  const onUserResp = (resp) => {
    console.log(resp)

    onFinishStep(resp)
  }
  return (
    <TimedStep
      startTime={Date.now()}
      stimulus={stimuliArray}
      onFinishStep={onUserResp}
      isInquiryCorrect={isInquiryCorrect}
      feedbackTime={feedbackTime}
    />
  )
}

export default OneShotRecogniton
