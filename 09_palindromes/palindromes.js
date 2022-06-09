const palindromes = function (inputString) {
  //split into a b
  //reverse b
  // check character by character

  inputString = inputString.toUpperCase();
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let stripped = inputString.replace(regex, '');
  stripped = stripped.replace(/ /g, '');
  
  let halfA = stripped.slice(0, inputString.length/2);
  let halfB = stripped.slice(inputString.length/2, inputString.length);
  let charArray = halfB.split('');
  let result = '';
  charArray.reverse();
  for(let char of charArray) {
    result += char;
  }
  halfB = result;
  
  if (halfA.length != halfB.length) {
    halfB = halfB.slice(0, halfB.length-1); // trim the "middle" character of the palindrome 
  }
  
  let i = 0;
  while ( i <= halfB.length-1) {
    if (halfA[i] != halfB[i]) {
      return false;
    }
    i++
  }
  return true;
  

  
};



// Do not edit below this line
module.exports = palindromes;
