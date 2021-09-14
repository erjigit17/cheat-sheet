'use strict';

console.log(global)

setTimeout(() =>{
  // console.log('Hello world')
}, 2000)

console.log(__dirname)
console.log(__filename)

// console.log(process)
// console.log(process.env)
console.log(process.argv)

console.log(`Hello, ${process.argv[2]}`)

const url = new URL('https://webdev.com/path/name#test')

console.log(url)
console.log('hostname: ', url.hostname)
console.log('href: ', url.href)
console.log('pathname: ', url.pathname)
console.log('hash: ', url.hash)