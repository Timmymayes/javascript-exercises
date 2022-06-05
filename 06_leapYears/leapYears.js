const leapYears = function(year) {
  //leap years are divisible by 4, except when divisible by 100, unless they are divisible by 400.

  if ( year % 4 === 0 && year % 100 != 0 || year % 400 === 0 ) {
    return true;
  }
  return false;
  
};

// Do not edit below this line
module.exports = leapYears;
