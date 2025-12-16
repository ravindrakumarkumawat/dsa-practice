Array.prototype.customReduce = function (cb, initialValue) {
    const arr = this;
    const len = arr.length;

    // Case: empty array + no initial value
    if (len === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue, find the first NON-HOLE element
    if (accumulator === undefined) {
        while (startIndex < len && !(startIndex in arr)) {
            startIndex++;
        }
        if (startIndex >= len) {
            throw new TypeError("Reduce of empty (no elements) array with no initial value");
        }
        accumulator = arr[startIndex];
        startIndex++;
    }

    // Loop normally but skip holes
    for (let i = startIndex; i < len; i++) {
        if (i in arr) {
            accumulator = cb(accumulator, arr[i], i, arr);
        }
    }

    return accumulator;
};
