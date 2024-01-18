import { trim } from 'radash'

export function matchRoute(a = '', b = '', exact = false) {
  a = trim(a, '/')
  b = trim(b, '/')

  const urlA = new URL(a, 'https://unkown.xyz')
  const urlB = new URL(a, 'https://unkown.xyz')

  const pathnameA = urlA.pathname.split('/')
  const pathnameB = urlB.pathname.split('/')

  const isMatch = pathnameA.every((partA, index) => {
    const partB = pathnameB.at(index)
    if (!partB) return false
    if (partA === partB) return true
    if (partA.indexOf('[') === -1 || partB.indexOf(']') === -1) return false
    return true
  })

  if (!exact) {
    return isMatch
  }

  return isMatch && pathnameA.length === pathnameB.length
}
