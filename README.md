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

const csstats = new CSStats();

(async () => {
    const data = await csstats.parse(path.resolve(__dirname, './data/csstats.dat'));
    console.log(data);
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)