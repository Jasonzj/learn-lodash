const concat = function(array) {
  const result = array == null ? [] : Array.from(array)

  Array.prototype.slice.call(arguments, 1).forEach(arg => {
    if (arg instanceof Array) {
      arg.forEach(a => {
        result.push(a)
      })
      return 
    } 
    result.push(arg)
  })

  return result
}

