const express = require('express');
const app = express();
const logger = require('../logger');

// req => middleware => res

app.use(logger);
// app.use('api', logger);

// api/home/about/products
app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});