const express = require('express');
const app = express();
const { products, people } = require('../data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a><br><br><a href="/api/people">people</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/people', (req, res) => {
    res.json(people);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});