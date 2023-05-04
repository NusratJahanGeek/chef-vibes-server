const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')
const recipes = require('./data/chefRecipes.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('ChefVibes Website Is Running')
});

app.get('/chefs', (req, res) =>{
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedChefs = chefs.find(c => c.id === id);
    res.send(selectedChefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedRecipes = recipes.find(r => r.id === id);
    res.send(selectedRecipes)
})

app.listen(port, () => {
    console.log(`ChefVibes API is running on port: ${port}`)
})