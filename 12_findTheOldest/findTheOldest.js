const findTheOldest = function(people) {
  let currentOldest = [0, 0];
  let date = new Date();
  let currentYear = date.getFullYear();
  
  for (const person in people) {
    let age = 0;
    if (people.[person].yearOfDeath === undefined) {
      age = currentYear - people[person].yearOfBirth;
    } else {
      age = people[person].yearOfDeath - people[person].yearOfBirth;
    }
    if (age > currentOldest[1]) {
      currentOldest[0] = person;
      currentOldest[1] = age;
    } 
    
    
  }
  return people[currentOldest[0]];
};



// Do not edit below this line
module.exports = findTheOldest;
