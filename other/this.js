
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
myFunction4.call(obj4, param1, param2)
myFunction4.apply(obj4, [param1, param2])