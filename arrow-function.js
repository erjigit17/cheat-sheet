function sum(a, b) {
  return a + b
}
const sum2 = (a, b) => a + b

function isPositive(number) {
  return number >= 0
}
const isPositive2 = number => number >= 0 // single arsg without ()

function randoomNumber() {
  return Math.random
}
const randoomNumber2 = () => Math.random

document.addEventListener('click', function() {
  console.log('Click')
})
document.addEventListener('click', () => console.log('Click'))

(() => {null})()

// => you cant use conxs x = new ...
// => no arguments obj
// => cant use bind call apply

// Expressions
let f = function() { // unname function in f var
  console.log('f')
}
f()

let fNamed = function test() { // unname function in f var
  console.log('named func')
  test()
}
fNamed()
test() // not work