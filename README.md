# csstats-reader
Node.js package for parse AMX Mod X Stats File.

<p align="center">
  <img src="assets/imgs/csstats.png">
</p>

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install csstats-reader
````

# Example
```javascript
const CSStats = require('csstats-reader');

const csstats = new CSStats({
  path: 'C:/Users/giova/Desktop/Counter-Strike 1.6/cstrike/addons/amxmodx/data/csstats.dat',
});

(async () => {
  const data = await csstats.players();
  console.log(data);
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)