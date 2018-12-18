var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/dist/index.js', function (req, res) {
    res.sendFile(__dirname + '/dist/index.js')
  })

  app.get('/index.map', function (req, res) {
    res.sendFile(__dirname + '/dist/index.map')
  })

app.listen(3000, function () {
  console.log('App running on port 3000!')
})
