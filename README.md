First, set up your react application using  [Rob Hitt's article](https://medium.com/@robhitt/react-from-scratch-575d1e570b85)

Rob’s webpack config file didn’t work on my Windows machine and here’s the fix:
```javascript 
output: {
   path: __dirname + "/",
   filename: 'bundle.js'
}
```

Rob’s post uses webpack-dev-server as an HTTP server, but we want to user our own custom express server. First step: install express
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
./node_modules/.bin/webpack --watch
```

Run your server using nodemon
```
npm install -g nodemon
nodemon server.js
```
And voila! You now have a custom backend with your react app.
Let’s see how we can make your development life easier. Right now, when you change the code, the change is not automatically updated in the browser. Bummer.

Add the following code to your App.js

```javascript 
let _version = undefined;
setInterval(() => {
    fetch('/version')
    .then(d => d.json())
    .then(x => {
        if(!_version) _version = x;
        else if(_version != x) window.location.reload()
    })
}, 200);
```

And add this to your server.js code

```javascript
let version = '' + Math.random()
app.get('/version', (req, res) => res.send(version))
```

And now when you modify your source files, nodemon will restart your server, which will automatically refresh the page.

We've been running webpack and reload directly from the terminal. However, it's convenient to put it in package.json

```javascript
"scripts": {
    "webpack": "webpack --watch",
    "reload": "reload server.js"
  }, 
```
And now we can just run it with npm

```
npm run webpack
npm run reload
```

This is great for development, but what if you want to reload automatically on your server? Just use nodemon instead of reload.

```
npm install -g nodemon
nodemon server.js
```
