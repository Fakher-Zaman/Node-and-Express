const express = require('express');
const router = express.Router();

let { people } = require('../data');

// Method: GET
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

// Methods - POST (Javascript Example)
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please Provide Name Value' });
    }
    res.status(201).json({ success: true, person: name });
});

// POSTMAN - POST (JSON Example)
router.post('/postman', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please Provide Name Value' });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});

// Methods - PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No Person with id ${id}` });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
});

// Methods - DELETE
router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No Person with id ${req.params.id}` });
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;