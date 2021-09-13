const person = {
  surname: "Stark",
  knows: function (what, name) {
    console.log(`You know ${what}, ${name} ${this.surname}`)
  }
}

const john = { surname: 'Snow'}

person.knows('everything', 'Bran')
person.knows.call(john,  'nothing', 'John')
person.knows.apply(john, ['nothing', 'John'])
person.knows.call(john,  ...['nothing', 'John']) //es6
const johnBind = person.knows.bind(john, 'nothing', 'John')
johnBind()

//====

function Person(name, age) { //es5
  this.name = name
  this.age = age

  console.log(this)
}

const elena = new Person('Elena', 20)


// явный bind 
function logThis() {
  console.log(this)
}

const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()


// ======
const animal = {
  legs: 4,
  logThis: function() {
    console.log(this)
  }
}
animal.logThis()

//=====

