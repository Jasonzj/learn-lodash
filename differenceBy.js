const differenceBy = (arr, ...values) => {
  const result = []
  let iteratee = values.pop()
  let func = iteratee

  if (typeof iteratee !== 'function') {
    func = (val) => {
      if (typeof iteratee === 'string') {
        return val[iteratee]
      }
    }
  }

  values = []
    .concat(...values)
    .map(val => func(val))

  arr.forEach((item, i) => {
    const _item = func.call(null, item, i, arr)
    const diff = values.includes(_item)
    if (!diff) result.push(item)
  })

  return result
}