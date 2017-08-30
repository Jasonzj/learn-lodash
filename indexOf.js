const indexOf = (arr, val, fromIndex = 0) => {
    let i = 0
    let len = arr == null ? 0 : arr.length

    if (!len) {
        return -1
    }

    if(fromIndex < 0) {
        i = Math.max(len + fromIndex, 0)
    }

    for (; i < len; i++) {
        if (arr[i] === val) {
            return i
        }
    }

    return -1
}