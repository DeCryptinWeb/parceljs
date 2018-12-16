var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/dist/index.js', function (req, res) {
    res.sendFile(__dirname + '/dist/index.js')
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
