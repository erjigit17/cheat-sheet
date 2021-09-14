const {userName: user, sayHi} = require('./2-module-require')

console.log(sayHi(user))

const name = "Tommy"
console.log(sayHi(name))