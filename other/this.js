
function myFunction() {
  console.log(this)
}

myFunction() //global or window // on 'use strict' mode error

//================================================================
function myFunction1() {
  console.log(this)
}

const obj = {
  someKey: 1,
  myFunction1,
}

obj.myFunction1()//{ someKey: 1, myFunction1: [Function: myFunction1] }

//================================================================

const obj2 = {
  someKey: 1, 
  outer: function() {
    function inner() {
      console.log('obj2: ', this)
    }
    inner()
  }
}

obj2.outer() // global

//================================================================
console.log('obj3: ')
function myFunction3() {
  console.log(this) 
}

const obj3 = {
  someKey: 1, 
  myFunction3: myFunction3
}

const newFunction = obj3.myFunction3
newFunction()  // global

//================================================================
console.log('obj4: ')
function myFunction4() {
  console.log(this)
}

const obj4 = {
  someKey: 1,
}

const param1 = 1, param2 = 2;
myFunction4.call(obj4, param1, param2) //{ someKey: 1 }
myFunction4.call(obj4, ...[param1, param2]) //{ someKey: 1 }
myFunction4.apply(obj4, [param1, param2]) //{ someKey: 1 }
myFunction4.bind(obj4, param1, param2) ()
//================================================================
console.log('obj5: ')
function myFunction5() {
  this.someKey = 2
  this.inner = function() {
    console.log(this)
  }
}

const obj5 = new myFunction5()
obj5.inner() //myFunction5 { someKey: 2, inner: [Function (anonymous)] }
//==============================
console.log('obj6: ')
function myFunction6() {
  return {
    someKey: 3
  }
}
const obj6 = new myFunction6()
console.log(obj6)//{ someKey: 3 }
//==============================
console.log('obj7: ')
function outer() {
  let inner = () => {
    console.log(this)
  }
  inner()
}

const objA = {
  someKey: 5,
  outer: outer
}

const objB = {
  someKey: 6
}

outer()
objA.outer()//{ someKey: 5, outer: [Function: outer] }
outer.call(objB) //{ someKey: 6 }
//==============================
console.log('obj8: ')
const myFunction8 = () => {
  console.log(this)
}

const objC = {
  myFunction8: myFunction,
  inner: () => {
    console.log(this)
  }
}
const objD = {}

myFunction8()
objC.myFunction8()
objC.inner()
myFunction8.call(objC)
// const objE = new myFunction8()