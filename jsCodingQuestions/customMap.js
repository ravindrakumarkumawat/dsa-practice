Array.prototype.customMap = function (cb, thisArg) {
    if (typeof cb !== "function") {
        throw new TypeError(cb + " is not a function");
    }

    const arr = this;
    const len = arr.length;
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
        if (i in arr) {
            // Only map on existing elements
            result[i] = cb.call(thisArg, arr[i], i, arr);
        }
        // If it's a hole, we leave result[i] as a hole
    }

    return result;
};
