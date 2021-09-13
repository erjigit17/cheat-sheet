// Immediate Invoked Function Expression 

// set timeout
const fib = [1, 1, 2, 3, 5, 8, 13]
for (var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`)
    }, 1000)
  })(i)
}

//
let result = []
for (var i = 0; i < 5; i++) {
  result.push( function() {
    console.log(i)})
}

result[2]()
result[4]()

//******
let result2 = []
for (var i = 0; i < 5; i++) {
  (function(){
    var j = i
    result2.push( function() {
      console.log(j)})
  })()
}

result2[2]()
result2[4]()

