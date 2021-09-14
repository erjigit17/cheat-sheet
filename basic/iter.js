'use strict'

const hash = {
  first: 7,
  second: 10,
  third: 1,
  fourth: 5,
}

hash.fifth = 2

for (const key in hash) {
  const value = hash[key]
  console.log(
    key, '\t', typeof key, '\t',
    value, '\t', typeof value 
  )
}

const numbers = [7, 10,1, 5, 2]
numbers[5] = 9
numbers.field2 = 'Value2'
numbers[-10] = 'Value3'

for (const i in numbers) {
  const value = numbers[i]
  console.log(i, '\t', typeof i, '\t', value, '\t', typeof value )
}
console.log('\n_________________for of_________________\n')
for (const value of numbers) {
  console.log(value, '\t', typeof value )
}


// break
console.log('break')
const flag = false

label1: {
  console.log(1)
  label2: {
    console.log(2)
    break label1
    console.log(3)
  }
  console.log(4)
}
console.log(5)

// continue 


let i = 0
while (i < 10) {
  i++
  console.log('Hello')
  if (i > 5) continue
    console.log('World')
}

// forEach
{
  console.log('forEach')
  const numbers = [7, 10,1, 5, 2]
  numbers.forEach((item, i, arr) => {
    console.log(i, arr, item)
  })
}


// map
const log = (s, i) => {
  console.log(i, s)
  return s
}

const f1 = x => x * 2
const f2 = x => ++x

const compose = (...funcs) => x => funcs.reduce ((v, f) => f(v), x)
const f3 = compose(f1, f2)

const res1 = [7, 10, 1, 5, 2]
  .filter(x => x > 4)
  .map(f3)
  .reduce((acc, val) => acc + val)

console.log(res1)
console.log()
// process.exit(0)

// [7, 10, 1, 5, 2]
//   .map(log)
//   .map((x) => x * 2)
//   .map(log)
//   .map((x) => ++x)
//   .map(log)


const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

const max = (a, b) => (a > b ? a : b);

const res = matrix
  .map((row) => row.reduce(max))
  .reduce((acc, rowMax) => acc + rowMax);

console.log(res);