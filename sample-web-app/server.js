const express = require('express');

const app = express();

const  PORT = 3000; //


app.get('/', (req, res) => {
  res.send('<H1>Hello</H1>')
})








app.listen(PORT, (err) => { 
  err ? console.log(err) : console.log('Listening on port ', PORT );
})