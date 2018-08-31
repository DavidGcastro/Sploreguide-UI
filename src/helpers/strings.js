export function makeFirstLetterUpperCase (word) {
  if (word) {
    return (word[0].toUpperCase() + word.slice(1).toLowerCase())
  }
  return word
}

export function formatLocationObject (locationObject) {
  let { borough, city, country } = locationObject
  return `${borough || city}, ${country}`
}

export function formatReviewsCountText (reviewObjects) {
  let count = reviewObjects.length
  if (count === 0) return ''

  return (count > 1) ? `${count} Reviews` : '1 Review'
}
