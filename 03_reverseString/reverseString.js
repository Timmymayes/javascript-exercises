const reverseString = function(string) {
  let charArray = Array.from(string);
  charArray.reverse();
  return charArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
