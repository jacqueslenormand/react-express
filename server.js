const express = require('express')
const app = express()
var http = require('http')


app.get('/bundle.js', (req, res) => res.sendFile(__dirname + '/bundle.js'))

app.get('/foobar', (req, res) => res.send("HEY"))

let version = '' + Math.random()
app.get('/version', (req, res) => res.send(version))

app.get('*', (req, res) => res.sendFile(__dirname + '/index.html'))



app.set('port', process.env.PORT || 9020)

var server = http.createServer(app)


app.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  })

