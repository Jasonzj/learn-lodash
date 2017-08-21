const findIndex = (arr, predicate) => {
    let result
    let func

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

    for (let i = 0, l = arr.length; i < l; i++) {
        if (func(arr[i])) {
            return result = i
        }
    }

    return result
}