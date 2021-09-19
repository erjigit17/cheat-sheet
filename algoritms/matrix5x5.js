// generate matrix of random numbers
let arr5x5 = Array.from({ length: 5 }, () => {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
})

console.log(arr5x5)
let flagSuccess = false
// find 
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    
    let dict = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, 
                '5': 0, '6': 0, '7': 0, '8': 0, '9': 0,}

    dict[arr5x5[i][j].toString()]++
    
    let c = i - 1, r = j - 1
    if (c >= 0 && r >= 0) { dict[arr5x5[c][r].toString()]++ }
    ;(c = i - 1), (r = j)
    if (c >= 0) { dict[arr5x5[c][r].toString()]++ }
    ;(c = i - 1), (r = j + 1)
    if (c >= 0 && r < 5) { dict[arr5x5[c][r].toString()]++ }
    ;(c = i), (r = j - 1)
    if (r >= 0) { dict[arr5x5[c][r].toString()]++ }
    ;(c = i), (r = j + 1)
    if (r < 5) { dict[arr5x5[c][r].toString()]++ }
    ;(c = i + 1), (r = j - 1)
    if (c < 5 && r >= 0) { dict[arr5x5[c][r].toString()]++ }
    ;(c = i + 1), (r = j)
    if (c < 5) { dict[arr5x5[c][r].toString()]++ }
    ;(c = i + 1), (r = j + 1)
    if (c < 5 && r < 5) { dict[arr5x5[c][r].toString()]++ }

    if (Object.values(dict).some(el => el >= 4) ) {
      let clusterSize = Math.max(...Object.values(dict))
      let number = Object.keys(dict).find(key => dict[key] === clusterSize)
      console.log('Find, centre index', i, j, ',', clusterSize, 'times number:', number)
      return flagSuccess = true
    }
  }
}

!flagSuccess? console.log('Not found(') : null