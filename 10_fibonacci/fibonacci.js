const fibonacci = function(targetInSequence) {
  //A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
  if (targetInSequence < 0)  {
    return 'OOPS'
  }
  targetInSequence = parseInt(targetInSequence);
  let index = 0;
  let currentValue = 0;
  let nextValue = 1;
  let nextNextValue = 0;

  do {
    nextNextValue = currentValue + nextValue;
    currentValue = nextValue;
    nextValue = nextNextValue;    
    index++;
  } while ( index < targetInSequence );

  return currentValue;
  
  

  
};

// Do not edit below this line
module.exports = fibonacci;
