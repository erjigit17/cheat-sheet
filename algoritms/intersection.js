const first = [1, 2, 3, 4]
const second = [3, 4, 5, 6]
// output [3, 4]

// slow 
let arr = []
function intersection(a, b) {
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
      if (a[i] === b[j]) {
        arr.push(a[i])
      }
    }
  }
  return arr
}

console.log(intersection(first, second))


//================================================================
const filteredArray = first.filter(value => second.includes(value));
console.log(filteredArray)