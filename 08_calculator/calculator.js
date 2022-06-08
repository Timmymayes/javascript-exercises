const add = function(operandOne, operandTwo) {
  let sum = operandOne + operandTwo;
  if (typeof(sum) != 'number') {
    return 'Error';
  }
  return sum;
};

const subtract = function(operandOne, operandTwo) {
  let diff = operandOne - operandTwo;
  if (typeof(diff) != 'number') {
    return 'ERROR';
  }
  return diff;
};

const sum = function(numsToSum) {
  let result = 0;
  
  for(let num of numsToSum) {
    result += num;
  }
  return  result;
	
};

const multiply = function(operands) {
  let result = 1;
  for(let operand of operands) {
      result *= operand;
  }
  return result;

};

const power = function(baseNum, powerNum) {
  // 3^3 = 27
  let result = baseNum;
  let i = powerNum;
  while ( i > 1 ) {
    result *= baseNum;
    i--;
  }
  return result;


};

const factorial = function(numToFactorial) {
  // 5! = 5 * 4 * * 2 * 1;
  let i = numToFactorial;
  let result = 1;
  while ( i > 0) {
    result *= i;
    i--;
  }
  return result;



	
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
