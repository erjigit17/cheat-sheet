const fs = require('fs');

fs.readFile('./nodejs/test.txt', 'utf8', (err, data) => {
  
  fs.mkdir('./nodejs/text_files', () => {
    
    fs.writeFile('./nodejs/text_files/test.txt', `${data} \nNew text`, (err) => { err ? console.log(err) : null})
  })

  console.log(data)
})

console.log('========== end ===========')



setTimeout(()=>{
  if (fs.existsSync('./nodejs/text_files/test.txt')) {
    fs.unlink('./nodejs/text_files/test.txt', () => {})
  }
}, 4000)

setTimeout(()=>{
  if (fs.existsSync('./nodejs/text_files')){
    fs.rmdir('./nodejs/text_files', () => {})
  }
}, 6000)