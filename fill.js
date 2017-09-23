const fill = (arr, value, start = 0, end = arr.length) => {
  for (let i = start, l = end; i < l; i++) {
    arr[i] = value
  }
  return arr
}