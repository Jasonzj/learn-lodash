const difference = (array, value) => {
    const result = []
    const values = value instanceof Array ? value : [value] 

    array.forEach((item) => {
        const diff = values.indexOf(item)
        if (diff === -1) result.push(item)
    })

    return result
}