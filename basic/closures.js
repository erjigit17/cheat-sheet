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



function createFrameworkManager() {
  const fw = ['Angular', 'React']

  return {
    print: function() {
      console.log(fw.join(' '))
    },
    add: function(framework){
      fw.push(framework)
    }  
  }
}

const manager = createFrameworkManager()
manager.print()
manager.add('Vue')
manager.print()


// set timeout
const fib = [1, 1, 2, 3, 5, 8, 13]
for (var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`)
    }, 1000)
  })(i)
}