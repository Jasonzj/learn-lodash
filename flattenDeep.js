const flattenDeep = arr => {
  if (!Array.isArray(arr)) {
    return []
  }

  const result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      [].push.apply(result, flattenDeep(item))
      // result.push(...flattenDeep(item))
    } else {
      result.push(item)
    }
  })
  return result
}