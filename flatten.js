const flatten = arr => (
  Array.isArray(arr)
    ? [].concat.apply([], arr)
    : []
)