First, set up your react application using  [Rob Hitt's article](https://medium.com/@robhitt/react-from-scratch-575d1e570b85)

Rob’s webpack config file didn’t work on my Windows machine and here’s the fix:
```javascript 
output: {
   path: __dirname + "/",
   filename: 'bundle.js'
}
```

Rob’s post uses webpack-dev-server as an HTTP server, but we want to user our own custom express server. Here’s how you do it.
Install express
```
npm install --save express
```

Put this as your server.js file

```javascript
const express = require('express')
const app = express()
app.get('/', (req, res) => res.sendfile('index.html'))
app.get('/bundle.js', (req, res) => res.sendfile('bundle.js'))
app.listen(3030, () => console.log('Listening on port 3030!'))
```

Start webpack in watch mode
```
node_modules/.bin/webpack --watch
```

Run your server
```
node server.js
```
And voila! You now have a custom backend with your react app.
Let’s see how we can make your development life easier. Right now, when you change the code, the change is not automatically updated in the browser. Bummer.
To fix this, install the reload npm package
```
npm install --save reload
```
And modify your server.js file
```javascript
const express = require('express')
const app = express()
var reload = require('reload')
reload(app);
app.get('/', (req, res) => res.sendfile('index.html'))
app.get('/bundle.js', (req, res) => res.sendfile('bundle.js'))
app.listen(3030, () => console.log('Listening on port 3030!'))
```

Start the reload command

```./node_modules/.bin/reload server.js```

This is great for development, but what if you want to reload automatically on your server? Just use nodemon instead of reload 

nodemon server.js