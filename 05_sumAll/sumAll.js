const sumAll = function(int1, int2) {
    let smallerInt = 0;
    let biggerInt = 0;
    let sum = 0;
    if (typeof(int1) !== "number" || typeof(int2) !== "number" ||
        int1 < 0 || int2 < 0) {
        return "ERROR";
    }
    if (int1 < int2) {
        smallerInt = int1;
        biggerInt = int2
    } else {smallerInt = int2;
            biggerInt = int1;}
    for (let i = smallerInt; i <= biggerInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
