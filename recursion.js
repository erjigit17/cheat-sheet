'use strict'
 
// how deep recursion
const getMaxCallStackSize = i => {
  try {
    return getMaxCallStackSize(++i)
  } catch (e) {
    return i
  }
}
// console.log(getMaxCallStackSize(0))

// indirect
function g(x) {
  return f(x)
}

function f(x) {
  return g(x)
}

// pow 
const pow = (base, power) => {
  if (power === 1) return base
  else return pow(base, power -1) * base
}

// console.log(pow(2,3))

// factorial 
const factorial = n => {
  if (n === 0) return 1
  else return n * factorial(n - 1)
}
// console.log(factorial(170))

 // fibonacci
 const fibonacci = _ => (_ <= 2 ? 1 : fibonacci(_-1) + fibonacci(_-2))
//  console.log(fibonacci(41))

const fibonacciLoop = _ => {
  let n1 = 0, n2 = 1, nextTerm;
  for (let i = 1; i <= _; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
  return n2
}

// console.log(fibonacciLoop(40))

// reduce 
const reduce = (fn, acc, [cur, ...rest]) => (
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
)

const res = reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9])
// console.log({ res })

// tail optimizatuon
const add = (_, acc = 0) => {
  if (_ === 0) return acc
  return add(_ - 1, acc + _)
}

const tail = (_, acc = 0) => {
  while (1) {
    if (_ === 0) return acc
    acc += _
    _ -= 1
  }
} 
console.log(tail(170))

