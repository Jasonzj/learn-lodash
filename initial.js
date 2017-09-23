const initial = (arr) => {
  const len = arr == null ? 0 : arr.length
  return len ? arr.slice(0, -1) : []
}