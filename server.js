var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/dist/js/index.js', function (req, res) {
    res.sendFile(__dirname + '/dist/js/index.js')
  })

  app.get('/index.map', function (req, res) {
    res.sendFile(__dirname + '/dist/js/index.map')
  })

app.listen(3000, function () {
  console.log('App running on port 3000!')
})
