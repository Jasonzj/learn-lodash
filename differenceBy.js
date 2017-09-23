const differenceBy = (arr, ...values) => {
  const result = []
  const iteratee = values.pop()

  values = []
    .concat(...values)
    .map(val => Math.floor(val))
  
  arr.forEach((item, i) => {
    const _item = iteratee.call(null, item, i, arr)
    const diff = values.includes(_item)

    if (!diff) result.push(item)
  })

  return result
}
