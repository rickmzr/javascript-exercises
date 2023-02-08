const palindromes = function (string) {
    let strArr = string.toLowerCase().split("");
    let filteredArr = strArr.filter(function(character) {
        return /[a-z]/.test(character);
    });
    const reversedArr = [...filteredArr].reverse();
    for (let i = 0; i < filteredArr.length; i++) {
        if (filteredArr[i] !== reversedArr[i]) {
            return false;
        };
    };
    return true;
};
// Do not edit below this line
module.exports = palindromes;
