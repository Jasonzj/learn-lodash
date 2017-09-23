const dropRightWhile = (arr, predicate) => {
  const result = []
  let func = null

  if (typeof predicate !== 'function') {
    func = (o) => {
      for (let k in predicate) {
        if (predicate instanceof Array) {
          return o[predicate[k]] == predicate[1]
        }
        if (typeof predicate === 'string') {
          return false
        }
        return o[k] === predicate[k]
      }
    }
  } else {
    func = predicate
  }
  
  arr.forEach((item, i) => {
    const diff = func.call(null, item, i, arr)
    
    if (!diff) result.push(item)
  })

  return result
}