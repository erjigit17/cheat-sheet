function outer() {
  // область видимости функции outer()
  let v = 'Я из области видимости функции outer()!'

  function inner() {
      // область видимости функции inner()
      console.log(v) // 'Я из области видимости функции outer()!'
  }

  return inner
}

const f = outer()
f()

// Лексическое окружение js
