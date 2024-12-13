
export const proccessTrialResponse = (resultsArray = []) => {
  if (!resultsArray.length) return null

  const initialValue = {
    blockSize: resultsArray.length,
    sumCorrectAnswers: 0,
    sumNoAnswer: 0,
    numSameTrials: 0,
    numDiffTrials: 0,
    numSameTrialCorrects: 0,
    numDiffTrialCorrect: 0,
    numWholeTrials: 0,
    numPartialTrials: 0,
    numWholeTrialCorrects: 0,
    numPartialTrialCorrect: 0,
    mixedTrialStats: {
      numPTrials: 0,
      numPTrialCorrects: 0,
      numITrials: 0,
      numItrialCorrects: 0,
      num4Trials: 0,
      num4TrialCorrects: 0,
      num6Trials: 0,
      num6trialCorrects: 0,
    },
  }
  const reducedArray = resultsArray.reduce((prev, curr) => {
    const { params, results } = curr
    const newValue = { ...prev }
    if (results.userAnswer === 'NO_ANSWER') {
      newValue.sumNoAnswer++
    }
    if (results.isAnswerCorrect) newValue.sumCorrectAnswers++
    //
    if (params.recallType === 'SAME') {
      newValue.numSameTrials++
      if (results.isAnswerCorrect) newValue.numSameTrialCorrects++
    }
    //
    if (params.recallType === 'DIFFERENT') {
      newValue.numDiffTrials++
      if (results.isAnswerCorrect) newValue.numDiffTrialCorrect++
    }
    //
    if (params.recognitionConfiguration === 'WHOLE') {
      newValue.numWholeTrials++
      if (results.isAnswerCorrect) newValue.numWholeTrialCorrects++
    }
    if (params.recognitionConfiguration === 'PARTIAL') {
      newValue.numPartialTrials++
      if (results.isAnswerCorrect) newValue.numPartialTrialCorrect++
    }
    if (params.inquiryCellType) {
      // if the trial is mixed
      if (params.inquiryCellType === 'P') {
        newValue.mixedTrialStats.numPTrials++
        if (results.isAnswerCorrect)
          newValue.mixedTrialStats.numPTrialCorrects++
      }
      if (params.inquiryCellType === 'I') {
        newValue.mixedTrialStats.numITrials++
        if (results.isAnswerCorrect)
          newValue.mixedTrialStats.numItrialCorrects++
      }
      if (params.setSize === 4) {
        newValue.mixedTrialStats.num4Trials++
        if (results.isAnswerCorrect)
          newValue.mixedTrialStats.num4TrialCorrects++
      }
      if (params.setSize === 6) {
        newValue.mixedTrialStats.num6Trials++
        if (results.isAnswerCorrect)
          newValue.mixedTrialStats.num6trialCorrects++
      }
    }
    return newValue
  }, initialValue)
  reducedArray.totalCorrectPercent =
    reducedArray.sumCorrectAnswers / reducedArray.blockSize
  reducedArray.noAnswerPercent =
    reducedArray.sumNoAnswer / reducedArray.blockSize
  reducedArray.totalSameCorrectPercent =
    reducedArray.numSameTrialCorrects / reducedArray.numSameTrials
  reducedArray.totalDiffCorrectPercent =
    reducedArray.numDiffTrialCorrect / reducedArray.numDiffTrials
  reducedArray.totalWholeCorrectPercent =
    reducedArray.numWholeTrialCorrects / reducedArray.numWholeTrials
  reducedArray.totalPatrialCorrectPercent =
    reducedArray.numPartialTrialCorrect / reducedArray.numPartialTrials
  reducedArray.mixedTrialStats.total4CorrectPercent =
    reducedArray.mixedTrialStats.num4TrialCorrects /
    reducedArray.mixedTrialStats.num4Trials
  reducedArray.mixedTrialStats.total6CorrectPercent =
    reducedArray.mixedTrialStats.num6trialCorrects /
    reducedArray.mixedTrialStats.num6Trials
  reducedArray.mixedTrialStats.totalPCorrectPercent =
    reducedArray.mixedTrialStats.numPTrialCorrects /
    reducedArray.mixedTrialStats.numPTrials
  reducedArray.mixedTrialStats.totalICorrectPercent =
    reducedArray.mixedTrialStats.numItrialCorrects /
    reducedArray.mixedTrialStats.numITrials

  const resultsWithStatistics = {
    blockData: resultsArray,
    statistics: reducedArray,
  }

  return resultsWithStatistics
}
