// Define the on-letter arrays
const hOnLetters2 = [5, 10, 15, 9, 14, 19, 11, 13]
const iOnLetters2 = [1, 2, 3, 7, 17, 21, 22, 23]

const extraSurprizeOnLetter = [1, 4, 20, 24]
const extraSurprizeOffLetter = [6, 8, 16, 18]

export function pickExtraSurprize(isOnLetter) {
  const index = Math.floor(Math.random() * 4)
  return isOnLetter
    ? extraSurprizeOnLetter[index]
    : extraSurprizeOffLetter[index]
}

function getRandomElements(array, numElements) {
  let result = []
  let clonedArray = [...array] // Clone the array to avoid modifying the original array
  while (result.length < numElements && clonedArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length)
    result.push(clonedArray.splice(randomIndex, 1)[0])
  }
  return result
}

export function chooseGridElements(letter, numOnLetters, numOffLetters) {
  // Determine the appropriate on-letter array based on the input letter
  let onLettersArray
  let offLettersArray
  if (letter === 'H') {
    onLettersArray = hOnLetters2
    offLettersArray = iOnLetters2
  } else if (letter === 'I') {
    onLettersArray = iOnLetters2
    offLettersArray = hOnLetters2
  } else {
    throw new Error("Invalid letter input. Must be 'H' or 'I'.")
  }

  //   // Create an array of all grid indices (0 to 24)
  //   const allGridIndices = Array.from({ length: 25 }, (_, i) => i)

  let chosenOnLetters = getRandomElements(onLettersArray, numOnLetters)
  let chosenOffLetters = getRandomElements(offLettersArray, numOffLetters)

  return {
    onLetters: chosenOnLetters,
    offLetters: chosenOffLetters,
  }
}
