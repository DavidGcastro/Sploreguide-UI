export function makeFirstLetterUpperCase (word) {
  if (word) {
    return (word[0].toUpperCase() + word.slice(1).toLowerCase())
  }
  return word
}

export function formatLocationObject (locationObject) {
  let { borough, city, country } = locationObject
  return `${makeFirstLetterUpperCase(borough) || makeFirstLetterUpperCase(city)}, ${makeFirstLetterUpperCase(country)}`
}

export function formatReviewsCountText (reviewObjects) {
  let count = reviewObjects.length
  if (count === 0) return ''

  return (count > 1) ? `${count} Reviews` : '1 Review'
}

export function formatDuration (duration) {
  // Comes in minutes
  let out = ''
  let hr = Math.floor(duration / 60)
  let min = duration % 60

  if (hr !== 0) {
    out += (hr > 1) ? `${hr} hrs ` : `${hr} hr `
  }

  if (min > 0) {
    out += `${min} mins`
  }

  return out
}

export function formatSearchQueryObject (queryObject) {
  let parts = []
  if (queryObject.location) {
    parts.push(`${queryObject.location.borough || queryObject.location.city}`)
  }

  if (queryObject.activityType) {
    parts.push(`${queryObject.activityType}`)
  }

  if (queryObject.priceRangeMax) {
    parts.push(`$${queryObject.priceRangeMin} - $${queryObject.priceRangeMax}`)
  }

  return parts.join(' | ')
}
