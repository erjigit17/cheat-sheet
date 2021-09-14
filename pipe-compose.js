'use strict'

const campos = (...fns) => x => fns.reverse().reduce((v, f)  => f(v), x)
const pipe = (...fns) => x => fns.reduce((v, f)  => f(v), x)
// Usage

const upperFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1)
const upperCapital = (s) => s.split(' ').map(upperFirst).join(' ')
const lower = (s) => s.toLowerCase()

const s = 'Erjigit IMAMOV'
console.log(s)
console.log(`lower('${s}') = '${lower(s)}'`)
console.log(`upperCapital('${s}') = '${upperCapital(s)}'`)


{
  console.log('Use compose')
  const capitalize = campos(upperCapital, lower)
  console.log(`capitalize('${s}') = '${capitalize(s)}'`)
}

{
  console.log('Use pipe')
  const capitalize = pipe(lower, upperCapital)
  console.log(`capitalize('${s}') = '${capitalize(s)}'`)
}
