const _ = require('underscore')

module.exports = (numberOfSlots) => {
  //Make a fib sequence consisting of x numbers.... 
  //create an array of 12 slots (each slot null): 
  var fibRange = _.map( _.range(numberOfSlots), (num, index) => {
    //ensure the first three slots are 0, 1, and 1
    if(index === 0 || index == 1) return num 
    if(index === 2) return 1 
    return null
    //^ then make the rest null cause we'll fill them in during the next part...
  })

  //with our initial data structure in place, go! 
  _.each(fibRange, (item, index, list) => {
    //Skip the first three items: 
    if(index === 0 || index === 1 || index === 2) return
    //Make the new number the sum of the previous two numbers: 
    var newItem = fibRange[index - 1] + fibRange[index - 2]
    fibRange[index] = newItem
  })
  
  return fibRange
}

