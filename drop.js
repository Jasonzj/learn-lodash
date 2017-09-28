const drop = (arr, n = 1) => (
  Array.isArray(arr)
    ? arr.slice(n < 0 ? 0 : n, arr.length) 
    : []
)