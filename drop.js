const drop = (array, n = 1) => {    
  const length = array == null ? 0 : array.length
  return length 
    ? array.slice(n < 0 ? 0 : n, length) 
    : []
}