const add = function(int1, int2) {
	return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(numberArr) {
	return numberArr.reduce((acc, num) => 
    acc + num
  , 0)
};

const multiply = function(numArr) {
  return numArr.reduce((acc, num) => 
    acc * num
  , 1)
};

const power = function(int1, int2) {
	return int1 ** int2;
};

const factorial = function(int) {
	if (int === 0) {
    return 1;
  };
  let total = 1;
  for (let i = int; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
