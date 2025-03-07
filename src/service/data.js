const fs = require('fs');

const getData = async()=> {
    let data = await fs.readFileSync('src/data/rhum.json', 'utf8');
    return JSON.parse(data);
};

module.exports = {
    getData
}