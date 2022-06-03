const removeFromArray = function(collection, ...toRemove) {

  toRemove.forEach(itemToIsolate => {
    while (collection.includes(itemToIsolate)) {
      collection.splice(collection.indexOf(itemToIsolate), 1);
  }
    
  })
         return collection;
};

// Do not edit below this line
module.exports = removeFromArray;
