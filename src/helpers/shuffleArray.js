/**
 * Creates a new Response from user submission.
 * @param {Array} arr - array to shuffle.
 * @returns {Array}
 */
const shuffleArray = (arr = []) => {
  let temp = [...arr]
  return temp.sort((a, b) => 0.5 - Math.random())
}

export default shuffleArray
