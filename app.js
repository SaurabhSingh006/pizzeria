// IMPORTING PACKAGES AND FILES
const express = require('express');
const cors = require('cors');
const PizzaList = require('./models/pizzaListModel');
const Ingredient = require('./models/ingredientModel');

const app = express();

//CORS CONFIGURATION
app.use(cors());

// ROUTING DEFINATION
app.get('', (req, res) => {
    res.status(200).send('Welcome to Pizzera');
})

// ROUTE => http://localhost:3000/pizzalist
app.get('/pizzalist', async (req, res) => {
    try {
        const queryData = await PizzaList.find();
        res.status(200).json({
            status: true,
            data: queryData
        });
    } catch (err) {
        console.log(err);
    }
});

// ROUTE => http://localhost:3000/ingredients
app.get('/ingredients', async (req, res) => {
    try {
        const queryData = await Ingredient.find();
        res.status(200).json({
            status: true,
            data: queryData
        });
    } catch (error) {
        res.status(404).json({
            status: false,
            message: error.message,
            error
        });
    }
});

module.exports = app;
