const express = require('express');
const app = express();

const { products, people } = require('../data');

app.get('/', (req, res) => {
    res.json(products);
});

// app.get('/', (req, res) => {
//     res.json([{ name: 'fakher zaman' }, { name: 'hammad asif' }]);
// });

const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});