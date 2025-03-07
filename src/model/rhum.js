const mongoose = require('mongoose');
const rhumSchema = new mongoose.Schema({
    id: String,
    name: String,
    rxid_number: Number,
    pays: String,
    distillerie: String,
    ABV: String,
    categorie: String,
    vintage: Number,
    fabriqueAvec: String,
    distillation: String,
    volume: String,
    age: String,
    type: String,
    degre: Number,
    imagePath: String,
    visible: Boolean,
    createdAt: JSON,
    updatedAt: JSON,
    "__v": Number
});
module.exports = mongoose.model('User', rhumSchema);