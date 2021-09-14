const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000; 

const server = http.createServer((req,res) => {
  res.setHeader('Content-Type', 'text/html');

  const createPath = (page) => path.resolve(__dirname, `${page}.html`)
  
  if (req.url == '/') {
    fs.readFile('./nodejs/9-create-base-routing/index.html', (err, data) => {
      if(err) {
        console.log(err)
        res.end()
      } else {
        res.write(data)
        res.end()
      }
    })
  }


})

server.listen(PORT, 'localhost', (err) => {
  err ? console.log(err) : console.log('server listening on port: ', PORT)
})
