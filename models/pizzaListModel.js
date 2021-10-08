const mongose = require('mongoose');

const pizzaListSchema = new mongose.Schema({
    id: {
        type: String
    },
    type: {
        type: String
    },
    price: {
        type: Number
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    ingredients: {
        type: Array
    },
    topping: {
        type: Array
    }
});

// CREATING MODEL USING SCHEMA
const PizzaList = mongose.model('pizzaList', pizzaListSchema);

module.exports = PizzaList;