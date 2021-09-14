const http = require('http');
const PORT = 3000


const server = http.createServer((req, res) => {
  console.log('Server request')
  console.log(req.url, req.method)

  // res.setHeader('Content-Type', 'text/html')

  // res.write('<head><link rel="stylesheet" href="#"></head>')
  // res.write('<H1>Hello, world</H1>')
  // res.write('<H2>Node</H2>')
  res.setHeader('Content-Type', 'application/json')
  const data = JSON.stringify([
    { name: 'Tommy', age: 35},
    { name: 'Artur', age: 40},
  ])

  res.end(data)
}) 

server.listen(PORT, 'localhost', (err) => {
  err ? console.log(err) : console.log('listen port 3000')
})