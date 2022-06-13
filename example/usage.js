const CSStats = require('../index');
const path = require('path');

const csstats = new CSStats();

(async () => {
    const data = await csstats.parse(path.resolve(__dirname, './data/csstats.dat'));
    console.log(data);
})();