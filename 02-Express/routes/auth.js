const express = require('express');
const router = express.Router();

// Methods - POST (Form Example)
router.post('/', (req, res) => {
    // console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    // res.send('POST');
    res.status(401).send('Please Provide Credentials');
});

module.exports = router;