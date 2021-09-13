// let ES6
let a = "Variable a"
let b = 'Variable b'

{
  a = 'New variable a'
  let b = 'Local variable b'
  console.log('Scope a', a)
  console.log('Scope b', b)
}
console.log('glob a', a)
console.log('glob b', b)

// const
const array = ['Javascript', 'is', 'awesome']
array.push('!')
console.log(array)

const obj = {}
obj.name = 'Erjigit'
obj.age = 33
console.log(obj)

delete obj.age
console.log(obj)



