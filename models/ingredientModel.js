const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    id: Number,
    tname: String,
    price: Number,
    image: String
});

//CREATING MODEL 
const Ingredient = mongoose.model('ingredient', ingredientSchema);

module.exports = Ingredient;