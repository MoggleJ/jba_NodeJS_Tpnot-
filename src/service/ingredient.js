const data = require('../service/data.js');

const addIngredient = async() => {
    let ingredient= await data.getData();
    return ingredient;
}

const listIngredient = async() => {
    let ingredient= await data.getData();
    return ingredient;
}

module.exports = {
    addIngredient,
    listIngredient
};