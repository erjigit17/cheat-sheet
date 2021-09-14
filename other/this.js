
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

