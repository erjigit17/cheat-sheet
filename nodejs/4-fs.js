const fs = require('fs');

fs.readFile('./nodejs/test.txt', 'utf8', (err, data) => {
  console.log(data)
})
