const flattenDeep = arr => {
  const result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      [].push.apply(result, flattenDeep(item))
    } else {
      result.push(item)
    }
  })
  return result
}