const express = require('express');
const app = express();
let { people } = require('../data');

// static assets
app.use(express.static('../methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// Method: GET
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post('/login', (req, res) => {
    // console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    // res.send('POST');
    res.status(401).send('Please Provide Credentials');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});