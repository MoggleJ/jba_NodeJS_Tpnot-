const data = require('../service/data.js');

const getRhumsInfos = async() => {
    let Rhums= await data.getData();
    return Rhums;
}

module.exports = {
    getRhumsInfos
};