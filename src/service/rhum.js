const data = require('../service/data.js');

const getRhumsList = async() => {
    let Rhums= await data.getData();
    return Rhums;
}

const searchRhum = async (filter, info) => {
    let rhumsList = await getRhumsList();
    console.log('PokeInfos:', rhumsList);  // Log des données récupérées

    switch (filter) {
        case 'name':
            return rhumsList.filter(pokemon => pokemon.name.french.toLowerCase() === info.toLowerCase());

        case 'type':
            return rhumsList.filter(pokemon => pokemon.type[0].toLowerCase().includes(info.toLowerCase()));

        case 'country':
            return rhumsList.filter(pokemon => pokemon.type.some(type => type.toLowerCase().includes(info.toLowerCase())));

        default:
            return [];
    }
};

module.exports = {
    getRhumsList,
    searchRhum
};