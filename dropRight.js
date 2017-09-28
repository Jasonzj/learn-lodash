const dropRight = (arr, n = 1) => (
  Array.isArray(arr)
    ? arr.slice(0, n < 0 ? 0 : -n) 
    : []
)