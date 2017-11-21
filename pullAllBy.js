const pullAllBy = (array, values, iteratee) => {
    const result = []
    let func = iteratee

    if (typeof iteratee !== 'function') {
        func = (val) => {
            if (typeof iteratee === 'string') {
                return val[iteratee]
            }
        }
    }

    const arr = []
        .concat(...array)
        .map(val => func(val))

    values.forEach((item, i) => {
        let index = 0
        const _item = func.call(null, item, i, arr)

        while ((index = arr.indexOf(_item)) > -1) {
            arr.splice(index, 1)
            array.splice(index, 1)
        }
    })
}