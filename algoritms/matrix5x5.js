// generate matrix of random numbers

let arr5x5 = Array.from({ length: 5 }, () => {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
})

console.log(arr5x5)
let flagSuccess = false
// find
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let hit = 0
    let curr = arr5x5[i][j] // current number of cell
    let c = i - 1, r = j - 1 // c- colum r - row of 3x3 matrix

    if (c >= 0 && r >= 0 && curr === arr5x5[c][r]) { hit++ };
    c = i - 1, r = j
    if (c >= 0 && curr === arr5x5[c][r]) { hit++ };
    c = i - 1, r = j + 1
    if (c >= 0 && r < 5 && curr === arr5x5[c][r]) { hit++ };
    c = i, r = j - 1
    if (r >= 0 && curr === arr5x5[c][r]) { hit++ };
    c = i, r = j + 1
    if (r < 5 && curr === arr5x5[c][r]) { hit++ };
    c = i + 1, r = j - 1
    if (c < 5 && r >= 0 && curr === arr5x5[c][r]) { hit++ };
    c = i + 1, r = j
    if (c < 5 && curr === arr5x5[c][r]) { hit++ };
    c = i + 1, r = j + 1
    if (c < 5 && r < 5 && curr === arr5x5[c][r]) { hit++ };

    if (hit >= 3) {
      console.log('Find, centre index', i, j, ',', 'cluster number:', curr)
      return (flagSuccess = true)
    }
  }
}

!flagSuccess ? console.log('Not found(') : null
