// a 97
// z 122
// A 65
// Z 90

const LOWERCASE_LEFT_BOUND = 97;
const LOWERCASE_RIGHT_BOUND = 122;
const UPPERCASE_LEFT_BOUND = 65;
const UPPERCASE_RIGHT_BOUND = 90;



const caesar = function(toShift, shiftAmount) {
  let result = '';
  let i = 0

  if (shiftAmount > 26) {
    shiftAmount = shiftAmount % 26;
  }

  
  while (i < toShift.length) {
    let startCharCode = toShift.charCodeAt(i);
    let shiftedCharCode = (startCharCode+shiftAmount)

    if (startCharCode >= UPPERCASE_LEFT_BOUND && startCharCode <= UPPERCASE_RIGHT_BOUND) {
      if ( shiftedCharCode < UPPERCASE_LEFT_BOUND ) {
        shiftedCharCode = (UPPERCASE_RIGHT_BOUND - (UPPERCASE_LEFT_BOUND - shiftedCharCode -1));
      } else if (shiftedCharCode > UPPERCASE_RIGHT_BOUND) {
        shiftedCharCode = (UPPERCASE_LEFT_BOUND + (shiftedCharCode - UPPERCASE_RIGHT_BOUND -1));
      }
    } else if (startCharCode >= LOWERCASE_LEFT_BOUND && startCharCode <= LOWERCASE_RIGHT_BOUND) {
      if (shiftedCharCode < LOWERCASE_LEFT_BOUND) {
        shiftedCharCode = (LOWERCASE_RIGHT_BOUND - (LOWERCASE_LEFT_BOUND - shiftedCharCode -1) );
      } else if (shiftedCharCode > LOWERCASE_RIGHT_BOUND) {
        shiftedCharCode = (LOWERCASE_LEFT_BOUND + (shiftedCharCode - LOWERCASE_RIGHT_BOUND -1));
      }
      
    } else {
      shiftedCharCode = startCharCode;
    }

    
    
    

    result += String.fromCharCode(shiftedCharCode);
  
    i++;
  }
  return result;

}










// Do not edit below this line
module.exports = caesar;
