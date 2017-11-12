const express = require('express')
const app = express()
var reload = require('reload')
reload(app);


app.get('/', (req, res) => res.sendfile('index.html'))
app.get('/bundle.js', (req, res) => res.sendfile('bundle.js'))


app.listen(3030, () => console.log('Example app listening on port 3030!'))