const removeFromArray = function(arr, ...toRemove) {
    const newArray = [];
    for (let arrIterable = 0; arrIterable < arr.length; arrIterable++) {
        for (let paramIterable = 0; paramIterable < toRemove.length; paramIterable++) {
            if (toRemove[paramIterable] === arr[arrIterable]) {
                break;
            }
            if (paramIterable === (toRemove.length - 1)) {
                newArray.push(arr[arrIterable]);
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
