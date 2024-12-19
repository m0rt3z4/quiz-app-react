const recognitionTypes = {
  CORRECT_ON_LETTER: 'CORRECT_ON_LETTER',
  INCORRECT_ON_LETTER: 'INCORRECT_ON_LETTER',
  CORRECT_OFF_LETTER: 'CORRECT_OFF_LETTER',
  INCORRECT_OFF_LETTER: 'INCORRECT_OFF_LETTER',
}

const generateCombinations = (types, length) => {
  if (length === 1) return types.map((type) => [type])
  const smallerCombos = generateCombinations(types, length - 1)
  return types.flatMap((type) => smallerCombos.map((combo) => [type, ...combo]))
}

const stimuliCombinations = generateCombinations(
  Object.values(recognitionTypes),
  4
)

export const mockArray = ['H', 'I'].flatMap((letter) =>
  stimuliCombinations.map((stimuli) => ({
    letter,
    stimuliArray: [stimuli],
  }))
)

