const express = require('express');
const path = require('path');
const app = express();

const  PORT = 3000; //

const createPath = (page) => path.resolve(__dirname, `${page}.html`)

app.get('/', (req, res) => {
  res.sendFile(createPath('index'))
})

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'))
})
app.get('/about-us', (req, res) => {
  res.redirect('/contacts')
})

app.use((req,res) => {
  res
    .status(404)
    .sendFile(createPath('error'))
})
app.listen(PORT, (err) => { 
  err ? console.log(err) : console.log('Listening on port ', PORT );
})