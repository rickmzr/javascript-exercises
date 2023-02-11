const fibonacci = function(position) {
    position = +position;
    if (position <= 0) {
        return "OOPS";
    };
    if (position === 1) {
        return 1;
    } else if (position === 2) {
        return 1;
    };
    let fibArray = [1, 1];
    for (let i = 2; i <= position; i++) {
        fibArray.push(fibArray[i-2]+fibArray[i-1]);
    }
    return fibArray[position-1];
};

// Do not edit below this line
module.exports = fibonacci;
