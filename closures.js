function sayHelloTo(name) {
  const message = 'Hello ' + name
  return function() {
    console.log(message)
  }
}

const helloToElena = sayHelloTo('Elena')
const helloToigor = sayHelloTo('Igor')
console.log(helloToElena)
helloToElena()
helloToigor()