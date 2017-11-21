const differenceBy = (arr, ...values) => {
  const result = []
  const iteratee = values.pop()
  const isStr = typeof iteratee === 'string'

  values = []
    .concat(...values)
    .map(val => {
      if (isStr) return val[iteratee]
      return iteratee(val)
    })

  arr.forEach((item, i) => {
    if (!isStr) {
      const _item = iteratee.call(null, item, i, arr)
    }
    const _item = item[iteratee]
    const diff = values.includes(_item)

    if (!diff) result.push(item)
  })

  return result
}