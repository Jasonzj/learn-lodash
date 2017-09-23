const findIndex = (arr, predicate) => {
  let func
  const len = arr == null ? 0 : arr.length

  if (!len) {
    return -1
  }

  if (typeof predicate !== 'function') {
    func = (o) => {
      for (let k in predicate) {
        if (predicate instanceof Array) {
          return o[predicate[k]] === predicate[1]
        }
        if (typeof predicate === 'string') {
          return o[predicate] === true
        }
        return o[k] === predicate[k]
      }
    }
  } else {
    func = predicate
  }

  for (let i = 0, l = len; i < l; i++) {
    if (func(arr[i])) {
      return i
    }
  }

  return -1
}