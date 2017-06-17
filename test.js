const fibRange = require('./fibonacci-range.js'), 
      test = require('tape'), 
      _ = require('underscore')

test((t) => {
  //Static 13 slot fibbonanci range: 
  var staticFibRange = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

  //Now make one automatically: 
  var autoFibRange = fibRange(13)

  t.ok(_.isEqual(staticFibRange, autoFibRange), 'Auto (fibonacci-range.js) fibonacci range is equal to static (manually entered) fibbonanci range.')

  //Make an arbitrarily large fibonacci range: 
  var largeFibRange = fibRange(200)

  t.ok(largeFibRange[198] + largeFibRange[197] == largeFibRange[199], 'The second and third last values in an arbitrarily large fibonacci range equal that of the very last value.')

  t.end()
})





