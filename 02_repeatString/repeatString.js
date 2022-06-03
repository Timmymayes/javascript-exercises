const repeatString = function(string, num) {
  let result = '';
  let i = num;

  if (num < 0) {
    return "ERROR";c
  }
  
  while ( i > 0 ) {
    result += string;
    i--;
  }
  return result;


};

// Do not edit below this line
module.exports = repeatString;
