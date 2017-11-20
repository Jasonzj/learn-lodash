const pullAll = (array, values) => {
    values.forEach(item => {
        let index = 0
        while ((index = array.indexOf(item)) > -1) {
            array.splice(index, 1)
        }
    })
}