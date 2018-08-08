export function makeFirstLetterUpperCase (word) {
  if (word) {
    return (word[0].toUpperCase() + word.slice(1).toLowerCase())
  }
  return word
}
