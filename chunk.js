const chunk = (array, size = 0) => {
  const len = array == null ? 0 : array.length

  if (!len || size === 0) {
    return []
  }

  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(len / size))

  while (index < len) {
    result[resIndex++] = slice(array, index, index += size)
  }

  return result
}