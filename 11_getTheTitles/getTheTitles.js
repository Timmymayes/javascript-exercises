const getTheTitles = function(catalog) {
  let titles = [];
  for(const book in catalog) {
    titles.push(catalog[book].title);
  }
  return titles;
  
 
};

// Do not edit below this line
module.exports = getTheTitles;
