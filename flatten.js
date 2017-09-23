const flatten = arr => {
  return Array.isArray(arr)
    ? [].concat.apply([], arr)
    : []
}