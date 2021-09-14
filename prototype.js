// __proto__ es6
// Object.getPrototypeOf()

function Cat(name, color) {
  this.name = name
  this.color = color

}

Cat.prototype.voice = function() { 
  console.log(`Cat ${this.name} says  myau-u`)
}

const cat = new Cat('Kot', 'white')
console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor)
cat.voice()

Cat.prototype.tail = 23 
console.log(cat.tail)
// ===

function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Erjigit'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('skin'))


// Object.create()
const proto = {year: 2021}
const myYear = Object.create(proto)

console.log(myYear.year)


proto.year = 2200
console.log(myYear.year)

console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)


