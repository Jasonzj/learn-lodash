const flattenDepth = (arr, depth) => {
  if (!Array.isArray(arr)) {
    return []
  }

  let result = []
  const len = arr.length

  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (Array.isArray(item)) {
      !depth
        ? result.push(item)
        : result.push(...flattenDepth(item, depth - 1))
    } else {
      result.push(item)
    }
  }

  return result
}