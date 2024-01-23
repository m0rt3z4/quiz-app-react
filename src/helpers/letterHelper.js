const hOnLetters = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4],
  [2, 1],
  [2, 3],
]
const iOnLetters = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [3, 2],
  [4, 1],
  [4, 2],
  [4, 3],
]

/**
 * Creates a new Response from user submission.
 * @param {String} letter - ['H', 'I'].
 * @param {Boolean} onLetter - return on letter coordinances?.
 * @param {Number} n - number of points to pick.
 * @param {Array} exclude - exclude previesly chosen points.
 * @returns {Promise<Response>}
 */
export const pickElement = (letter, onLetter, n, exclude = []) => {
  let temp =
    letter === 'H'
      ? onLetter
        ? hOnLetters
        : iOnLetters
      : onLetter
      ? iOnLetters
      : hOnLetters

  let arr = [...temp]
  if (!!exclude) {
    exclude.forEach((exc) => arr.splice(arr.indexOf(exc), 1))
  }
  return pickRandomFromArray(arr, n)
}

const pickRandomFromArray = (arr, n) => {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len)
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available')
  while (n--) {
    let x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

const directions = [0, 1, 2, 3, 4, 5, 6, 7]
export const pickRandomDirection = (n, exclude = []) => {
  let arr = [...directions]
  if (!!exclude) {
    exclude.forEach((exc) => arr.splice(arr.indexOf(exc), 1))
  }
  return pickRandomFromArray(arr, n)
}

export const pickSurprizeLocation = () => {
  return pickRandomFromArray([...iOnLetters, ...hOnLetters], 1)[0]
}

export const pickRandomStimulus = () => {
  const location = pickRandomFromArray([...iOnLetters, ...hOnLetters], 1)[0]
  const direction = pickRandomDirection(1)[0]
  return { i: location[0], j: location[1], iconType: `STIMULUS_${direction}` }
}

export const pickRandomTrialConfig = () => {
  const arr = ['HL', 'HD', 'ID', 'IL']
  const rnd = arr[Math.floor(Math.random() * arr.length)]
  console.log(rnd)
  return { letter: rnd[0], background: rnd[1] }
}
