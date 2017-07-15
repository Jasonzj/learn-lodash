// return array.filter(item => item)
const compact = (array) => {
    let resIndex = 0
    const result = []

    if (array == null) {
        return result
    }

    for (const value of array) {
        if (value) result[resIndex++] = value
    }

    return result
}