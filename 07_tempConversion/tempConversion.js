const ftoc = function(tempF) {
  if (typeof(tempF) != 'number') {
    return 'ERROR';
  }
  let num = trim((tempF - 32) * 5/9, 1);
  return num;
};

const ctof = function(tempC) {
  if (typeof(tempC) != 'number'){
    return 'ERROR';
  }
  let num = trim(tempC * 9/5 + 32, 1);
  return num;
};

function trim(numToTrim, maxDecimals) {
  if ( Number.isInteger(numToTrim)) {
    return numToTrim;
  }
  return parseFloat(numToTrim.toFixed(maxDecimals));
}



//	[°F] = [°C] × 9⁄5 + 32
//      [°C] = ([°F] − 32) × 5⁄9


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
