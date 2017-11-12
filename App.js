// App.js
import React from 'react';

let _version = undefined;
setInterval(() => {
    fetch('/version')
    .then(d => d.json())
    .then(x => {
        if(!_version) _version = x;
        else if(_version != x) window.location.reload()
    })
}, 200);


class App extends React.Component {
   render() {
      return (
         <div>
            !! WHAT !!!
         </div>
      );
   }
}

export default App