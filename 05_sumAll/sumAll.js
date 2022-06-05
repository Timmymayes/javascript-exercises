const sumAll = function(numberOne, numberTwo) {
  if (typeof(numberOne) != 'number' || typeof(numberTwo) != 'number' || numberOne < 0 || numberTwo < 0 ){
    return 'ERROR';
  }
  let sum;
  let bounds = [numberOne, numberTwo];
  bounds.sort();
  let gap = bounds[1] - bounds[0];
  sum = bounds[0]+bounds[1];
  while (gap > 1) {
    gap--; 
    sum += bounds[0]+gap;

  }
  return sum;

  
};

// Do not edit below this line
module.exports = sumAll;
