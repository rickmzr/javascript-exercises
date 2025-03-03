const convertToCelsius = function(fahrenheitTemp) {
  return +((fahrenheitTemp - 32) / (9/5)).toFixed(1);
};

const convertToFahrenheit = function(celsiusTemp) {
  return +(celsiusTemp * 9 / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
