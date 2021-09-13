// __proto__ es6
// Object.getPrototypeOf()

function Cat(name, color) {
  this.name = name
  this.color = color

}

Cat.prototype.voice = function() { 
  console.log(`Cat ${this.name} says  myau-u`)
}
Cat.prototype.tail = 23
const cat = new Cat('Kot', 'white')
console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor)
cat.voice()
console.log(cat.tail)
