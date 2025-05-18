const convertToCelsius = function(deg) {
  if(Number.isNaN(deg))
    return 'ERROR';
  let res = ((deg -32) * 5 / 9);
  return Number(res.toFixed(1));
  
};


const convertToFahrenheit = function(deg) {
  if(Number.isNaN(deg))
    return 'ERROR';
  let res = ((deg * 9 / 5) + 32);
  return Number(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
