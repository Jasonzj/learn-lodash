const join = (arr, val) => {
  let result = ''
  arr.forEach(item => {
    result += `${item}${val}`
  })
  return result
}